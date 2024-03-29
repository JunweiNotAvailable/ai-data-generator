'use client';

import React from 'react'
import { useHomeState } from '../contexts/HomeContext'
import { appName, promptSamples } from '../utils/constants';
import { ArrowUpRight } from '../utils/svgs';
import { randInt } from '../utils/functions';

const InputBottom = () => {

  const { setPromptInput, history } = useHomeState();

  const setSamplePrompt = () => {
    setPromptInput(promptSamples[randInt(0, promptSamples.length)]);
  }

  return (
    history.slice(2).length === 0 ?
      <button onClick={setSamplePrompt} className='flex items-center border border-slate-300 rounded mt-8 text-sm px-3 py-1 hover:bg-slate-100 *:stroke-slate-600 text-slate-600'>Sample prompt<span className='ml-2 block w-4'><ArrowUpRight /></span></button>
      :
      <div className='my-1 text-xs text-gray-400 font-light'>{appName} is built on Gemini API</div>
  )
}

export default InputBottom