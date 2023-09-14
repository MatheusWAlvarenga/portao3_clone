// vendors
import Image from 'next/image'
import { useContext, useEffect, useRef, useState } from 'react'

// contexts
import { ContextGlobalElements } from '@/context/global'

// assets
import flexport from './assets/flexport.png'
import betterTomorrow from './assets/betterTomorrow.png'
import combinator from './assets/combinator.png'
import endeavor from './assets/endeavor.png'
import fin from './assets/fin.png'
import pareto from './assets/pareto.png'

export function CardHome_3() {
  const { scrollY, resetActualScrollView } = useContext(ContextGlobalElements)

  const [viewBrand, setViewBrand] = useState(false)
  const [effectStartBrand, setEffectStartBrand] = useState(true)

  const refBrand = useRef<HTMLDivElement>(null)
  const refBrandFull = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const viewBrand = refBrand.current?.offsetTop
        ? refBrand.current?.offsetTop + 100 <
          window.scrollY + window.innerHeight
        : false

      setViewBrand((before) => (before == false ? viewBrand : true))

      if (viewBrand) {
        setTimeout(() => {
          setEffectStartBrand(false)
        }, 1000)
      }

      // reset scrollY
      resetActualScrollView(
        refBrand.current?.offsetTop ? refBrand.current?.offsetTop : 0,
      )
    }

    handleScroll()
  }, [scrollY])

  useEffect(() => {
    const handleScroll = () => {
      const viewBrand = refBrandFull.current?.offsetTop
        ? refBrandFull.current?.offsetTop + 100 <
          window.scrollY + window.innerHeight
        : false

      setViewBrand((before) => (before == false ? viewBrand : true))

      if (viewBrand) {
        setTimeout(() => {
          setEffectStartBrand(false)
        }, 1000)
      }

      // reset scrollY
      resetActualScrollView(
        refBrandFull.current?.offsetTop ? refBrandFull.current?.offsetTop : 0,
      )
    }

    handleScroll()
  }, [scrollY])

  const itemsList = [
    {
      id: 1,
      src: flexport,
      alt: 'flexport',
      config: `${viewBrand ? 'opacity-100' : 'opacity-0'}  ${
        effectStartBrand ? 'duration-1000' : 'duration-300'
      } flex w-[4.5rem] hover:scale-125 lg:hover:-translate-y-4 desktop:hover:scale-150 transition-all`,
    },
    {
      id: 2,
      src: betterTomorrow,
      alt: 'betterTomorrow',
      config: `${viewBrand ? 'opacity-100' : 'opacity-0'}  ${
        effectStartBrand ? 'duration-1000 delay-200' : 'duration-300  delay-0'
      } flex w-[4.5rem] hover:scale-125 lg:hover:-translate-y-4 desktop:hover:scale-150 transition-all`,
    },
    {
      id: 3,
      src: combinator,
      alt: 'combinator',
      config: `${viewBrand ? 'opacity-100' : 'opacity-0'}  ${
        effectStartBrand ? 'duration-1000 delay-300' : 'duration-300  delay-0'
      } flex w-[4.5rem] hover:scale-125 lg:hover:-translate-y-4 desktop:hover:scale-150 transition-all`,
    },
    {
      id: 4,
      src: endeavor,
      alt: 'endeavor',
      config: `${viewBrand ? 'opacity-100' : 'opacity-0'}  ${
        effectStartBrand ? 'duration-1000 delay-500' : 'duration-300  delay-0'
      } flex w-[4.5rem] hover:scale-125 lg:hover:-translate-y-4 desktop:hover:scale-150 transition-all`,
    },
    {
      id: 5,
      src: fin,
      alt: 'fin',
      config: `${viewBrand ? 'opacity-100' : 'opacity-0'}  ${
        effectStartBrand ? 'duration-1000 delay-700' : 'duration-300  delay-0'
      } flex w-[4.5rem] hover:scale-125 lg:hover:-translate-y-4 desktop:hover:scale-150 transition-all`,
    },
    {
      id: 6,
      src: pareto,
      alt: 'pareto',
      config: `${viewBrand ? 'opacity-100' : 'opacity-0'} ${
        effectStartBrand ? 'duration-1000 delay-1000' : 'duration-300  delay-0'
      }   flex w-[4.5rem] hover:scale-125 lg:hover:-translate-y-4 desktop:hover:scale-150 transition-all `,
    },
  ]
  return (
    <div className='flex flex-col lg:flex-row py-[5%] px-[15%] monitor:px-[25%] gap-12 justify-between items-center w-full min-h-[15rem] bg-inHover font-montserrat font-semibold text-white'>
      <div className='flex flex-col justify-center items-center w-full lg:w-[15rem] text-[1.45rem] lg:mr-8'>
        <div className='flex w-full lg:w-[15rem] text-[1.45rem] text-center lg:text-start justify-center lg:justify-start'>
          Quem confia e
        </div>
        <div className='flex -ml-2 -mt-1 text-center lg:text-start justify-center lg:justify-start'>
          investe na Portão 3
        </div>
      </div>
      <div
        ref={refBrandFull}
        className='hidden lg:flex w-full justify-between items-center'
      >
        {itemsList.length &&
          itemsList.map((item) => {
            return (
              <Image
                key={item.id}
                className={item.config}
                src={item.src}
                alt={item.alt}
              />
            )
          })}
      </div>
      <div
        ref={refBrand}
        className='flex lg:hidden w-full justify-between items-center'
      >
        {itemsList.length &&
          itemsList.map((item) => {
            if (item.id <= 3)
              return (
                <Image
                  key={item.id}
                  className={item.config}
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
                  className={item.config}
                  src={item.src}
                  alt={item.alt}
                />
              )
          })}
      </div>
    </div>
  )
}
