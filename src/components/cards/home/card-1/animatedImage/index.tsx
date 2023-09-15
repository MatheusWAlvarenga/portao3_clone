'use client'
// vendors
import { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// contexts
import { ContextGlobalElements } from '@/context/global'

// assets
import card from '../assets/card.png'
import phone from '../assets/phone.png'
import page from '../assets/page.png'

export function AnimatedImage() {
  const [firstEffect, setFirstEffect] = useState(true)
  const [cardEffect, setCardEffect] = useState(true)

  const { scrollY, resetActualScrollView } = useContext(ContextGlobalElements)

  const refCardEffect = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const viewCardEffect = refCardEffect.current?.offsetTop
        ? refCardEffect.current?.offsetTop +
            refCardEffect.current?.clientHeight / 2 <
          window.scrollY + window.innerHeight
        : false

      setTimeout(() => {
        setCardEffect((before) => (before == true ? viewCardEffect : false))
      }, 1000)

      // reset scrollY
      resetActualScrollView(
        refCardEffect.current?.offsetTop ? refCardEffect.current?.offsetTop : 0,
      )
    }

    handleScroll()
  }, [scrollY])

  useEffect(() => {
    setFirstEffect(false)
  }, [scrollY])

  return (
    <div className='flex w-full px-4 sm:px-0 justify-center items-end '>
      <Image
        src={page}
        alt=''
        className={`flex w-[85%]  tablet:w-[740px]  monitor:w-[1140px] ${
          firstEffect ? ' opacity-0' : ' opacity-100 '
        } transition-translate  duration-500 `}
      />
      <Image
        src={card}
        alt='card'
        className={` flex  z-10 -ml-[90%] tablet:-ml-[780px] monitor:-ml-[1240px] mb-[22%]  tablet:mb-[190px] monitor:mb-[280px] w-[27%] tablet:w-[220px] monitor:w-[380px] rounded-md desktop:rounded-xl shadow-xl  ${
          firstEffect ? 'opacity-0 ' : ' opacity-100'
        } ${
          cardEffect
            ? 'monitor:translate-y-0 monitor:translate-x-0 monitor:scale-100 translate-y-[15%] translate-x-[17%] tablet:translate-y-[10%] tablet:translate-x-[21%] scale-50 shadow-none'
            : 'duration-300'
        }  transition-all duration-700 delay-1000`}
      />
      <div ref={refCardEffect} className='w-0 h-0' />

      <Image
        src={phone}
        alt='card'
        className={`flex relative z-10 ml-[38%] tablet:ml-[340px] monitor:ml-[535px] w-[27%] tablet:w-[240px] monitor:w-[380px] ${
          firstEffect
            ? 'translate-y-[3rem] opacity-0'
            : 'translate-y-0 opacity-100'
        }  transition-translate duration-700 delay-500`}
      />
    </div>
  )
}
