// components
import { Flags } from './flag'

// context
import { useContext, useEffect, useRef, useState } from 'react'

// assets
import flagAccount1 from '@/assets/flag-account-1.png'
import flagAccount2 from '@/assets/flag-account-2.png'
import flagAccount3 from '@/assets/flag-account-3.png'
import flagAccount4 from '@/assets/flag-account-4.png'
import flagCard from '@/assets/flag-card.png'
import flagCosts from '@/assets/flag-costs.png'
import flagInsight1 from '@/assets/flag-insight-1.png'
import flagInsight2 from '@/assets/flag-insight-2.png'
import flagInsight3 from '@/assets/flag-insight-3.png'
import { ContextGlobalElements } from '@/context/global'

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
      image: [flagCard],
      imageAlt: '',
    },
    {
      id: 2,
      title: 'Despesas',
      description:
        'Regras para saldo dos cartões e bloqueie fraudes ou pagamentos suspeitos.',
      image: [flagCosts],
      imageAlt: '',
    },
    {
      id: 3,
      title: 'Contas',
      description:
        'Controle seus fornecedores em um só lugar e descubra onde otimizar seus custos.',
      image: [flagAccount1, flagAccount2, flagAccount3, flagAccount4],
      imageAlt: '',
      type: 'grid',
    },
    {
      id: 4,
      title: 'Insights',
      description:
        'Acesse recomendações personalizadas e análises de tendência de gastos.',
      image: [flagInsight1, flagInsight2, flagInsight3],
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
