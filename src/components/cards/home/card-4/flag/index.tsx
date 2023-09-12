// vendors
import Image, { StaticImageData } from 'next/image'

// type
interface SecondCardHomeType {
  props: {
    image: StaticImageData | null
    altImage: string
    text: string
    owner: string
    card: cardsType[] | []
    type: string
  }
}

type cardsType = {
  text1: string
  text2: string
}

export function Flag({ props }: SecondCardHomeType) {
  return (
    <>
      <div
        className={`${
          props.type == 'information' ? 'flex' : 'hidden'
        } justify-center items-center flex-col desktop:flex-row text-textCard gap-2 px-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 font-montserrat w-[80%] h-[22rem] desktop:w-[30rem] desktop:h-[20rem] border border-line border-opacity-50 bg-line bg-opacity-30 transition duration-300 `}
      >
        {props.card &&
          props.card.map((card) => {
            return (
              <div
                key={card.text1}
                className='flex w-full desktop:h-[70%] flex-col justify-center items-start desktop:items-center gap-4 bg-white rounded-lg p-6 desktop:p-2'
              >
                <div className='flex text-description font-bold text-4xl'>
                  {card.text1}
                </div>
                <div className='flex w-3/4 font-medium text-lg'>
                  {card.text2}
                </div>
              </div>
            )
          })}
      </div>
      <div
        className={`${
          props.type != 'information' ? 'flex' : 'hidden'
        } desktop:justify-start justify-between flex-col text-textCard gap-2 py-6 px-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 font-montserrat w-[80%]  desktop:w-[30rem] desktop:min-h-[20rem] border border-line border-opacity-50 bg-white transition duration-300 `}
      >
        <div className='flex w-24 -mt-4'>
          {props.image && (
            <Image src={props.image} alt={props.altImage} className='w-full ' />
          )}
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex text-lg font-bold pr-[10%]'>{`${props.text}`}</div>
          <div className='flex text-lg  font-normal'>{props.owner}</div>
        </div>
      </div>
    </>
  )
}
