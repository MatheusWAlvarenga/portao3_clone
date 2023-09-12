'use client'
// vendors
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

// type
interface FlagProps {
  props: {
    title: string
    text1: string
    text2: string
    image: StaticImageData
    altImage: string
  }
}

export function Flag({ props }: FlagProps) {
  const [hoverElement, setHoverElement] = useState(false)

  function hoverControl(active: boolean) {
    setHoverElement(active)
  }
  return (
    <div
      onMouseEnter={() => hoverControl(true)}
      onMouseLeave={() => hoverControl(false)}
      className={`flex flex-col lg:flex-row justify-center text-textCard gap-2 px-8 py-9 rounded-lg drop-shadow-xl hover:drop-shadow-2xl hover:translate-x-[.15rem] hover:translate-y-[.15rem] font-montserrat w-[85%] sm:w-[80%] md:w-[70%] tablet:w-[60%] lg:w-[80%] desktop:w-[55%] monitor:w-[50%] desktop:min-h-[20rem] border border-line border-opacity-40 bg-white transition duration-200 `}
    >
      <div className='flex flex-col w-full lg:w-1/2 justify-between p-4 items-start gap-4'>
        <div className='flex text-second text-xl md:text-2xl tablet:text-3xl lg:text-4xl font-medium w-full lg:w-3/4'>
          {props.title}
        </div>
        <div className='flex justify-start text-sm tablet:text-lg font-normal  w-full lg:w-[80%]'>
          <p>
            <b>{props.text1}</b>&nbsp;{props.text2}
          </p>
        </div>
      </div>
      <div className='flex w-full lg:w-1/2 justify-center items-center rounded-lg'>
        {props.image && (
          <Image
            src={props.image}
            alt={props.altImage}
            className={`${
              hoverElement
                ? 'scale-110 monitor:scale-105 monitor:-translate-x-2 duration-300 shadow-2xl'
                : 'duration-200 '
            } transition rounded-lg`}
          />
        )}
      </div>
    </div>
  )
}
