import './globals.css'
import { Inter } from 'next/font/google'
import StarsBackground from './components/StarBackground'
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ['latin'] })




export const metadata = {
  title: 'Akhilesh Portfolio | Home',
  description: 'Welcome to my portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${inter.className} relative`}>
        {/* Stars in the background */}
        <StarsBackground />

        {/* Content Wrapper with Higher z-index */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
