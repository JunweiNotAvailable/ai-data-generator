import React from 'react'
import Messages from './components/Messages';
import { Content } from '@google/generative-ai';
import PromptInput from './components/PromptInput';
import InputButton from './components/InputBottom';

const Home = async () => {

  // load history from database
  const history: Content[] = [];

  return (
    <div className='flex flex-1'>
      <main className='flex-1 flex justify-center items-center'>
        <div className='transition-2 flex flex-col justify-center items-center w-4/5 max-w-2xl h-full'>
          <Messages initialHistory={history} />
          <PromptInput />
          <InputButton />
        </div>
      </main>
    </div>
  )
}

export default Home