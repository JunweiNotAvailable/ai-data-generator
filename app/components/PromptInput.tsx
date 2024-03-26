'use client';

import React, { useRef, useState } from 'react'
import { useHomeState } from '../contexts/HomeContext';
import ArrowRight from './svgs/ArrowRight';
import { runChat } from '../gemini';
import { useEventListener } from '@iwbam/react-ez';

const PromptInput = () => {

  const inputRef = useRef(null);
  const { promptInput, setPromptInput, history, setHistory, loading, setLoading } = useHomeState();
  const [isFocused, setIsFocused] = useState(false);

  // handle keyboard event
  useEventListener('keydown', async (e: KeyboardEvent) => {
    if (e.shiftKey && e.key === 'Enter') {
      setPromptInput(prev => prev + '\n');
    } else if (e.key === 'Enter' && isFocused) {
      await sendPrompt();
    }
  });

  // handle prompt input
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value[e.target.value.length - 1] === '\n') return;
    setPromptInput(e.target.value);
  }

  // send the prompt to gemini api
  const sendPrompt = async () => {
    setLoading(true);
    setPromptInput('');
    const res = await runChat(promptInput, history);
    setHistory(res.history);
    setLoading(false);
  }

  return (
    <div className={`transition-2 flex items-center pl-5 pr-3 py-3 box-border rounded-full border border-slate-300 outline-none ${isFocused ? 'shadow-md bg-slate-100' : 'shadow-sm bg-slate-50'} w-full`} onClick={() => (inputRef.current as any as HTMLElement).focus()}>
      <textarea rows={1} ref={inputRef} placeholder='Your data prompt' className='resize-none flex-1 placeholder:text-gray-400 text-sm bg-transparent outline-none' onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} value={promptInput} onInput={handleInput} />
      <button className={`w-4 px-2 py-1 box-content ${promptInput.length === 0 ? '*:stroke-slate-300 *:hover:stroke-slate-300' : '*:stroke-slate-500 *:hover:stroke-slate-800'}`} disabled={promptInput.length === 0} onClick={sendPrompt}><ArrowRight /></button>
    </div>
  )
}

export default PromptInput