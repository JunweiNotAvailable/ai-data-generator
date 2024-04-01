import React from 'react'
import { getServerSession } from 'next-auth/next';
import { Content } from '@google/generative-ai';
import { getChatHistory } from './utils/postgre';
import LandingPage from './LandingPage';
import LandingPageClient from './LandingPageClient';

const Home = async () => {

  const session = await getServerSession();
  let initialHistory: Content[] = [];

  if (session?.user?.email) {
    const res = await getChatHistory('New Data Chat', session.user?.email);
    if (res.rows?.[0]) {
      initialHistory = res.rows[0].history;
    }
    
    return <LandingPageClient initialHistory={initialHistory} />
  }

  return (
    <LandingPage unauthenticated />
  )
}

export default Home