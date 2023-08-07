import type { Metadata } from 'next'

import './globals.css'

import Providers from '../contexts/providers'

import { Poppins } from 'next/font/google'
import { ToApiProvider } from '@/contexts/ToApiContext'

import { Menu } from '@/components/Menu'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Site para review de filmes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="lg:grid lg:grid-cols-2 flex min-h-screen">
          <ToApiProvider>
            {/* Menu e Filtros */}
            <div className='text-white bg-black'>
              <Menu />
            </div>

            {/* Visor dos Filmes */}
            <Providers>
              {children}
            </Providers>
          </ToApiProvider>
        </main>
      </body>
    </html>
  )
}
