'use client'

import MarkdownClient from '@/app/components/MarkdownClient';
import { DataProps } from '@/app/utils/interfaces'
import React, { useState } from 'react'
import styles from './DataPage.module.css';

const Sample = ({ data }: { data: DataProps }) => {

  const [showing, setShowing] = useState('markdown');

  return (
    <>
      <div className='flex items-center justify-between mt-4'>
        <div className='text-sm font-semibold'>Sample</div>
        <div className='flex'>
          <button onClick={() => setShowing('markdown')} className={`text-xs rounded-l-md py-1 px-4 border text-gray-600 ${showing === 'markdown' ? 'shadow-inner bg-slate-100' : 'bg-white'}`}>Markdown</button>
          <button onClick={() => setShowing('text')} className={`text-xs rounded-r-md py-1 px-4 border text-gray-600 ${showing === 'text' ? 'shadow-inner bg-slate-100' : 'bg-white'}`}>Text</button>
        </div>
      </div>
      {/* flip */}
      <div className={`${styles.container} mt-2 relative ${showing === 'text' ? styles.flip : ''}`}>
        <div className={`${styles.front} absolute scroller scroller-light h-full w-full rounded py-2 px-3 bg-white border shadow-sm`}>
          <MarkdownClient className={'markdown-content small'} source={data.sample} />
        </div>
        <div className={`${styles.back} absolute scroller scroller-light h-full w-full rounded py-2 px-3 bg-white border shadow-sm`}>
          <div className='text-xs whitespace-pre-wrap'>{data.sample}</div>
        </div>
      </div>
    </>
  )
}

export default Sample