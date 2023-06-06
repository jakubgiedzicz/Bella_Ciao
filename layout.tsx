import '../styles/globals.css'
import { Cormorant } from 'next/font/google'
import Header from '../components/header'
import Footer from '@/components/footer'

const cormorant = Cormorant({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Bella Ciao',
  description: 'Użyto create next app',
  viewport: "width=device-width, initial-scale=1, minimum-scale=1"
}

export default function RootLayout({
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