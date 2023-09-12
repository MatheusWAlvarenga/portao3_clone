// vendors
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

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
    <Link
      href={props.ref}
      className='flex w-full max-w-[22rem] flex-col bg-base justify-center items-center lg:items-start gap-10 p-8 mb-4 border-line border-opacity-10 hover:border hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 transition duration-500 rounded-lg'
    >
      <div className='flex justify-center lg:justify-start items-start w-full '>
        {props.image && (
          <Image
            src={props.image}
            alt={props.altImage}
            className='rounded-md w-[30rem] mb-4 lg:mb-0 transition duration-300'
          />
        )}
      </div>
      <div className='flex flex-col gap-2 w-full text-2xl justify-center lg:justify-start text-start  font-montserrat font-semibold'>
        {props.title}
        <div className='flex w-full desktop:w-[80%] justify-center lg:justify-start text-start text-[1rem] font-montserrat font-normal'>
          {props.text}
        </div>
      </div>
    </Link>
  )
}
