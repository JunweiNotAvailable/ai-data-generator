'use client';

import React, { useState } from 'react'
import { useDataState } from '../contexts/DataContext';
import styles from './components.module.css';
import { useAsyncEffect } from '@iwbam/react-ez';
import { runChat } from '../gemini';
import { instruction, moreExamplesPrompts, sampleResponse } from '../utils/constants';
import { Content } from '@google/generative-ai';
import { DataProps } from '../utils/interfaces';

const DataProcess = ({ data }: { data: DataProps }) => {

  const { generatingStep, setGeneratingStep, dataContent, setDataContent } = useDataState();
  const [prevResponse, setPrevResponse] = useState<Content[]>([
    { role: 'user', parts: [{ text: instruction }] },
    { role: 'model', parts: [{ text: sampleResponse }] },
    { role: 'user', parts: [{ text: data.prompt }] },
    { role: 'model', parts: [{ text: data.sample }] },
  ]);

  // Generate data in 10 steps
  useAsyncEffect(async () => {
    if (generatingStep < 100) {
      const text = (await runChat(moreExamplesPrompts[generatingStep / 20], prevResponse)).response;
      setPrevResponse([
        ...prevResponse, 
        { role: 'user', parts: [{ text: moreExamplesPrompts[generatingStep / 20] }] },
        { role: 'model', parts: [{ text: text }] }
      ]);
      setDataContent(dataContent + '\n' + text);
      setGeneratingStep(generatingStep + 20);
    } else { // If generating is done
      // Store data to s3
      await fetch(`${process.env.s3ApiUrl}`, { method: 'POST', body: JSON.stringify({ bucket: 'gedata-bucket', path: data.filename, content: dataContent }) });
      // Update step in database
      await fetch(`/api/data/updatestep`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: data.id, step: 120 }) })
      setGeneratingStep(120);
    }
  }, [generatingStep]);

  return (
    generatingStep <= 100 &&
    <div className='sticky top-0 bg-slate-50 pt-2 pb-4 z-20 px-2'>
      <div className='flex items-center'>
        <div className='text-xs text-gray-600'>{Math.floor(generatingStep)}%</div>
        <div className='text-xs text-gray-600 ml-2'>Generating data</div>
      </div>
      <div className='bg-gray-200 rounded-full w-full h-1.5 flex-1 flex justify-start mt-1'>
        <div className={`${styles.progress} h-full rounded-full bg-green-500`} style={{ width: `${Math.floor(generatingStep)}%` }} />
      </div>
    </div>
  )
}

export default DataProcess