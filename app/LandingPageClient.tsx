'use client'

import React, { useEffect } from 'react'
import ChatContent from './components/ChatContent'
import { Content } from '@google/generative-ai'
import { useHomeState } from './contexts/HomeContext'
import Landing from './LandingPage'
import { useSession } from 'next-auth/react'
import Logo from './components/Logo'

const LandingPageClient = ({ initialHistory }: { initialHistory: Content[] }) => {

  const { data: session, status } = useSession();
  const { history, setHistory } = useHomeState();

  useEffect(() => setHistory(initialHistory), [initialHistory]);

  return (
    status === 'loading' ?
      <main className='w-full flex-1 flex justify-center items-center'>
        <div className='w-24'><Logo /></div>
      </main>
      : history.length > 0 ?
        <div className='flex flex-1 overflow-hidden w-screen'>
          <main className='flex-1 flex justify-center items-center w-full'>
            <div className='transition-2 flex flex-col justify-center items-center w-full h-full'>
              <ChatContent initialHistory={initialHistory} />
            </div>
          </main>
        </div>
        :
        <Landing />
  )
}

export default LandingPageClient