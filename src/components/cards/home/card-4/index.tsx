// vendors
import { useContext, useEffect, useRef, useState } from 'react'

// components
import { Flag } from './flag'

// contexts
import { ContextGlobalElements } from '@/context/global'

// assets
import sulAmerica from './assets/sulAmerica-gray.png'
import credpago from './assets/credpago-gray.png'
import noh from './assets/noh-gray.png'

export function CardHome_4() {
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

  const itemList = [
    {
      id: 1,
      image: credpago,
      altImage: '',
      text: '"Nos interessamos pela facilidade de gestão oferecida pelo sistema e ficamos satisfeitos com a redução das nossas despesas. Mas o que nos encantou foi o atendimento do time da Portão 3!"',
      owner: 'Fernando Ortiz, CFO',
      card: [],
      type: '',
    },
    {
      id: 2,
      image: noh,
      altImage: '',
      text: '"A experiência da gestão com a Portão 3 foi totalmente diferente, incrível e inesperada."',
      owner: 'Ana Zucato, Founder e CEO',
      card: [],
      type: '',
    },
    {
      id: 3,
      image: sulAmerica,
      altImage: '',
      text: '"A Portão 3 cuida da nossa saúde emocional e financeira"',
      owner: 'Patrícia Coimbra, DIretora de RH',
      card: [],
      type: '',
    },
    {
      id: 4,
      image: null,
      altImage: '',
      text: '',
      owner: '',
      card: [
        {
          text1: '+500mi',
          text2: 'de reais transacionados',
        },
        {
          text1: '+1mi',
          text2: 'de cartões emitidos',
        },
      ],
      type: 'information',
    },
  ]
  return (
    <div className='flex justify-center items-center py-28 bg-white'>
      <div
        ref={refFlag}
        className={`${
          viewFlag ? '' : 'opacity-0'
        } transition-opacity duration-1000 delay-300 flex flex-col justify-center items-center   desktop:justify-start desktop:items-start desktop:grid grid-cols-2 gap-4`}
      >
        {itemList.map((flag) => {
          return <Flag key={flag.id} props={flag} />
        })}
      </div>
    </div>
  )
}
