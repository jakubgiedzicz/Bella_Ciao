import '@/styles/globals.css'
import { Cormorant } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Viewport } from 'next'

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
      <body className={cormorant.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}