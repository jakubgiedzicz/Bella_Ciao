import '@/styles/globals.css'
import { Cormorant } from 'next/font/google'
import Footer from '@/components/footer'
import ShopHeader from '@/components/shop-header'

const cormorant = Cormorant({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Bella Ciao',
  description: 'Użyto create next app',
  viewport: "width=device-width, initial-scale=1, minimum-scale=1"
}

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <ShopHeader />
        {children}
        <Footer />
        </body>
    </html>
  )
}