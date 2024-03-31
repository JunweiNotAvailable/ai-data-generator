import React from 'react'
import PromptInput from './components/PromptInput'
import InputBottom from './components/InputBottom'
import Logo from './components/Logo'
import AnimatedSection from './components/AnimatedSection'
import LoginButton from './components/LoginButton'
import AnimatedBackground from './components/AnimatedBackground'

const Landing = ({ unauthenticated }: { unauthenticated?: boolean }) => {
  return (
    <main className='landing scroller scroller-dark flex-1 w-full *:mx-2'>
      <section className='relative overflow-hidden flex flex-col items-center justify-center h-4/5 md:h-full'>
        <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center -z-10'>
          <div className='w-4/5 sm:w-2/5'>
            <Logo />
            <div className='absolute w-full h-full top-0 left-0' style={{ background: '#ffffffe8' }} />
          </div>
        </div>
        <div className='transition-2 flex flex-col justify-center items-center w-full h-full px-4'>
          <div className='font-semibold text-3xl md:text-4xl text-center'>Generate data with AI</div>
          <div className='mb-8 my-4 font-light text-center'>{"Generate AI training data with simple prompt."}</div>
          <div className='flex flex-col items-center text-center pt-2 sticky bottom-0 w-11/12 md:w-5/6 max-w-3xl'>
            <PromptInput initialHistory={[]} unauthenticated={unauthenticated} />
            <InputBottom />
          </div>
        </div>
      </section>
      <AnimatedSection />
      <section className='h-4/5 md:h-full items-center relative flex flex-col justify-center overflow-hidden'>
        <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center -z-10'>
          <div className='w-5/6'>
            <AnimatedBackground />
          </div>
        </div>
        <div className='font-semibold text-3xl md:text-4xl text-center'>Built for AI developers</div>
        <div className='mb-8 my-4 font-light text-center'>{"Can't find data for your AI model? You're in the right place"}</div>
        <div>
          {unauthenticated && <LoginButton text={'Get started'} />}
        </div>
      </section>
    </main>
  )
}

export default Landing