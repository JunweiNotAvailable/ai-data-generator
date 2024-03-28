'use client';

import { Content } from '@google/generative-ai'
import React from 'react'
import Messages from './Messages'
import PromptInput from './PromptInput'
import InputBottom from './InputBottom'
import { useSession } from 'next-auth/react';
import Logo from './svgs/Logo';

const ChatContent = ({ initialHistory }: { initialHistory: Content[] }) => {

  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className='w-24'><Logo /></div>
    )
  }

  return (
    <>
      <Messages initialHistory={initialHistory} />
      <div className='flex flex-col items-center text-center pt-2 sticky bottom-0 w-5/6 max-w-3xl'>
        <PromptInput />
        <InputBottom />
      </div>
    </>
  )
}

export default ChatContent