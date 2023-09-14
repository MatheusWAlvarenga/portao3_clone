// vendors
import { useContext, useEffect, useRef, useState } from 'react'

// components
import { Flag } from './flag'

// contexts
import { ContextGlobalElements } from '@/context/global'

// assets
import Card1 from './assets/CardHome1.png'
import Card2 from './assets/CardHome2.png'
import Card3 from './assets/CardHome3.png'

export function CardHome_5() {
  const { scrollY, resetActualScrollView } = useContext(ContextGlobalElements)

  const [viewFlag, setViewFlag] = useState(false)

  const refFlag = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const viewFlag = refFlag.current?.offsetTop
        ? refFlag.current?.offsetTop + 100 < window.scrollY + window.innerHeight
        : false

      setViewFlag((before) => (before == false ? viewFlag : true))

      // reset scrollY
      resetActualScrollView(
        refFlag.current?.offsetTop ? refFlag.current?.offsetTop : 0,
      )
    }

    handleScroll()
  }, [scrollY])

  const itemsList = [
    {
      id: 1,
      title: 'Controle total para os CFOs',
      text1:
        'Visão de gastos com categorização inteligente para tomada de decisão.',
      text2:
        'Acompanhe de perto a saúde financeira da empresa e evite surpresas no fim do trimestre.',
      image: Card1,
      altImage: '',
    },
    {
      id: 2,
      title: 'Facilite a vida dos gerentes',
      text1: 'Crie políticas e controle despesas e orçamentos com facilidade.',
      text2: 'Ganhe tempo com aprovações e regras automatizadas.',
      image: Card2,
      altImage: '',
    },
    {
      id: 3,
      title: 'Autonomia e responsabilidade para cada colaborador',
      text1: 'Tenha as despesas registradas automaticamente. ',
      text2:
        'Nosso sistema cuida da parte chata pra você focar no que faz de melhor.',
      image: Card3,
      altImage: '',
    },
  ]
  return (
    <div className='flex flex-col justify-center items-center bg-white gap-10 py-10 sm:py-20 lg:py-28 w-full '>
      <div className='flex flex-col gap-2 w-full justify-center items-center py-4 sm:py-6'>
        <p className='w-full px-[10%]  justify-center items-center text-textCard text-center font-montserrat font-medium text-2xl tablet:text-4xl'>
          Uma nova realidade para cada colaborador
        </p>
        <p className='w-full px-[5%] justify-center items-center text-second text-center font-montserrat font-medium text-[1rem] tablet:text-lg'>
          Sabemos que tempo é dinheiro. Com a Portão 3, sua equipe economiza os
          dois.
        </p>
      </div>
      <div
        ref={refFlag}
        className={`${
          viewFlag ? '' : 'opacity-0'
        } transition-opacity duration-1000  w-full flex flex-col gap-10 justify-center items-center mt-10 md:mt-20 `}
      >
        {itemsList.map((card) => {
          return <Flag key={card.id} props={card} />
        })}
      </div>
    </div>
  )
}
