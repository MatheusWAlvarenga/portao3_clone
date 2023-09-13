// components
import { Flag } from './flag'

// assets
import fifthCard1 from '@/assets/fifthCardHome1.png'
import fifthCard2 from '@/assets/fifthCardHome2.png'
import fifthCard3 from '@/assets/fifthCardHome3.png'
import fifthCard4 from '@/assets/fifthCardHome4.png'

export function CardHome_7() {
  const itemsList = [
    {
      id: 1,
      title: 'Viagens',
      text: 'Compre passagens e hotéis com desconto',
      image: fifthCard1,
      altImage: '',
      ref: '/',
    },
    {
      id: 2,
      title: 'Frotas',
      text: 'Otimize os gastos e bloqueie fraudes com IA',
      image: fifthCard2,
      altImage: '',
      ref: '/',
    },
    {
      id: 3,
      title: 'Anúncios',
      text: 'Suas campanhas sempre no ar, sem preocupações',
      image: fifthCard3,
      altImage: '',
      ref: '/',
    },
    {
      id: 4,
      title: 'Eventos',
      text: 'Serviço de concierge para agendar eventos',
      image: fifthCard4,
      altImage: '',
      ref: '/',
    },
  ]
  return (
    <div className='flex flex-col justify-center items-center bg-base gap-10 py-10 sm:py-20 lg:py-28 w-full '>
      <div className='flex flex-col gap-2 w-full justify-center items-center py-4 sm:py-6'>
        <p className='w-full px-[10%]  justify-center items-center text-textCard text-center font-montserrat font-medium text-2xl tablet:text-4xl'>
          Várias despesas, uma única plataforma
        </p>
        <p className='w-full px-[5%] justify-center items-center text-second text-center font-montserrat font-medium text-[1rem] tablet:text-lg'>
          Na estrada ou nas alturas, encurtamos o caminho para você organizar
          tudo sem mudar a aba do navegador
        </p>
      </div>
      <div className='w-full flex justify-center items-center mt-10 md:mt-20 '>
        <div className='w-[80%] sm:w-[75%] md:w-[70%] tablet:w-[60%] lg:w-[70%] desktop:[65%] monitor:w-[55%] flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
          {itemsList.map((card) => {
            return <Flag key={card.id} props={card} />
          })}
        </div>
      </div>
    </div>
  )
}
