'use client'

import { useAsyncEffect } from '@iwbam/react-ez';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import React from 'react'
import Logo from '../components/Logo';
import { QueryResult, QueryResultRow } from '@vercel/postgres';

const LoadingData = ({ session }: { session: Session }) => {

  const router = useRouter();

  // Load all data
  useAsyncEffect(async () => {
    const result: QueryResult<QueryResultRow> = await (await fetch(`/api/data/getalldata?userEmail=${session.user?.email}`)).json();
    if (result.rowCount === 0) { // no custom data
      router.push('/data/empty');
    } else { // return first data page
      router.push(`/data/${result.rows[0].id}`);
    }
  }, []);

  return <div className='w-24'><Logo /></div>
}

export default LoadingData;