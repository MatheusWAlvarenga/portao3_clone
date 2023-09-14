// vendors
import { useContext, useEffect, useRef, useState } from 'react'

// components
import Carousel from './carousel'

// contexts
import { ContextGlobalElements } from '@/context/global'

export function CardHome_8() {
  const { scrollY, resetActualScrollView } = useContext(ContextGlobalElements)

  const [viewCarousel, setViewCarousel] = useState(false)

  const refCarousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const viewCarousel = refCarousel.current?.offsetTop
        ? refCarousel.current?.offsetTop + 100 <
          window.scrollY + window.innerHeight
        : false

      setViewCarousel((before) => (before == false ? viewCarousel : true))

      // reset scrollY
      resetActualScrollView(
        refCarousel.current?.offsetTop ? refCarousel.current?.offsetTop : 0,
      )
    }

    handleScroll()
  }, [scrollY])

  return (
    <div className='flex flex-col justify-center items-center w-[95%] md:w-[90%] desktop:w-[70%] monitor:w-[85%] font-montserrat py-40 '>
      <div className='flex w-full justify-start items-center pl-20 text-4xl text-opacity-80 text-description font-medium pb-12'>
        P3 na Mídia
      </div>
      <div
        ref={refCarousel}
        className={`${
          viewCarousel ? '' : 'opacity-0'
        } transition-opacity duration-1000 delay-300 flex w-full`}
      >
        <Carousel />
      </div>
    </div>
  )
}
