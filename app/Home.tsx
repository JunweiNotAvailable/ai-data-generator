import React from 'react'
import Messages from './components/Messages';
import PromptInput from './components/PromptInput';
import InputButton from './components/InputBottom';

const Home = async () => {
  return (
    <div className='flex flex-1 overflow-hidden'>
      <main className='flex-1 flex justify-center items-center'>
        <div className='transition-2 flex flex-col justify-center items-center w-full h-full'>
          <Messages />
          <div className='flex flex-col items-center text-center pt-2 sticky bottom-0 w-5/6 max-w-3xl'>
            <PromptInput />
            <InputButton />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home