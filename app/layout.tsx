import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import ProviderComponent from '@/components/Provider'
import ProviderRedux from '@/components/ProviderRedux'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'QickKart',
  description: 'Ecommerce website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProviderComponent>
    <html lang="en">
      <body className={`${roboto.className} bg-gray-300`}>  
        <ProviderRedux>
          <Header />
          {children}
          <Footer />
        </ProviderRedux>
      </body>
    </html>
    </ProviderComponent> 
  )
}
