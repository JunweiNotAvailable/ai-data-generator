import React, { Fragment } from 'react'
import LoginButton from '../components/LoginButton'
import { getServerSession } from 'next-auth/next'

const Login = async () => {

  const session = await getServerSession();

  if (session) {
    return (
      <Fragment>
        <meta httpEquiv='refresh' content='0; url=/' />
      </Fragment>
    )
  }

  return (
    <div className='flex-1 flex flex-col items-center justify-center'>
      <div className='font-semibold text-xl mt-2'>Sign in</div>
      <div className='mt-2 text-gray-500'>Sign in to generate your custom data</div>
      <div className='mt-8 mb-4'>
        <LoginButton />
      </div>
    </div>
  )
}

export default Login