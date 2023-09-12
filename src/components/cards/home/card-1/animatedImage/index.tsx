'use client'
// vendors
import { useEffect, useState } from 'react'
import Image from 'next/image'

// assets
import card from '@/assets/card.png'
import phone from '@/assets/phone.png'
import image1 from '@/assets/home-Image1.png'

export function AnimatedImage() {
  const [firstEffect, setFirstEffect] = useState(true)
  const [cardEffect, setCardEffect] = useState(true)

  useEffect(() => {
    setFirstEffect(false)
    setTimeout(() => {
      setCardEffect(false)
    }, 1800)
  }, [])

  return (
    <div className='flex w-full px-4 sm:px-0 justify-center items-end '>
      <Image
        src={image1}
        alt=''
        className={`flex w-[85%]  tablet:w-[740px]  monitor:w-[1140px] ${
          firstEffect
            ? 'translate-y-[30rem] opacity-0'
            : 'translate-y-0 opacity-100 '
        } transition-translate  duration-500 `}
      />
      <Image
        src={card}
        alt='card'
        className={`flex  z-10 -ml-[90%] tablet:-ml-[780px] monitor:-ml-[1240px] mb-[22%]  tablet:mb-[190px] monitor:mb-[280px] w-[27%] tablet:w-[220px] monitor:w-[380px] rounded-none sm:rounded-sm md:rounded-md tablet:rounded-lg lg:rounded-xl monitor:rounded-2xl shadow-md  shadow-inHover  ${
          firstEffect ? 'translate-y-[100%] opacity-0 ' : ' opacity-100'
        } ${
          cardEffect
            ? 'translate-y-[15%] translate-x-[17%] tablet:translate-y-[10%] tablet:translate-x-[21%]  scale-50 shadow-none'
            : 'duration-300'
        }  transition-all duration-700 delay-1000`}
      />
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
