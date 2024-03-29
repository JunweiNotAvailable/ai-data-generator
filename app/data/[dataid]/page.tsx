import RedirectLogin from '@/app/components/RedirectLogin';
import { getDataInfo } from '@/app/utils/postgre';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

const DataPage = async ({ params }: { params: { dataid: number } }) => {

  const session = await getServerSession();

  if (!session) return <RedirectLogin />

  // Get data information
  const result = await getDataInfo(params.dataid);
  // no data found
  if (result.rowCount === 0) {
    notFound();
  }
  // Data is not from authenticated user
  if (session.user?.email !== result.rows[0].user_email) {
    return (
      <main className='full-w flex-1 flex flex-col items-center justify-center'>
        <div className='text-slate-600 font-bold text-3xl'>Ooops...</div>
        <p className='mt-4 text-gray-600'>You do not have permission to visit this page.</p>
        <p className='text-gray-600'>Go back to <Link className='text-slate-400 underline' href={'/'}>chat</Link>.</p>
      </main>
    )
  }

  return (
    <div>
      <aside></aside>
      <main></main>
    </div>
  )
}

export default DataPage