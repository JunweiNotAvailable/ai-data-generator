'use client';

import React from 'react'
import { Github } from '../utils/svgs'
import { signIn } from 'next-auth/react';

const LoginButton = () => {

  const handleSignIn = async () => await signIn('github')

  return (
    <button onClick={handleSignIn} className='flex items-center bg-github text-white text-sm py-1 px-4 rounded shadow'>
      <span className='block w-6 p-1 mr-2'><Github color='#fff' /></span>
      Continue with Github
    </button>
  )
}

export default LoginButton