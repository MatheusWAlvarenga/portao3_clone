// vendors
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

// style
import 'tailwindcss/tailwind.css'

// components
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MoreButton } from '@/components/tools/moreButton'

// font config
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

// metadata config
export const metadata: Metadata = {
  title: 'Portão 3 - Tempo é dinheiro. Economize os dois.',
  description: 'portao3.com.br',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt'>
      <body
        className={`${montserrat.className} selection:bg-selection-primary selection:text-white`}
      >
        <div className='flex w-full fixed z-50'>
          <Header />
        </div>
        {children}
        <Footer />

        <div className='flex desktop:hidden fixed z-30 bottom-1 md:bottom-5 w-full justify-center items-center'>
          <MoreButton />
        </div>
      </body>
    </html>
  )
}
