'use client'

import { useDataState } from '@/app/contexts/DataContext'
import React, { useEffect, useState } from 'react'
import styles from './components.module.css';
import { DataProps } from '../utils/interfaces';
import { getFileSize, saveBufferAsFile, stringToArrayBuffer } from '../utils/functions';
import { Download } from '../utils/svgs';
import MarkdownClient from './MarkdownClient';

const DataResult = ({ data, isGenerating, content }: { data: DataProps, isGenerating: boolean, content: string }) => {

  const { generatingStep, setGeneratingStep, dataContent, setDataContent } = useDataState();
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [showing, setShowing] = useState('text');

  useEffect(() => setDataContent(content), [content]);
  useEffect(() => setGeneratingStep(isGenerating ? 0 : 120), [isGenerating]);

  // Download file
  const download = () => saveBufferAsFile(stringToArrayBuffer(dataContent), `${data.name}.txt`, 'plain/text');

  return (
    <>
      <div className='flex items-center justify-between mt-4'>
        <div className='text-sm font-semibold'>Data</div>
        <div className='flex'>
          <button onClick={() => setShowing('markdown')} className={`text-xs rounded-l-md py-1 px-4 border text-gray-600 ${showing === 'markdown' ? 'shadow-inner bg-slate-100' : 'bg-white'}`}>Markdown</button>
          <button onClick={() => setShowing('text')} className={`text-xs rounded-r-md py-1 px-4 border text-gray-600 ${showing === 'text' ? 'shadow-inner bg-slate-100' : 'bg-white'}`}>Text</button>
        </div>
      </div>
      {generatingStep <= 100 ?
        <div className='bg-white mt-2 border rounded shadow-sm flex justify-center items-center h-36'>
          <p className='text-sm font-bold text-gray-600'>Processing data...</p>
        </div>
        :
        // flip
        <div className={`${styles.container} mt-2 relative ${showing === 'markdown' ? styles.flip : ''}`}>
          {/* front */}
          <div className={`${styles.front} absolute w-full flex flex-col text-xs bg-white border rounded shadow-sm`}>
            <div className='p-1.5 px-3 border-b flex items-center justify-between'>
              <div>{data.name}.txt</div>
              <div className='flex items-center'>
                <div className='font-light text-xs text-gray-400 mr-4'>{getFileSize(dataContent)}</div>
                <button className='w-5 h-5 box-border p-1 rounded-full' onClick={download}><Download color='#4B5563' /></button>
              </div>
            </div>
            <div className={`${styles.dataContent} flex-1 flex flex-col relative`}>
              <div className='flex-1 px-2 whitespace-pre-wrap scroller'>{isShowingMore ? dataContent : `${dataContent.slice(0, 2000)}...`}</div>
            </div>
            {dataContent.length > 2000 && <button className='text-xs font-bold text-gray-600 text-left p-2' onClick={() => setIsShowingMore(!isShowingMore)}>{isShowingMore ? 'Show less' : 'Show more'}</button>}
          </div>
          {/* back */}
          <div className={`${styles.back} ${showing === 'markdown' ? 'z-0' : '-z-20'} absolute w-full flex flex-col text-xs bg-white border rounded shadow-sm`}>
            <div className='p-1.5 px-3 border-b flex items-center justify-between'>
              <div>{data.name}.txt</div>
              <div className='flex items-center'>
                <div className='font-light text-xs text-gray-400 mr-4'>{getFileSize(dataContent)}</div>
                <button className='w-5 h-5 box-border p-1 rounded-full' onClick={download}><Download color='#4B5563' /></button>
              </div>
            </div>
            <div className={`${styles.dataContent} flex-1 flex flex-col relative`}>
              <div className='flex-1 px-2 whitespace-pre-wrap scroller p-2'>
                <MarkdownClient source={dataContent} className='markdown-content small' />  
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default DataResult