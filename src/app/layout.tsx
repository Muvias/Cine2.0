import { Menu } from '@/components/Menu'
import './globals.css'

import Providers from '../contexts/providers'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ToApiProvider } from '@/contexts/ToApiContext'

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
        <main className="grid grid-cols-2 min-h-screen">
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
