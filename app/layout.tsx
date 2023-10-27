import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import ProviderComponent from '@/components/Provider'
import ProviderRedux from '@/components/ProviderRedux'
 
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
          {children}
        </ProviderRedux>
      </body>
    </html>
    </ProviderComponent> 
  )
}
