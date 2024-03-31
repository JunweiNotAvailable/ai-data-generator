'use client'

import { Back, Menu } from '@/app/utils/svgs'
import Link from 'next/link';
import React, { useState } from 'react'

const MobileSidebar = ({ dataList }: { dataList: { id: number, name: string }[] }) => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button className='md:hidden w-6 h-6 flex items-center p-1 mb-4 ml-4' onClick={() => setShowMenu(true)}><Menu color='#64748b' /></button>
      <aside className={`md:hidden transition-all absolute top-0 z-40 w-screen h-full bg-slate-50 p-4 ${showMenu ? 'left-0' : '-left-full'}`}>
        <div className='flex justify-end mb-4'>
          <button className='w-6 h-6 flex items-center p-1' onClick={() => setShowMenu(false)}><Back color='#64748b' /></button>
        </div>
        {dataList.map(d => <Link href={`/data/${d.id}`} key={d.id} className='block mb-2 w-full text-left py-2 px-3 text-sm rounded hover:bg-slate-200'>{d.name}</Link>)}
      </aside>
    </>
  )
}

export default MobileSidebar