import '@/styles/globals.css'
import { Cormorant } from 'next/font/google'
import Footer from '@/components/footer'
import { Viewport } from 'next'
import Navbar from '@/components/navbar'

const cormorant = Cormorant({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Bella Ciao',
  description: 'NextJS app project',
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  colorScheme: 'light',
}

export default function Root({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={cormorant.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}