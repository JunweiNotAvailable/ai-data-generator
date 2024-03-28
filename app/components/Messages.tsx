'use client'

import { Content } from '@google/generative-ai'
import React, { useEffect, useRef } from 'react'
import { useHomeState } from '../contexts/HomeContext'
import MarkdownEditor from '@uiw/react-markdown-editor'
import Logo from './svgs/Logo'
import Avatar from './svgs/Avatar'
import styles from './components.module.css'
import { useSession } from 'next-auth/react'
import { useAsyncEffect } from '@iwbam/react-ez'

const Messages = () => {

  const messagesRef = useRef(null);
  const { data: session, status } = useSession();
  const { history, setHistory, loading } = useHomeState();

  // Setup initial history messages
  useAsyncEffect(async () => {
    if (status === 'authenticated') {
      const res = await (await fetch(`api/data/getchathistory?chatName=New%20Data%20Chat&userEmail=${session?.user?.email}`)).json();
      if (res.rows?.[0]) {
        const initialHistory: Content[] = res.rows[0].history;
        setHistory(initialHistory);
      }
    }
  }, [status]);

  // scroll to bottom when history changes
  useEffect(() => {
    if (!messagesRef.current) return;
    const listElement = messagesRef.current as HTMLElement;
    listElement.scrollTo({ top: listElement.scrollHeight, behavior: 'smooth' });
  }, [history]);

  return (
    history.slice(2).length === 0 ?
      // empty history
      <div>
        <div className='mb-12 font-bold text-4xl text-slate-600 text-center'>Generate data with AI</div>
      </div>
      :
      // messages
      <div ref={messagesRef} className='flex-1 flex flex-col items-center w-full scroller mb-2'>
        {history.slice(2).map((content, i) => <div key={i} className='flex items-start w-4/5 max-w-2xl mt-8 mb-4'>
          <div className='mr-4'>
            <div className='rounded-full w-8 aspect-square flex justify-center items-center p-0.5'>
              {content.role === 'model' ?
                <Logo />
                :
                <div className='*:stroke-slate-500 p-1'><Avatar /></div>}
            </div>
          </div>
          <MarkdownEditor.Markdown className='markdown-content flex-1 mt-1' source={content.parts[0].text} />
        </div>)}
        {/* Loading message */}
        {loading && <div className='flex items-start w-4/5 max-w-2xl mt-8 mb-4'>
          <div className='mr-4'>
            <div className='rounded-full w-8 aspect-square flex justify-center items-center p-0.5'><Logo /></div>
          </div>
          <div className='flex flex-col w-full'>
            <div className={`${styles.loadingMessage}`} />
            <div className={`${styles.loadingMessage} ${styles.delay500} mt-2`} />
            <div className={`${styles.loadingMessage} ${styles.delay1000} mt-2`} />
          </div>
        </div>}
      </div>
  )
}

export default Messages