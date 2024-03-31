import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HomeStateProvider } from './contexts/HomeContext'
import { NextAuthProvider } from './provider'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GeData - Generated data with AI',
  description: 'Generated data using Google\'s Gemini API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <HomeStateProvider>
            <div className='h-svh flex flex-col'>
              <Navbar />
              {children}
            </div>
          </HomeStateProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
