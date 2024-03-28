import React from 'react'

const Data = ({ color }: { color?: string }) => {
  return (
    <svg height="100%" viewBox="0 0 88 93" fill="none">
      <path d="M21.7092 18H15C9.47715 18 5 22.4772 5 28V78C5 83.5228 9.47715 88 15 88H57C62.5228 88 67 83.5228 67 78V70.5" stroke={color || "black"} strokeWidth="10" strokeLinecap="round" />
      <path d="M37.7045 25.1135C37.7045 25.1135 47.1763 19.2744 52.1286 14.2562C56.8595 9.46239 62.409 0.40899 62.409 0.40899C62.409 0.40899 68.5721 9.37036 73.4763 14.2562C78.299 19.0606 87.1135 25.1135 87.1135 25.1135C87.1135 25.1135 78.3262 31.3309 73.4763 36.1808C68.6265 41.0307 62.409 49.818 62.409 49.818C62.409 49.818 56.8043 40.9367 52.1286 36.1808C47.151 31.1178 37.7045 25.1135 37.7045 25.1135Z" fill={color || "black"} />
    </svg>
  )
}

export default Data