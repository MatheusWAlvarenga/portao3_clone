// components
import Carousel from './carousel'

export function CardHome_8() {
  return (
    <div className='flex flex-col justify-center items-center w-[95%] md:w-[90%] desktop:w-[70%] monitor:w-[85%] font-montserrat py-40 '>
      <div className='flex w-full justify-start items-center pl-20 text-4xl text-opacity-80 text-description font-medium pb-12'>
        P3 na Mídia
      </div>
      <div className='flex w-full '>
        <Carousel />
      </div>
    </div>
  )
}
