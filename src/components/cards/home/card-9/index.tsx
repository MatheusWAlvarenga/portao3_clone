// vendors
import { useContext, useEffect, useRef, useState } from 'react'

// components
import { Flag } from './flag'

// contexts
import { ContextGlobalElements } from '@/context/global'

// assets
import ninthCard1 from '@/assets/ninthCardHome1.png'
import ninthCard2 from '@/assets/ninthCardHome2.png'
import ninthCard3 from '@/assets/ninthCardHome3.png'

export function CardHome_9() {
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
      title: 'Blog',
      text: 'Conteúdos e newsletter para acelerar seu financeiro',
      image: ninthCard1,
      altImage: '',
      ref: '/',
    },
    {
      id: 2,
      title: ' E-books',
      text: 'Materiais gratuitos pra você se aprofundar ainda mais',
      image: ninthCard2,
      altImage: '',
      ref: '/',
    },
    {
      id: 3,
      title: 'Ferramentas',
      text: 'Calculadoras e modelos para apoiar suas finanças',
      image: ninthCard3,
      altImage: '',
      ref: '/',
    },
  ]
  return (
    <div className='flex flex-col justify-center items-center bg-base gap-10 py-10 sm:py-20 lg:py-28 w-full '>
      <div className='w-full flex justify-center items-center mt-10 md:mt-20 '>
        <div
          ref={refFlag}
          className={`${
            viewFlag ? '' : 'opacity-0'
          } transition-opacity duration-1000 delay-500  w-full px-[2%] sm:px-[4%] md:px-[8%] tablet:px-[10%] lg:px-[12%] desktop:px-[15%] monitor:px-[22%]  flex flex-col lg:flex-row justify-center lg:justify-between items-center`}
        >
          {itemsList.map((card) => {
            return <Flag key={card.id} props={card} />
          })}
        </div>
      </div>
    </div>
  )
}
