'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { InView } from 'react-intersection-observer'
import DemoAnimation from './DemoAnimation'

const AnimatedSection = () => {


  return (
    <section className='px-4 md:px-12 flex md:flex-row flex-col' style={{ height: '200%' }}>
      <div className='h-full w-full flex flex-col md:w-2/5'>
        <InView threshold={[.2, .8]}>
          {({ inView, ref }) =>
            <motion.div ref={ref} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: .2 }} className='flex-1 w-full md:mt-20 -z-10'>
              <div className='text-3xl font-semibold mt-20 md:top-20'>Create data samples with descriptions.</div>
            </motion.div>
          }
        </InView>
        <InView threshold={[.2, .8]}>
          {({ inView, ref }) =>
            <motion.div ref={ref} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: .2 }} className='flex-1 w-full md:mt-20 -z-10'>
              <div className='text-3xl font-semibold'>Scale up and export to your AI model.</div>
            </motion.div>
          }
        </InView>
      </div>
      <div className='md:ml-8 flex-1 h-full min-w-0 sticky bottom-0 -z-10'>
        <div className='w-full h-full flex flex-col justify-end md:justify-start'>
          <div className='w-full h-4/5 md:h-1/2 md:sticky md:top-0 bg-white flex justify-center items-center'>
            <div className='h-full flex flex-col items-center justify-center' style={{ aspectRatio: '1/1.2' }}>
              <DemoAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedSection