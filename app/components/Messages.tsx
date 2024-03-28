'use client'

import { Content } from '@google/generative-ai'
import React, { useEffect, useRef, useState } from 'react'
import { useHomeState } from '../contexts/HomeContext'
import MarkdownEditor from '@uiw/react-markdown-editor'
import Logo from './svgs/Logo'
import Avatar from './svgs/Avatar'
import styles from './components.module.css'
import Delete from './svgs/Delete'
import { useEventListener } from '@iwbam/react-ez'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Spinner from './svgs/Spinner'

const Messages = ({ initialHistory }: { initialHistory: Content[] }) => {

  const router = useRouter();
  const { data: session, status } = useSession();
  const { history, setHistory, loading } = useHomeState();
  const messagesRef = useRef(null);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.delete-confirm')) {
      setDeleteConfirm(false);
    }
  });

  // Setup initial history messages
  useEffect(() => {
    setHistory(initialHistory);
  }, [initialHistory]);

  // scroll to bottom when history changes
  useEffect(() => {
    if (!messagesRef.current) return;
    const isFirst = initialHistory.length === history.length;
    const listElement = messagesRef.current as HTMLElement;
    listElement.scrollTo({ top: listElement.scrollHeight, behavior: isFirst ? 'instant' : 'smooth' });
  }, [history]);

  // Delete chat history
  const deleteHistory = async () => {
    setDeleting(true);
    await fetch(`/api/data/deletechat?chatName=New%20Data%20Chat&userEmail=${session?.user?.email}`, { method: 'DELETE' });
    router.refresh();
    setDeleting(false);
  }

  return (
    history.slice(2).length === 0 ?
      // empty history
      <div>
        <div className='mb-12 font-bold text-4xl text-slate-600 text-center'>Generate data with AI</div>
      </div>
      :
      // messages
      <div className='flex-1 flex flex-col w-full mb-2 relative overflow-hidden'>
        <div ref={messagesRef} className='flex-1 flex flex-col items-center w-full scroller'>
          {history.slice(2).map((content, i) => <div key={i} className='flex items-start w-5/6 md:w-4/5 max-w-2xl mt-8 mb-4'>
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
        {/* delete icon */}
        <div className='sticky bottom-0 w-full flex justify-end pb-2 pr-2'>
          <button onClick={() => setDeleteConfirm(true)} className='delete-confirm rounded-full bg-white flex items-center justify-center border p-2 w-8 aspect-square shadow '><Delete color='#475569' /></button>
          <div className={`${deleteConfirm ? 'block' : 'hidden'} delete-confirm absolute bg-white z-10 rounded p-2 right-4 border shadow-md w-48`} style={{ bottom: '120%' }}>
            <div className='text-sm text-gray-500'>Clear chat history?</div>
            <div className='flex justify-end mt-2'>
              <button className='bg-red-400 disabled:bg-red-200 flex items-center justify-center text-white text-xs py-1 px-3 rounded shadow-sm' onClick={deleteHistory} disabled={deleting}>{deleting ? <span className='block w-4'><Spinner color='#fff' /></span> : 'Delete'}</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Messages