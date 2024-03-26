import React from 'react'

const ArrowUpRight = ({ color }: { color?: string }) => {
  return (
    <svg className='transition-2' width="100%" viewBox="0 0 89 88" fill="none">
      <path d="M20.8119 67.6881L46.2677 42.2322L68.1881 20.3119" stroke={color || ''} strokeWidth="8" strokeLinecap="round" />
      <path d="M29 19.7169H68.4338V59.1508" stroke={color || ''} strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export default ArrowUpRight