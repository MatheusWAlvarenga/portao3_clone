// components
import { Flags } from './flag'
import { useContext, useEffect, useRef, useState } from 'react'

// context
import { ContextGlobalElements } from '@/context/global'

// assets
import Account1 from './assets/account-1.png'
import Account2 from './assets/account-2.png'
import Account3 from './assets/account-3.png'
import Account4 from './assets/account-4.png'
import FlagCard from './assets/flagCard.png'
import Costs from './assets/costs.png'
import Insight1 from './assets/insight-1.png'
import Insight2 from './assets/insight-2.png'
import Insight3 from './assets/insight-3.png'

export function CardHome_2() {
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
      title: 'Cartões',
      description:
        'Em poucos cliques, você cria e solicita quantos cartões precisar, físicos ou virtuais.',
      image: [FlagCard],
      imageAlt: '',
    },
    {
      id: 2,
      title: 'Despesas',
      description:
        'Regras para saldo dos cartões e bloqueie fraudes ou pagamentos suspeitos.',
      image: [Costs],
      imageAlt: '',
    },
    {
      id: 3,
      title: 'Contas',
      description:
        'Controle seus fornecedores em um só lugar e descubra onde otimizar seus custos.',
      image: [Account1, Account2, Account3, Account4],
      imageAlt: '',
      type: 'grid',
    },
    {
      id: 4,
      title: 'Insights',
      description:
        'Acesse recomendações personalizadas e análises de tendência de gastos.',
      image: [Insight1, Insight2, Insight3],
      imageAlt: '',
    },
  ]
  return (
    <div className='flex flex-col justify-center items-center bg-base gap-10 py-10 sm:py-20 lg:py-28 w-full '>
      <div className='flex flex-col gap-4 w-full justify-center items-center py-4 sm:py-6'>
        <p className='w-full px-[10%] lg:px-[23%] justify-center items-center text-second text-center font-montserrat font-medium text-2xl tablet:text-4xl'>
          Seu primeiro passo é com nosso cartão
        </p>
        <p className='w-full px-[10%] lg:px-[18%]  justify-center items-center text-second text-center font-montserrat font-normal text-[1rem] tablet:text-lg'>
          <b>Seu financeiro acaba de ganhar um reforço de peso,</b> com
          autonomia para gerenciar despesas, regras, aprovações, reembolsos e
          orçamentos.
        </p>
      </div>
      <div
        ref={refFlag}
        className={`${
          viewFlag ? '' : 'opacity-0'
        } transition-opacity duration-1000 delay-300 w-full flex flex-col gap-4  justify-center items-center mt-10 tablet:w-[95%] tablet:grid tablet:grid-cols-2 tablet:mt-16 lg:w-[98%] lg:grid-cols-3 lg:mt-20 desktop:flex  desktop:flex-row`}
      >
        {itemList.map((flag) => {
          return <Flags key={flag.id} props={flag} />
        })}
      </div>
    </div>
  )
}
