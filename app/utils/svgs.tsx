import { motion } from "framer-motion"
import React from "react"

export const ArrowRight = ({ color }: { color?: string }) => {
  return (
    <svg className='transition-2' width="100%" viewBox="0 0 77 72" fill="none">
      <path d="M4 36H40H71" stroke={color || ''} strokeWidth="8" strokeLinecap="round" />
      <path d="M39 4L71 36L39 68" stroke={color || ''} strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export const ArrowUpRight = ({ color }: { color?: string }) => {
  return (
    <svg className='transition-2' width="100%" viewBox="0 0 89 88" fill="none">
      <path d="M20.8119 67.6881L46.2677 42.2322L68.1881 20.3119" stroke={color || ''} strokeWidth="8" strokeLinecap="round" />
      <path d="M29 19.7169H68.4338V59.1508" stroke={color || ''} strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export const Avatar = ({ color }: { color?: string }) => {
  return (
    <svg width='100%' viewBox="0 0 80 81" fill="none">
      <circle cx="40" cy="24" r="20" stroke={color || ''} strokeWidth="10" />
      <path d="M4 77C4 77 12.64 58 39.7943 58C66.9486 58 76 77 76 77" stroke={color || ''} strokeWidth="10" strokeLinecap="round" />
    </svg>
  )
}

export const Data = ({ color }: { color?: string }) => {
  return (
    <svg height="100%" viewBox="0 0 88 93" fill="none">
      <path d="M21.7092 18H15C9.47715 18 5 22.4772 5 28V78C5 83.5228 9.47715 88 15 88H57C62.5228 88 67 83.5228 67 78V70.5" stroke={color || "black"} strokeWidth="10" strokeLinecap="round" />
      <path d="M37.7045 25.1135C37.7045 25.1135 47.1763 19.2744 52.1286 14.2562C56.8595 9.46239 62.409 0.40899 62.409 0.40899C62.409 0.40899 68.5721 9.37036 73.4763 14.2562C78.299 19.0606 87.1135 25.1135 87.1135 25.1135C87.1135 25.1135 78.3262 31.3309 73.4763 36.1808C68.6265 41.0307 62.409 49.818 62.409 49.818C62.409 49.818 56.8043 40.9367 52.1286 36.1808C47.151 31.1178 37.7045 25.1135 37.7045 25.1135Z" fill={color || "black"} />
    </svg>
  )
}

export const Delete = ({ color }: { color?: string }) => {
  return (
    <svg height="100%" viewBox="0 0 73 82" fill="none">
      <path d="M13.6667 82C11.1611 82 9.01696 81.1086 7.23422 79.3259C5.45148 77.5431 4.55859 75.3975 4.55555 72.8889V15.9444C4.55555 14.6865 3.53576 13.6667 2.27778 13.6667V13.6667C1.0198 13.6667 0 12.6469 0 11.3889V9.11111C0 6.59515 2.03959 4.55556 4.55556 4.55556H20.5C21.758 4.55556 22.7778 3.53576 22.7778 2.27778V2.27778C22.7778 1.0198 23.7976 0 25.0556 0H47.8333C49.0913 0 50.1111 1.0198 50.1111 2.27778V2.27778C50.1111 3.53576 51.1309 4.55556 52.3889 4.55556H68.3333C70.8493 4.55556 72.8889 6.59515 72.8889 9.11111V11.3889C72.8889 12.6469 71.8691 13.6667 70.6111 13.6667V13.6667C69.3531 13.6667 68.3333 14.6865 68.3333 15.9444V72.8889C68.3333 75.3944 67.442 77.5401 65.6592 79.3259C63.8765 81.1117 61.7308 82.003 59.2222 82H13.6667ZM59.2222 13.6667H13.6667V72.8889H59.2222V13.6667ZM22.7778 59.2222C22.7778 61.7382 24.8174 63.7778 27.3333 63.7778V63.7778C29.8493 63.7778 31.8889 61.7382 31.8889 59.2222V27.3333C31.8889 24.8174 29.8493 22.7778 27.3333 22.7778V22.7778C24.8174 22.7778 22.7778 24.8174 22.7778 27.3333V59.2222ZM41 59.2222C41 61.7382 43.0396 63.7778 45.5555 63.7778V63.7778C48.0715 63.7778 50.1111 61.7382 50.1111 59.2222V27.3333C50.1111 24.8174 48.0715 22.7778 45.5555 22.7778V22.7778C43.0396 22.7778 41 24.8174 41 27.3333V59.2222Z" fill={color || 'black'} />
    </svg>
  )
}

export const Exit = ({ color }: { color?: string }) => {
  return (
    <svg height="100%" viewBox="0 0 74 85" fill="none">
      <path d="M42 43L23.7313 43H8" stroke={color || "black"} strokeWidth="10" strokeLinecap="round" />
      <path d="M24.2388 59L8 43L24.2388 27" stroke={color || "black"} strokeWidth="10" strokeLinecap="round" />
      <path d="M25 5H59C64.5228 5 69 9.47715 69 15V70C69 75.5228 64.5228 80 59 80H25" stroke={color || "black"} strokeWidth="10" strokeLinecap="round" />
    </svg>
  )
}

export const Github = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 93 90" fill="none">
      <path d="M46.1172 0C40.061 0 34.0641 1.19286 28.4689 3.51046C22.8737 5.82807 17.7898 9.22504 13.5074 13.5074C4.85876 22.1561 0 33.8862 0 46.1172C0 66.501 13.2356 83.795 31.5442 89.9286C33.85 90.2975 34.5879 88.8679 34.5879 87.6227V79.8289C21.8134 82.5959 19.0925 73.6492 19.0925 73.6492C16.9711 68.2996 13.9735 66.87 13.9735 66.87C9.77685 64.0107 14.2963 64.1029 14.2963 64.1029C18.9081 64.4257 21.3523 68.853 21.3523 68.853C25.3645 75.8628 32.1437 73.7875 34.7724 72.6807C35.1874 69.6831 36.3865 67.654 37.6778 66.501C27.4397 65.3481 16.6944 61.382 16.6944 43.8114C16.6944 38.6923 18.4469 34.5879 21.4445 31.3136C20.9833 30.1607 19.3692 25.3645 21.9057 19.1386C21.9057 19.1386 25.7795 17.8935 34.5879 23.8426C38.2312 22.828 42.1973 22.3207 46.1172 22.3207C50.0372 22.3207 54.0033 22.828 57.6465 23.8426C66.4549 17.8935 70.3288 19.1386 70.3288 19.1386C72.8652 25.3645 71.2511 30.1607 70.7899 31.3136C73.7875 34.5879 75.54 38.6923 75.54 43.8114C75.54 61.4281 64.7486 65.302 54.4644 66.4549C56.1247 67.8845 57.6465 70.6977 57.6465 74.9866V87.6227C57.6465 88.8679 58.3844 90.3436 60.7364 89.9286C79.0449 83.7489 92.2344 66.501 92.2344 46.1172C92.2344 40.061 91.0416 34.0641 88.724 28.4689C86.4064 22.8737 83.0094 17.7898 78.727 13.5074C74.4446 9.22504 69.3607 5.82807 63.7655 3.51046C58.1703 1.19286 52.1734 0 46.1172 0Z" fill={color || "#24292E"} />
    </svg>
  )
}

export const Github2 = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 70 74" fill="none">
      <path d="M18.5101 1.21517C21.2768 2.1524 23.9088 3.44796 26.3389 5.06881C29.771 4.19165 33.3001 3.75098 36.8425 3.75725C40.5009 3.75725 44.0303 4.21409 47.3387 5.06513C49.7679 3.44585 52.3987 2.15154 55.1639 1.21517C57.7317 0.342028 61.3901 -1.07269 63.5638 1.33307C65.0374 2.96884 65.4058 5.70986 65.6674 7.80246C65.9622 10.1382 66.0322 13.1813 65.2585 16.2024C68.2169 20.0228 70 24.5802 70 29.5464C70 37.0695 65.9253 43.6015 59.8943 48.1257C56.9919 50.2755 53.7728 51.9609 50.3523 53.1214C51.1408 54.9266 51.5792 56.9234 51.5792 59.0197V70.0722C51.5792 71.0493 51.191 71.9864 50.5001 72.6773C49.8092 73.3683 48.8721 73.7564 47.895 73.7564H25.79C24.8129 73.7564 23.8758 73.3683 23.1849 72.6773C22.494 71.9864 22.1058 71.0493 22.1058 70.0722V66.4212C18.5875 66.8523 15.6364 66.4691 13.1275 65.4044C10.5044 64.2918 8.67706 62.5676 7.30286 60.9171C5.99867 59.355 4.57658 55.8329 2.52081 55.1477C2.06168 54.9948 1.63715 54.753 1.27147 54.436C0.905786 54.1191 0.606114 53.7332 0.389561 53.3004C-0.0477883 52.4264 -0.120027 51.4145 0.188738 50.4872C0.497502 49.5599 1.16198 48.7933 2.03598 48.356C2.90999 47.9186 3.92194 47.8464 4.84921 48.1551C7.30286 48.973 8.90179 50.7414 9.99599 52.1635C11.7644 54.4477 13.2012 57.4319 16.0012 58.6219C17.1543 59.1118 18.8454 59.4324 21.4906 59.0713L22.1058 58.9461C22.1129 56.9411 22.5304 54.9588 23.3327 53.1214C19.9122 51.9609 16.6931 50.2755 13.7907 48.1257C7.7597 43.6015 3.68501 37.0732 3.68501 29.5464C3.68501 24.5875 5.46446 20.0339 8.41548 16.2171C7.64181 13.1961 7.70812 10.1456 8.00285 7.80615L8.02127 7.66615C8.29022 5.52197 8.60337 2.99831 10.1065 1.33307C12.2802 -1.07269 15.9422 0.345712 18.5064 1.21886L18.5101 1.21517Z" fill={color || '#24292E'} />
    </svg>
  )
}

export const Spinner = ({ color }: { color?: string }) => {
  return (
    <motion.div className='w-full aspect-square' animate={{ rotate: [0, 360] }} transition={{ duration: .4, repeat: Infinity, ease: 'linear' }}>
      <svg width="100%" viewBox="0 0 72 72" fill="none">
        <path d="M66.491 36C69.5336 36 72.0431 38.4806 71.5793 41.4876C70.7819 46.6575 68.8636 51.6145 65.9329 56.0005C61.9772 61.9207 56.3547 66.5349 49.7766 69.2597C43.1985 71.9844 35.9601 72.6973 28.9767 71.3083C21.9934 69.9192 15.5788 66.4905 10.5442 61.4558C5.50947 56.4212 2.0808 50.0066 0.69173 43.0233C-0.697338 36.0399 0.0155821 28.8015 2.74034 22.2234C5.46509 15.6453 10.0793 10.0228 15.9995 6.06709C20.3855 3.13641 25.3425 1.21808 30.5124 0.42068C33.5194 -0.0431122 36 2.46645 36 5.50896V5.50896C36 8.55147 33.5043 10.9574 30.5355 11.6229C27.5476 12.2927 24.6927 13.5096 22.1207 15.2282C18.0124 17.9732 14.8104 21.8749 12.9196 26.4398C11.0287 31.0047 10.534 36.0277 11.4979 40.8738C12.4619 45.7198 14.8412 50.1712 18.335 53.665C21.8288 57.1588 26.2802 59.5381 31.1262 60.5021C35.9723 61.466 40.9953 60.9713 45.5602 59.0804C50.1251 57.1896 54.0268 53.9876 56.7718 49.8793C58.4904 47.3073 59.7073 44.4524 60.3771 41.4645C61.0426 38.4957 63.4485 36 66.491 36V36Z" fill={color || "black"} />
      </svg>
    </motion.div>
  )
}

export const Download = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 66 70" fill="none">
      <path d="M33 3L33.1343 29.8657L33.25 53" stroke={color || "black"} strokeWidth="6" strokeLinecap="round" />
      <path d="M54.5 34.8507L33.25 53L12 34.8507" stroke={color || "black"} strokeWidth="6" strokeLinecap="round" />
      <path d="M3 67H62.5" stroke={color || "black"} strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

export const Menu = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 74 57" fill="none">
      <path d="M4 4H70" stroke={color || "black"} strokeWidth="8" strokeLinecap="round" />
      <path d="M4 28H70" stroke={color || "black"} strokeWidth="8" strokeLinecap="round" />
      <path d="M4 53H70" stroke={color || "black"} strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export const Back = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 68 57" fill="none">
      <path d="M64 52.7679C64 52.7679 36.9649 28.9227 36.9649 28.3839C36.9649 27.8452 64 4.00001 64 4.00001" stroke={color || "black"} strokeWidth="8" strokeLinecap="round" />
      <path d="M31.0351 52.7679C31.0351 52.7679 4 28.9227 4 28.3839C4 27.8452 31.0351 4.00001 31.0351 4.00001" stroke={color || "black"} strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export const Close = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 62 63" fill="none">
      <path d="M4.05672 57.6933L57.4433 4.30674" stroke={color || "black"} strokeWidth="8" strokeLinecap="round" />
      <path d="M4 5L57.3866 58.3866" stroke={color || "black"} strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export const TxtFile = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 32 41" fill="none">
      <path d="M16.5 4H3C1.89543 4 1 4.89543 1 6V37.8979C1 39.0025 1.89543 39.8979 3 39.8979H28.9389C30.0434 39.8979 30.9389 39.0025 30.9389 37.8979L30.9389 9" stroke={color || "black"} strokeLinecap="round" />
      <path d="M6 11H19.7395" stroke={color || "black"} strokeLinecap="round" />
      <path d="M6 16H16.8201" stroke={color || "black"} strokeLinecap="round" />
      <path d="M6 25H19.7395" stroke={color || "black"} strokeLinecap="round" />
      <path d="M6 30H16.8201" stroke={color || "black"} strokeLinecap="round" />
      <path d="M23.4203 2.47959V3.39636H21.1008V2.47959H23.4203ZM21.5501 1.63616H22.8152V4.86779C22.8152 4.91668 22.8236 4.95793 22.8404 4.99155C22.8572 5.02364 22.8832 5.04808 22.9183 5.06489C22.9535 5.08017 22.9986 5.08781 23.0536 5.08781C23.0918 5.08781 23.1361 5.08323 23.1865 5.07406C23.2385 5.06489 23.2767 5.05725 23.3011 5.05114L23.4845 5.94041C23.4279 5.95722 23.3469 5.97784 23.2415 6.00229C23.1376 6.02674 23.0138 6.04278 22.8702 6.05042C22.5799 6.0657 22.3362 6.03591 22.1391 5.96104C21.942 5.88464 21.7938 5.76469 21.6945 5.6012C21.5951 5.43771 21.547 5.23297 21.5501 4.98697V1.63616ZM25.0275 2.47959L25.5409 3.57055L26.0818 2.47959H27.3378L26.3935 4.2398L27.3836 6H26.1368L25.5409 4.88154L24.9633 6H23.6982L24.6975 4.2398L23.7624 2.47959H25.0275ZM29.887 2.47959V3.39636H27.5675V2.47959H29.887ZM28.0168 1.63616H29.2819V4.86779C29.2819 4.91668 29.2903 4.95793 29.3071 4.99155C29.3239 5.02364 29.3499 5.04808 29.385 5.06489C29.4202 5.08017 29.4653 5.08781 29.5203 5.08781C29.5585 5.08781 29.6028 5.08323 29.6532 5.07406C29.7051 5.06489 29.7433 5.05725 29.7678 5.05114L29.9511 5.94041C29.8946 5.95722 29.8136 5.97784 29.7082 6.00229C29.6043 6.02674 29.4805 6.04278 29.3369 6.05042C29.0466 6.0657 28.8029 6.03591 28.6058 5.96104C28.4087 5.88464 28.2605 5.76469 28.1611 5.6012C28.0618 5.43771 28.0137 5.23297 28.0168 4.98697V1.63616Z" fill={color || "black"} />
    </svg>
  )
}

export const Network = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 34 32" fill="none">
      <circle cx="3" cy="10" r="1.66667" stroke={color || 'black'} strokeWidth="0.666667" />
      <circle cx="2" cy="25" r="1.66667" stroke={color || 'black'} strokeWidth="0.666667" />
      <circle cx="17" cy="2" r="1.66667" stroke={color || 'black'} strokeWidth="0.666667" />
      <circle cx="16" cy="15" r="2.5" stroke={color || 'black'} />
      <circle cx="16.5" cy="29.5" r="2.08333" stroke={color || 'black'} strokeWidth="0.833333" />
      <circle cx="31.5" cy="17.5" r="2.08333" stroke={color || 'black'} strokeWidth="0.833333" />
      <path d="M4.58643 10.2654C4.45687 10.2177 4.31315 10.284 4.26541 10.4136C4.21768 10.5431 4.28402 10.6869 4.41357 10.7346L4.58643 10.2654ZM4.41357 10.7346L13.9136 14.2346L14.0864 13.7654L4.58643 10.2654L4.41357 10.7346Z" fill={color || 'black'} />
      <path d="M3.5 25.5L14.5 29" stroke={color || 'black'} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M4.5 9.5L15.5 3" stroke={color || 'black'} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M4 11.5L15 28" stroke={color || 'black'} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M3 23.5L15.5 3" stroke={color || 'black'} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M18.5 3L30 16" stroke={color || 'black'} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M18.5 15.5L29 17.5" stroke={color || 'black'} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M18.5 29L29.5 19" stroke={color || 'black'} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M16 18L16.5 27.5" stroke={color || 'black'} strokeWidth="0.5" strokeLinecap="round" />
    </svg>
  )
}

export const Check = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 68 59" fill="none">
      <path d="M4 26C4 26 25 54.5 26 54.5C27 54.5 63.5 4 63.5 4" stroke={color || "black"} strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export const Pen = ({ color }: { color?: string }) => {
  return (
    <svg width="100%" viewBox="0 0 61 61" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M49.6525 24.5013L55.9678 18.186C57.8842 16.2697 58.8441 15.3097 59.3575 14.2759C59.8385 13.3053 60.0887 12.2367 60.0887 11.1535C60.0887 10.0702 59.8385 9.00162 59.3575 8.03101C58.8441 6.99722 57.8842 6.03727 55.9678 4.1209C54.0514 2.20452 53.0915 1.24458 52.0577 0.731198C51.0871 0.250238 50.0185 0 48.9352 0C47.852 0 46.7834 0.250238 45.8128 0.731198C44.779 1.24458 43.819 2.20452 41.9027 4.1209L35.5065 10.517C38.909 16.3421 43.7887 21.166 49.6525 24.5013ZM30.3939 15.6297L6.23698 39.7866C4.73904 41.2845 3.99359 42.03 3.50131 42.9512C3.00903 43.8655 2.80157 44.9028 2.39016 46.9774L0.224129 57.797C-0.00794575 58.9644 -0.1275 59.5481 0.206547 59.8821C0.540594 60.2162 1.12078 60.0966 2.2917 59.8646L13.1113 57.6985C15.1859 57.2871 16.2232 57.0797 17.141 56.5874C18.0552 56.0951 18.8042 55.3496 20.2986 53.8552L44.5258 29.628C38.8367 26.0663 34.0088 21.2865 30.3903 15.6332" fill={color || "black"} />
    </svg>
  )
}