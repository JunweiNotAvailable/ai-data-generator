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
      <LoginButton />
    </div>
  )
}

export default Login