import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import StoreProvider from '@/provider/StoreProvider';
import PersistorProvider from '@/provider/PersistorProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'QickKart',
    description: 'Ecommerce website built with Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StoreProvider>
            <html lang='en'>
                <body className={`${roboto.className} bg-gray-300`}>
                    <PersistorProvider>{children}</PersistorProvider>
                </body>
            </html>
        </StoreProvider>
    );
}
