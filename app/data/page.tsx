import React, { Fragment } from 'react'
import { getServerSession } from 'next-auth/next';
import LoadingData from './LoadingData';
import RedirectLogin from '../components/RedirectLogin';

const Data = async () => {

  const session = await getServerSession();

  if (session) {
    return (
      <div className='w-full flex-1 flex flex-col items-center justify-center'>
        <LoadingData session={session} />
      </div>
    )
  }

  // Login if not authenticated
  return <RedirectLogin />
}

export default Data