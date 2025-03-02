import '@/styles/globals.css'
import { Cormorant } from 'next/font/google'
import Footer from '@/components/footer'
import ShopHeader from '@/components/shop-header'
import { Viewport } from 'next'

const cormorant = Cormorant({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Bella Ciao',
  description: 'NextJs App',
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  colorScheme: 'light',
}

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script> */}
      </head>
      <body className={cormorant.className}>
        <ShopHeader />
        {children}
        <Footer />
        </body>
    </html>
  )
}