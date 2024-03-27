import React from 'react'

const Avatar = ({ color }: { color?: string }) => {
  return (
    <svg width='100%' viewBox="0 0 80 81" fill="none">
      <circle cx="40" cy="24" r="20" stroke={color || ''} strokeWidth="10" />
      <path d="M4 77C4 77 12.64 58 39.7943 58C66.9486 58 76 77 76 77" stroke={color || ''} strokeWidth="10" strokeLinecap="round" />
    </svg>
  )
}

export default Avatar