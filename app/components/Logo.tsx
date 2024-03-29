import React from 'react'

const Logo = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 78 73" fill="none">
      <path d="M28.5322 24.7045C28.5322 24.7045 38.004 18.8654 42.9564 13.8472C47.6872 9.0534 53.2367 9.39081e-07 53.2367 9.39081e-07C53.2367 9.39081e-07 59.3998 8.96137 64.3041 13.8472C69.1267 18.6516 77.9412 24.7045 77.9412 24.7045C77.9412 24.7045 69.154 30.922 64.3041 35.7718C59.4542 40.6217 53.2367 49.409 53.2367 49.409C53.2367 49.409 47.632 40.5278 42.9564 35.7718C37.9788 30.7088 28.5322 24.7045 28.5322 24.7045Z" fill={color || "url(#paint0_linear_5_7)"} />
      <circle cx="43" cy="63" r="8" fill={color || "#767D86"} />
      <path d="M7.07393 37.4684L35.3696 37.4684L21.2218 61.9732L7.07393 37.4684Z" fill={color || "#767D86"} />
      <defs>
        <linearGradient id="paint0_linear_5_7" x1="63.1501" y1="15.5781" x2="39.4946" y2="32.887" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C0CCDA" />
          <stop offset="1" stopColor="#636970" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export default Logo