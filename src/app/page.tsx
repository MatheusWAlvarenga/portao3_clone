'use client'

// components
import { CardHome_1 } from '@/components/cards/home/card-1'
import { CardHome_2 } from '@/components/cards/home/card-2'
import { CardHome_3 } from '@/components/cards/home/card-3'
import { CardHome_4 } from '@/components/cards/home/card-4'
import { CardHome_5 } from '@/components/cards/home/card-5'
import { CardHome_6 } from '@/components/cards/home/card-6'
import { CardHome_7 } from '@/components/cards/home/card-7'
import { CardHome_8 } from '@/components/cards/home/card-8'
import { CardHome_9 } from '@/components/cards/home/card-9'
import { CardHome_10 } from '@/components/cards/home/card-10'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen w-full justify-start items-center '>
      <CardHome_1 />
      <CardHome_2 />
      <CardHome_3 />
      <CardHome_4 />
      <CardHome_5 />
      <CardHome_6 />
      <CardHome_7 />
      <CardHome_8 />
      <CardHome_9 />
      <CardHome_10 />
    </main>
  )
}
