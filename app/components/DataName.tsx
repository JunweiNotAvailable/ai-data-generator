'use client';

import React, { useEffect, useState } from 'react'
import { DataProps } from '../utils/interfaces';
import { Check, Pen } from '../utils/svgs';
import { useRouter } from 'next/navigation';

const DataName = ({ data }: { data: DataProps }) => {

  const router = useRouter();
  const [name, setName] = useState(data.name);
  const [isEditting, setIsEditting] = useState(false);

  const handleChangeName = async () => {
    setIsEditting(false);
    await fetch(`/api/data/updatename`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: data.id, name: name }) });
    router.refresh();
  }

  return (
    <div className='flex items-center'>
      {isEditting ?
      <>
        <input className='border rounded outline-none py-1 px-2 text-sm' value={name} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
        <button className='ml-4 w-5 p-0.5' onClick={handleChangeName}><Check color='#61c283' /></button>
      </>
      : 
      <>
        <h2 className='font-bold text-lg'>{name}</h2>
        <button className='ml-4 w-5 p-0.5' onClick={() => setIsEditting(true)}><Pen color='#818283' /></button>
      </>}
    </div>
  )
}

export default DataName