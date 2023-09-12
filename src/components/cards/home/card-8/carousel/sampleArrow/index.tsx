// icons
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs'

export function SampleNextArrow(props: any) {
  const { onClick } = props
  return (
    <div
      className='flex z-10 absolute top-[48%] lg:top-1/2 right-0 cursor-pointer'
      onClick={onClick}
    >
      <BsChevronDoubleRight className='flex  w-4 h-4  lg:w-4 lg:h-4 right-0 text-second hover:text-opacity-60 transition duration-300' />
    </div>
  )
}
export function SamplePrevArrow(props: any) {
  const { onClick } = props
  return (
    <div
      className='flex z-10 absolute top-[48%] lg:top-1/2 left-0 cursor-pointer '
      onClick={onClick}
    >
      <BsChevronDoubleLeft className='flex  w-4 h-4  lg:w-4 lg:h-4 left-0 text-second hover:text-opacity-60 transition duration-300' />
    </div>
  )
}
