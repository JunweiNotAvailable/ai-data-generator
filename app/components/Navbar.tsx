import React from 'react'
import { appName } from '../utils/constants'
import Link from 'next/link';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <header className={`h-14 flex justify-between items-center px-6`}>
      <Link href={'/'} className='flex items-center text-lg font-bold text-slate-600 px-2'>
        {appName}
      </Link>
      <NavbarMenu />
    </header>
  )
}

export default Navbar