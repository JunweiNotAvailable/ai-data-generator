'use client'

import { Content } from '@google/generative-ai'
import React, { useEffect } from 'react'
import { useHomeState } from '../contexts/HomeContext'
import MarkdownEditor from '@uiw/react-markdown-editor'
import Logo from './svgs/Logo'

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
      <div className='flex-1 flex flex-col items-center w-full scroller mb-2'>
        {history.map((content, i) => <div key={i} className='flex items-start w-4/5 max-w-2xl mt-8 mb-4'>
          <div className='mr-4'>
            <div className='rounded-full w-8 aspect-square flex justify-center items-center p-0.5'>
              {content.role === 'model' ? <Logo /> : <></>}
            </div>
          </div>
          <MarkdownEditor.Markdown className='markdown-content flex-1 mt-1' source={content.parts[0].text} />
        </div>)}
      </div>
  )
}

export default Messages