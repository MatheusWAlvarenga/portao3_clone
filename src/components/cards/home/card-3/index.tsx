// vendors
import Image from 'next/image'

// assets
import flexport from '@/assets/flexport.png'
import betterTomorrow from '@/assets/betterTomorrow.png'
import combinator from '@/assets/combinator.png'
import endeavor from '@/assets/endeavor.png'
import fin from '@/assets/fin.png'
import pareto from '@/assets/pareto.png'
import { InputEmail } from '@/components/tools/inputEmail'

export function CardHome_3() {
  const itemsList = [
    {
      id: 1,
      src: flexport,
      alt: 'flexport',
    },
    {
      id: 2,
      src: betterTomorrow,
      alt: 'betterTomorrow',
    },
    {
      id: 3,
      src: combinator,
      alt: 'combinator',
    },
    {
      id: 4,
      src: endeavor,
      alt: 'endeavor',
    },
    {
      id: 5,
      src: fin,
      alt: 'fin',
    },
    {
      id: 6,
      src: pareto,
      alt: 'pareto',
    },
  ]
  return (
    <div className='flex flex-col lg:flex-row py-[5%] px-[15%] monitor:px-[25%] gap-12 justify-between items-center w-full min-h-[15rem] bg-inHover font-montserrat font-semibold text-white'>
      <div className='flex flex-col justify-center items-center w-[15rem] text-[1.45rem] mr-8'>
        <div className='flex w-[15rem] text-[1.45rem] text-center lg:text-start'>
          Quem confia e
        </div>
        <div className='flex -ml-2 -mt-1 text-center lg:text-start'>
          investe na Portão 3
        </div>
      </div>
      <div className='hidden lg:flex w-full justify-between items-center'>
        {itemsList.length &&
          itemsList.map((item) => {
            return (
              <Image
                key={item.id}
                className='flex w-[4.5rem] hover:scale-125 lg:hover:-translate-y-4 desktop:hover:scale-150 transition-all duration-300'
                src={item.src}
                alt={item.alt}
              />
            )
          })}
      </div>
      <div className='flex lg:hidden w-full justify-between items-center'>
        {itemsList.length &&
          itemsList.map((item) => {
            if (item.id <= 3)
              return (
                <Image
                  key={item.id}
                  className='flex w-[4.5rem] hover:scale-125 lg:hover:-translate-y-4 desktop:hover:scale-150 transition-all duration-300'
                  src={item.src}
                  alt={item.alt}
                />
              )
          })}
      </div>
      <div className='flex lg:hidden w-full justify-between items-center'>
        {itemsList.length &&
          itemsList.map((item) => {
            if (item.id >= 4)
              return (
                <Image
                  key={item.id}
                  className='flex w-[4.5rem] hover:scale-125 lg:hover:-translate-y-4 desktop:hover:scale-150 transition-all duration-300'
                  src={item.src}
                  alt={item.alt}
                />
              )
          })}
      </div>
    </div>
  )
}
