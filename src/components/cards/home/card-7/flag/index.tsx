// vendors
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

// type
interface FlagProps {
  props: {
    id: number
    title: string
    text: string
    image: StaticImageData
    altImage: string
    ref: string
  }
}

export function Flag({ props }: FlagProps) {
  return (
    <main className='flex w-full max-w-[22rem] flex-col justify-center items-center lg:items-start gap-4 p-4 mb-8 '>
      <div className='flex justify-center lg:justify-start items-start w-full '>
        {props.image && (
          <Image
            src={props.image}
            alt={props.altImage}
            className='rounded-md w-96 hover:scale-105 mb-4 lg:mb-0 transition duration-300'
          />
        )}
      </div>
      <div className='flex w-full text-2xl justify-center lg:justify-start  text-center lg:text-start  font-montserrat font-semibold'>
        {props.title}
      </div>
      <div className='flex w-full justify-center lg:justify-start  text-center lg:text-start text-[1rem] font-montserrat font-normal'>
        {props.text}
      </div>
      <Link
        href={props.ref}
        className='flex text-sm gap-1 w-max font-montserrat font-light hover:opacity-60 hover:border-opacity-60 transition-all duration-200 border-b  border-second -pb-1'
      >
        Conheça
        <BsArrowRight className=' mt-[2px] h-4 ' />
      </Link>
    </main>
  )
}
