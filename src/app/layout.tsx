/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next'
import { Inter,Bebas_Neue } from 'next/font/google'
import './globals.css'
import 'swiper/css'
import 'swiper/css/bundle'
import "aos/dist/aos.css"; 
const inter = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable:"--bebas_neue"
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio website for Sivakumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
