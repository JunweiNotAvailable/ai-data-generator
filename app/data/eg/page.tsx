import RedirectLogin from '@/app/components/RedirectLogin';
import { getServerSession } from 'next-auth/next';
import React from 'react'

const DataIntro = async () => {
  
  const session = await getServerSession();

  // Redirect to login page
  if (!session) return <RedirectLogin />

  return (
    <div className='w-full flex-1 flex flex-col items-center justify-center'>
      
    </div>
  )
}

export default DataIntro