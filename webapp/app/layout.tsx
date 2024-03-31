import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AppAuthProvider from '@/contexts/Auth/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monyoro Joseph',
  description: 'Monyoro joseph portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppAuthProvider>
        <body className={inter.className}>
            <Navbar />
            <section style={{minHeight: "82.2vh"}}>{children}</section>
            <Footer />        
        </body>
      </AppAuthProvider>
    </html>
  )
}
