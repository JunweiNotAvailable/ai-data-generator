'use client';

import React from 'react'
import { useHomeState } from '../contexts/HomeContext'
import { appName } from '../utils/constants';
import ArrowUpRight from './svgs/ArrowUpRight';

const InputBottom = () => {

  const { history } = useHomeState();

  return (
    history.length === 0 ?
    <button className='flex items-center border border-slate-300 rounded mt-8 text-sm px-3 py-1 hover:bg-slate-50 *:stroke-slate-600 text-slate-600'>Sample prompt<span className='ml-2 block w-4'><ArrowUpRight /></span></button>
    :
    <div className='my-1 text-xs text-gray-400 font-light'>{appName} is still in dev mode</div>
  )
}

export default InputBottom