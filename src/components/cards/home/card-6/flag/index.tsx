'use client'
// vendors
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

// type
interface FlagProps {
  props: {
    id: number
    title: string
    text: string
    image: StaticImageData
    altImage: string
  }
}

export function Flag({ props }: FlagProps) {
  const [buttonHover, setButtonHover] = useState(false)

  function handleButtonHover(hover: boolean) {
    setButtonHover(hover)
  }

  return (
    <main className='flex  w-[95%] md:w-[90%] tablet:w-[85%] lg:w-[33%] flex-col justify-center items-start gap-4 lg:gap-8 p-4 mb-8 '>
      <div
        className={`flex justify-center items-center w-full bg-flag_bg rounded-lg p-2 hover:-translate-y-2 shadow-lg mb-4 lg:mb-0 ${
          buttonHover ? 'scale-105 shadow-2xl' : ''
        } transition duration-300`}
      >
        {props.image && <Image src={props.image} alt={props.altImage} />}
      </div>
      <div className='flex w-full text-center lg:text-start lg:w-1/2 font-montserrat font-medium'>
        {props.text}
      </div>
      <div
        onMouseEnter={() => handleButtonHover(true)}
        onMouseLeave={() => handleButtonHover(false)}
        className={`flex gap-1 w-full px-8 py-6 font-montserrat border-2 border-white shadow-2xl rounded-lg ${
          buttonHover ? 'bg-inHover text-white' : 'bg-white text-second '
        } transition-all duration-300`}
      >
        <div className='font-semibold'>{props.id}.</div>
        <div className='font-normal'>{props.title}</div>
      </div>
    </main>
  )
}
