'use client'

import { Content } from '@google/generative-ai'
import React, { useEffect } from 'react'
import { useHomeState } from '../contexts/HomeContext'

interface Props {
  initialHistory: Content[]
}

const Messages: React.FC<Props> = ({ initialHistory }) => {

  const { history, setHistory } = useHomeState();

  // Setup initial history messages
  useEffect(() => setHistory(initialHistory), [initialHistory]);

  return (
    history.length === 0 ?
      // empty history
      <div>
        <div className='mb-12 font-bold text-4xl text-slate-600 text-center'>Generate data with AI</div>
      </div>
      :
      // messages
      <div className='flex-1 w-full'>
        {history.map(content => <div>{content.parts[0].text}</div>)}
      </div>
  )
}

export default Messages