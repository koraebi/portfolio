import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Koraebi',
  description: 'Building digital products according to UX fundamentals and Software Engineering principles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar/>
        <div className={inter.className}>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
