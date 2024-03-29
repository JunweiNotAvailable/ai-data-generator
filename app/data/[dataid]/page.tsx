import RedirectLogin from '@/app/components/RedirectLogin';
import { getServerSession } from 'next-auth/next';
import React from 'react'

const DataPage = async ({ params }: { params: { dataid: number } }) => {

  const session = await getServerSession();

  if (session) return <RedirectLogin />

  return (
    <div>{params.dataid}
      <aside></aside>
      <main></main>
    </div>
  )
}

export default DataPage