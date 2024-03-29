import React from 'react'
import { appName } from '../utils/constants'
import Link from 'next/link';
import NavbarMenu from './NavbarMenu';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className={`h-14 flex justify-between items-center px-6`}>
      <Link href={'/'} className='flex items-center text-lg font-bold text-slate-600 px-2'>
        <span className='block w-5 mr-2'><Logo /></span>
        {appName}
      </Link>
      <NavbarMenu />
    </header>
  )
}

export default Navbar