// components
import { Flag } from './flag'

// assets
import fourthCard1 from '@/assets/fourthCardHome1.png'
import fourthCard2 from '@/assets/fourthCardHome2.png'
import fourthCard3 from '@/assets/fourthCardHome3.png'

export function CardHome_6() {
  const itemsList = [
    {
      id: 1,
      title: 'Controle',
      text: 'Defina políticas de aprovação e crie quantos cartões precisar',
      image: fourthCard1,
      altImage: '',
    },
    {
      id: 2,
      title: 'Integre',
      text: 'Integre com seu ERP e serviços de contabilidade com facilidade',
      image: fourthCard2,
      altImage: '',
    },
    {
      id: 3,
      title: 'Pague',
      text: 'Use os cartões, confira os gastos, faça a conciliação em segundos',
      image: fourthCard3,
      altImage: '',
    },
  ]

  return (
    <div className='flex flex-col justify-center items-center bg-base gap-10 py-10 sm:py-20 lg:py-28 w-full '>
      <div className='flex flex-col gap-2 w-full justify-center items-center py-4 sm:py-6'>
        <p className='w-full px-[10%]  justify-center items-center text-textCard text-center font-montserrat font-medium text-2xl tablet:text-4xl'>
          Fácil de implementar, simples de usar
        </p>
        <p className='w-full px-[5%] justify-center items-center text-second text-center font-montserrat font-medium text-[1rem] tablet:text-lg'>
          Destrave todo o potencial do seu time financeiro com a plataforma da
          Portão 3
        </p>
      </div>
      <div className='w-full flex justify-center items-center mt-10 md:mt-20 '>
        <div className='w-[80%] sm:w-[75%] md:w-[70%] tablet:w-[60%] lg:w-[70%] desktop:[65%] monitor:w-[55%] flex flex-col lg:flex-row justify-between items-center'>
          {itemsList.map((card) => {
            return <Flag key={card.id} props={card} />
          })}
        </div>
      </div>
    </div>
  )
}
