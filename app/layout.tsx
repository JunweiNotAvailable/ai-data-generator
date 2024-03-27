import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HomeStateProvider } from './contexts/HomeContext'
import { NextAuthProvider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GeData - Generated data with LLM',
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
            {children}
          </HomeStateProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
