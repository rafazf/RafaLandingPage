'use client'
import type { Metadata } from 'next'
import {Inter, Montserrat} from 'next/font/google'
import './globals.css'
import {Providers} from './providers'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets:['latin']})

//export const metadata: Metadata = {
//  title: 'Rafa - Portafolio',
//  description: 'Generated by create next app',
//}

export default function RootLayout({children,}:{ children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
        <title>Rafa - Portafolio</title>
    </head>
        <body className={montserrat.className}>
            <Providers>
                {children}
            </Providers>
        </body>
    </html>
  )
}