import React from 'react'

const ArrowRight = ({ color }: { color?: string }) => {
  return (
    <svg className='transition-2' width="100%" viewBox="0 0 77 72" fill="none">
      <path d="M4 36H40H71" stroke={color || ''} strokeWidth="8" strokeLinecap="round" />
      <path d="M39 4L71 36L39 68" stroke={color || ''} strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export default ArrowRight