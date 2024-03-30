import RedirectLogin from '@/app/components/RedirectLogin';
import { getServerSession } from 'next-auth/next';
import React from 'react'
import CursorPath from './CursorPath';
import Link from 'next/link';

const DataIntro = async () => {

  const session = await getServerSession();

  // Redirect to login page
  if (!session) return <RedirectLogin />

  return (
    <div className='fixed w-screen h-screen justify-center items-center flex' style={{ background: '#0002' }}>
      <main className='bg-white shadow-md p-4 rounded-xl w-5/6 max-w-md scroller' style={{ maxHeight: '80%' }}>
        <div className='font-bold text-lg text-gray-600'>No data</div>
        <p className='text-center text-sm mt-2'>{"You don't have any data"}</p>
        <p className='text-center text-sm'>{"Click the 'Use sample' button to generate data"}</p>
        <div className='flex justify-center my-2'>
          <div className='w-4/5 my-2 px-2 pb-2 pt-4 bg-slate-100 rounded-lg'>
            <svg width="100%" viewBox="0 0 250 170" fill="none">
              <path d="M8.56276 7.41402C8.56276 7.41402 11.4053 5.66166 12.8916 4.15565C14.3113 2.717 15.9768 5.11763e-07 15.9768 5.11763e-07C15.9768 5.11763e-07 17.8264 2.68938 19.2982 4.15565C20.7455 5.5975 23.3908 7.41402 23.3908 7.41402C23.3908 7.41402 20.7537 9.27993 19.2982 10.7354C17.8427 12.1909 15.9768 14.828 15.9768 14.828C15.9768 14.828 14.2948 12.1627 12.8916 10.7354C11.3977 9.21597 8.56276 7.41402 8.56276 7.41402Z" fill="url(#paint0_linear_59_52)" />
              <circle cx="12.9046" cy="18.9068" r="3.00108" fill="#767D86" />
              <path d="M2.12294 11.2446L10.6147 11.2446L6.36883 18.5987L2.12294 11.2446Z" fill="#767D86" />
              <rect x="51" width="199" height="12" rx="6" fill="#D9D9D9" />
              <rect x="51" y="63" width="199" height="12" rx="6" fill="#D9D9D9" />
              <rect x="51" y="85" width="123" height="12" rx="6" fill="#D9D9D9" />
              <rect x="51" y="21" width="199" height="12" rx="6" fill="#D9D9D9" />
              <rect x="51" y="42" width="199" height="12" rx="6" fill="#D9D9D9" />
              <CursorPath />
              <defs>
                <linearGradient id="paint0_linear_59_52" x1="26.7375" y1="6.59569" x2="16.7218" y2="13.9242" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C0CCDA" />
                  <stop offset="1" stopColor="#636970" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
        <div className='flex justify-center mt-2'>
          <Link href={'/'} className='text-sm text-white bg-slate-600 py-0.5 px-4 rounded font-semibold shadow'>Back to chat</Link>
        </div>
      </main>
    </div>
  )
}

export default DataIntro