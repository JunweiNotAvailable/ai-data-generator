import React from 'react'
import { getServerSession } from 'next-auth/next';
import { Content } from '@google/generative-ai';
import { getChatHistory } from './utils/postgre';
import LandingPage from './LandingPage';
import ChatContent from './components/ChatContent';

const Home = async () => {

  const session = await getServerSession();
  let initialHistory: Content[] = [];

  if (session?.user?.email) {
    const res = await getChatHistory('New Data Chat', session.user?.email);
    if (res.rows?.[0]) {
      initialHistory = res.rows[0].history;
    }
    // return chat content if history is not empty
    if (initialHistory.length > 0) {
      return (
        <div className='flex flex-1 overflow-hidden w-screen'>
          <main className='flex-1 flex justify-center items-center w-full'>
            <div className='transition-2 flex flex-col justify-center items-center w-full h-full'>
              <ChatContent initialHistory={initialHistory} />
            </div>
          </main>
        </div>
      )
    }

    return <LandingPage />
  }

  return (
    <LandingPage unauthenticated />
  )
}

export default Home