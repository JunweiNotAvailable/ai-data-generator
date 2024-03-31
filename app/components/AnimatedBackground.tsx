'use client'

import React from 'react'
import Logo from './Logo'
import { Network, TxtFile } from '../utils/svgs'
import styles from './components.module.css';

const AnimatedBackground = () => {
  return (
    <div className='flex items-center justify-between mt-10'>
      <div className='w-1/5 relative'>
        <Logo />
        <div className='absolute w-full h-full top-0 left-0' style={{ background: '#ffffffe0' }} />
      </div>
      <div className={`${styles.thinLine} mx-4 rounded-full`} />
      <div className='w-1/5 relative'>
        <TxtFile color='#475569' />
        <div className='absolute w-full h-full top-0 left-0' style={{ background: '#ffffffe0' }} />
      </div>
      <div className={`${styles.thinLineSecond} mx-4 rounded-full`} />
      <div className='w-1/5 relative'>
        <Network color='#475569' />
        <div className='absolute w-full h-full top-0 left-0' style={{ background: '#ffffffe0' }} />
      </div>
    </div>
  )
}

export default AnimatedBackground