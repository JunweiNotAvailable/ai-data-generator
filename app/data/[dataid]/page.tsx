import MarkdownClient from '@/app/components/MarkdownClient';
import RedirectLogin from '../../components/RedirectLogin';
import { DataProps } from '../../utils/interfaces';
import { getAllData, getDataInfo } from '@/app/utils/postgre';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
import Sample from './Sample';
import DataResult from '../../components/DataResult';
import DataProcess from '@/app/components/DataProcess';
import MobileSidebar from './MobileSidebar';

const DataPage = async ({ params }: { params: { dataid: string } }) => {

  const session = await getServerSession();

  if (!session) return <RedirectLogin />

  // Get data information
  const dataList = (await getAllData(session.user?.email as string)).rows as { id: number, name: string }[];
  if (!parseInt(params.dataid)) {
    notFound();
  }
  const result = await getDataInfo(parseInt(params.dataid));
  // no data found
  if (result.rowCount === 0) {
    notFound();
  }
  // Data is not from authenticated user
  const data = result.rows[0] as DataProps;
  if (session.user?.email !== data.user_email) {
    return (
      <main className='full-w flex-1 flex flex-col items-center justify-center'>
        <div className='text-slate-600 font-bold text-3xl'>Ooops...</div>
        <p className='mt-4 text-gray-600'>You do not have permission to visit this page.</p>
        <p className='text-gray-600'>Go back to <Link className='text-slate-400 underline' href={'/'}>chat</Link>.</p>
      </main>
    )
  }

  // Get file from s3
  let content = '';
  try {
    const bytes = (await (await fetch(`${process.env.s3ApiUrl}?bucket=gedata-bucket&path=${data.filename}`)).json()).content;
    content = String.fromCharCode(...bytes)
  } catch (error) {
    console.log('Failed getting data');
  }

  return (
    <div className='flex flex-col md:flex-row w-full flex-1 py-4 md:px-4 bg-slate-50 scroller relative'>
      {/* mobile sidebar */}
      <MobileSidebar dataList={dataList} />
      {/* sidebar */}
      <aside className='hidden md:flex flex-col w-56 p-2 scroller sticky top-0'>
        {dataList.map(d => <Link href={`/data/${d.id}`} key={d.id} className='block mb-2 w-full text-left py-2 px-3 text-sm rounded bg-slate-200'>{d.name}</Link>)}
      </aside>
      {/* main */}
      <main className='flex-1 md:ml-4 px-8 md:my-4 md:pb-4 min-w-0 scroller rounded-md'>
        {data.generating_step <= 100 && <DataProcess data={data} />}
        <h2 className='font-bold text-lg'>{data.name}</h2>
        {/* prompt */}
        <div className='text-sm font-semibold mt-4'>Prompt</div>
        <div className='rounded py-2 px-3 bg-white border shadow-sm mt-1'>
          <MarkdownClient className={'markdown-content small'} source={data.prompt} />
        </div>
        {/* sample */}
        <Sample data={data} />
        {/* data */}
        <DataResult data={data} isGenerating={data.generating_step <= 100} content={content} />
      </main>
    </div>
  )
}

export default DataPage