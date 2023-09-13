// vendors
import { useState } from 'react'

// components
import { InputEmail } from '@/components/tools/inputEmail'
import Carousel from './carousel'
import RollInText from '@/components/tools/rollInText'
import { AnimatedImage } from './animatedImage'

export function CardHome_1() {
  const [countWordFirstCard, setCountWordFirstCard] = useState(0)

  const textChange = ['centralizada.', 'confiável.', 'descomplicada.']

  setTimeout(() => {
    setCountWordFirstCard((before) => before + 1)

    if (countWordFirstCard == textChange.length - 2) setCountWordFirstCard(0)
  }, 3000)

  return (
    <main className='flex flex-col w-full'>
      <div className='flex flex-col w-full  justify-center items-center pt-[7.8rem] gap-6 bg-inHover mt-[7rem]'>
        <div className='flex w-full flex-col'>
          <div className='flex flex-col px-[20%] justify-center items-center text-white text-center font-montserrat font-medium text-[2.5rem] tablet:text-[4rem] leading-[3rem] tablet:leading-[5rem]'>
            Gestão de despesas, finalmente
          </div>
          <div className='flex flex-col justify-center items-center text-white text-center font-montserrat font-bold text-[2.5rem] tablet:text-[4rem] transition-all duration-500'>
            <RollInText wordList={textChange} />
          </div>
          <p className='w-full px-[10%] lg:px-[23%] desktop:px-[30%] justify-center items-center text-white text-center font-montserrat text-lg tablet:text-xl'>
            <b>Tenha controle total sob seus gastos e pagamentos,</b> em uma
            plataforma de gestão usada por centenas de empresas como a sua.
          </p>
        </div>
        <div className='flex w-[90%] sm:w-[80%] md:w-[70%] tablet:w-[60%] lg:w-[50%] desktop:w-[40%] monitor:w-[30%] mb-12'>
          <InputEmail />
        </div>

        <AnimatedImage />
      </div>
      <div className='flex flex-col h-[12rem] pb-4 w-full bg-personal'>
        <div className='flex w-full justify-center items-center py-4 sm:py-6'>
          <p className='w-full px-[10%] lg:px-[23%] justify-center items-center text-white text-center font-montserrat text-[1rem] tablet:text-lg'>
            Usada e aprovada por <b>mais de 600 empresas</b> de destaque
          </p>
        </div>
        <div className='flex w-full -mt-4 mb-4'>
          <Carousel />
        </div>
      </div>
    </main>
  )
}
