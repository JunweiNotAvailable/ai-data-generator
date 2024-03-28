import React from 'react'

const Out = ({ color }: { color?: string }) => {
  return (
    <svg height="100%" viewBox="0 0 74 85" fill="none">
      <path d="M42 43L23.7313 43H8" stroke={color || "black"} strokeWidth="10" strokeLinecap="round" />
      <path d="M24.2388 59L8 43L24.2388 27" stroke={color || "black"} strokeWidth="10" strokeLinecap="round" />
      <path d="M25 5H59C64.5228 5 69 9.47715 69 15V70C69 75.5228 64.5228 80 59 80H25" stroke={color || "black"} strokeWidth="10" strokeLinecap="round" />
    </svg>
  )
}

export default Out