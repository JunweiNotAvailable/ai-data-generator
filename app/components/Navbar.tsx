import React from 'react'
import { appName } from '../utils/constants'
import styles from './components.module.css';
import Link from 'next/link';
import Logo from './svgs/Logo';

const Navbar = () => {
  return (
    <header className={`h-12 flex justify-between items-center px-4`}>
      <Link href={'/'} className='flex items-center text-lg font-bold text-slate-600 px-2'>
        {appName}
      </Link>
    </header>
  )
}

export default Navbar