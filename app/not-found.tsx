import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main className='full-w flex-1 flex flex-col items-center justify-center'>
      <div className='text-slate-600 font-bold text-3xl'>Ooops...</div>
      <p className='mt-4 text-gray-600'>We cannot find the page you are looking for.</p>
      <p className='text-gray-600'>Go back to <Link className='text-slate-400 underline' href={'/'}>chat</Link>.</p>
    </main>
  )
}

export default NotFound