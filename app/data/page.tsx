import React, { Fragment } from 'react'
import { getServerSession } from 'next-auth/next';
import DataClient from './DataClient';

const Data = async () => {

  const session = await getServerSession();

  if (session) {
    return (
      <div className='w-full flex-1 flex flex-col items-center justify-center'>
        <DataClient />
      </div>
    )
  }

  // Login if not authenticated
  return (
    <Fragment>
      <meta httpEquiv="refresh" content={`0; url=/login`} />
    </Fragment>
  )
}

export default Data