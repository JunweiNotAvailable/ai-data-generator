'use client'

import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { Exit, Avatar, Github, Data } from '../utils/svgs';
import Logo from './Logo';
import styles from './components.module.css';
import { useEventListener } from '@iwbam/react-ez';
import Link from 'next/link';

const NavbarMenu = () => {

  const { data: session, status } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  useEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.nav-menu') || target.classList.contains('nav-button')) {
      setShowMenu(false);
    }
  });

  return (
    status === 'authenticated' ?
      <div className='relative'>
        <div className='rounded-full bg-gray-200 overflow-hidden cursor-pointer w-8 p-2 aspect-square' onClick={() => setShowMenu(true)}><Avatar color='#475569' /></div>
        {showMenu && <nav className={`${styles.nav} nav-menu absolute top-full mt-2 z-30 w-60 right-0 bg-white rounded-md shadow overflow-hidden py-2`}>
          <div className='px-5 py-2'>
            <div className='text-sm font-bold'>{session.user?.name}</div>
            <div className='text-sm text-gray-400'>{session.user?.email}</div>
          </div>
          <Link className='nav-button flex items-center text-sm w-full py-2 px-5 text-slate-600 hover:bg-slate-100' href={'/'}><span className='block w-3.5 mr-2'><Logo color='#475569' /></span>Chat</Link>
          <Link className='nav-button flex items-center text-sm w-full py-2 px-5 text-slate-600 hover:bg-slate-100' href={'/data'}><span className='block h-3.5 w-3.5 mr-2'><Data color='#475569' /></span>Data</Link>
          <button className='nav-button flex items-center text-sm w-full py-2 px-5 text-slate-600 hover:bg-slate-100' onClick={() => signOut()}><span className='block h-3.5 w-3.5 mr-2'><Exit color='#475569' /></span>Sign out</button>
        </nav>}
      </div>
      : status === 'unauthenticated' ?
        <button className='flex items-center border text-sm py-1 px-4 rounded border-slate-300 hover:bg-slate-100 text-github font-semibold' onClick={() => signIn('github')}><span className='block w-4 mr-2'><Github /></span>Sign in</button>
        :
        <></>
  )
}

export default NavbarMenu