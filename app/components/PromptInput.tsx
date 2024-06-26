'use client';

import React, { useEffect, useRef, useState } from 'react'
import { useHomeState } from '../contexts/HomeContext';
import { ArrowRight, Close } from '../utils/svgs';
import { runChat } from '../gemini';
import { useEventListener } from '@iwbam/react-ez';
import styles from './components.module.css'
import { signIn, useSession } from 'next-auth/react';
import { instruction, sampleResponse } from '../utils/constants';
import { Content } from '@google/generative-ai';
import LoginButton from './LoginButton';

const PromptInput = ({ initialHistory, unauthenticated }: { initialHistory: Content[], unauthenticated?: boolean }) => {

  const { data: session, status } = useSession();
  const inputRef = useRef(null);
  const { promptInput, setPromptInput, history, setHistory, loading, setLoading } = useHomeState();
  const [isFocused, setIsFocused] = useState(false);
  const [showingPopup, setShowingPopup] = useState(false);

  // Adjust input height when input content changes
  useEffect(() => {
    // adjust input height
    const numLines = promptInput.split('\n').length;
    const rows = Math.min(numLines, 8);
    (inputRef.current as any as HTMLTextAreaElement).rows = rows;
  }, [promptInput]);

  // handle keyboard event
  useEventListener('keydown', async (e: KeyboardEvent) => {
    if (isFocused && e.shiftKey && e.key === 'Enter') {
      setPromptInput(prev => prev + '\n');
    } else if (e.key === 'Enter' && isFocused) {
      await sendPrompt();
    }
  });

  // handle click
  useEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.popup-trigger') && !target.closest('.popup')) {
      setShowingPopup(false);
    }
  });

  // handle prompt input
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const isDelete = e.target.value.length < promptInput.length;
    if (!isDelete && e.target.value[e.target.value.length - 1] === '\n') return;
    setPromptInput(e.target.value);
  }

  // send the prompt to gemini api
  const sendPrompt = async () => {
    if (status !== 'authenticated') {
      signIn('github');
      return;
    }
    setLoading(true);
    setPromptInput('');
    setHistory(prev => [...prev, { role: 'user', parts: [{ text: promptInput }] }]);
    // Check if chat exist
    const chatExist = initialHistory.length !== 0;
    if (!chatExist) { // chat exist
      await fetch('api/data/insertchat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
          name: 'New Data Chat',
          history: [],
          userEmail: session.user?.email,
        })
      });
    }
    const instructionHistory: Content[] = [{ role: 'user', parts: [{ text: instruction }] }, { role: 'model', parts: [{ text: sampleResponse }] }];
    const { response } = await runChat(promptInput, [...instructionHistory, ...history]);
    // Update chat in database
    const newMessages: Content[] = [{ role: 'user', parts: [{ text: promptInput }] }, { role: 'model', parts: [{ text: response }] }];
    await fetch('api/data/insertmessage', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        chatName: 'New Data Chat',
        messages: newMessages,
        userEmail: session.user?.email,
      })
    });
    setHistory(prev => [...prev, { role: 'model', parts: [{ text: response }] }]);
    setLoading(false);
  }

  // show sign in popup if not logged in
  const showSignInPopup = () => setShowingPopup(true);

  return (
    <>
      <div className={`transition-2 flex items-center pl-5 pr-3 py-3 box-border rounded-3xl border border-slate-300 outline-none ${isFocused ? 'shadow-md bg-slate-100' : 'shadow-sm bg-slate-50'} w-full`} onClick={() => (inputRef.current as any as HTMLElement).focus()}>
        <textarea rows={1} ref={inputRef} placeholder='Your data prompt' className={`${styles.promptInput} scroller resize-none flex-1 placeholder:text-gray-400 text-sm bg-transparent outline-none`} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} value={promptInput} onInput={handleInput} />
        <button className={`popup-trigger w-4 px-2 py-1 box-content ${promptInput.length === 0 ? '*:stroke-slate-300 *:hover:stroke-slate-300' : '*:stroke-slate-500 *:hover:stroke-slate-800'}`} disabled={promptInput.length === 0} onClick={unauthenticated ? showSignInPopup : sendPrompt}><ArrowRight /></button>
      </div>
      {showingPopup && <div className='fixed h-screen flex items-center justify-center w-screen top-0 left-0' style={{ zIndex: 1000, background: '#0003' }}>
        <div className='popup relative bg-white flex flex-col items-center rounded-lg p-4 w-4/5 max-w-96 z-50'>
          <div className='font-semibold text-xl mt-2'>Sign in</div>
          <div className='mt-2 text-gray-500'>Sign in to generate your custom data</div>
          <div className='mt-8 mb-4'>
            <LoginButton />
          </div>
          <button className='absolute top-4 right-4 p-1 w-5' onClick={() => setShowingPopup(false)}><Close /></button>
        </div>
      </div>}
    </>
  )
}

export default PromptInput