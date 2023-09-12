// vendors
import Image, { StaticImageData } from 'next/image'

// type
interface FlagProps {
  props: {
    id: number
    title: string
    description: string
    image: StaticImageData[]
    imageAlt?: string
    type?: string
  }
}

export function Flags({ props }: FlagProps) {
  return (
    <main className='flex flex-col justify-start items-center'>
      <div className='flex w-[22rem] h-[12rem] desktop:w-[20rem] desktop:h-[12rem] flex-col p-10 gap-8 rounded-t-xl bg-white border border-b-none border-line border-opacity-20 shadow-2xl'>
        <div className='font-montserrat font-semibold text-2xl text-second'>
          {props.title}
        </div>
        <div className='font-montserrat w-[90%] font-normal text-sm text-description'>
          {props.description}
        </div>
      </div>
      <div className='flex w-[22rem] h-[20rem] desktop:w-[20rem] desktop:h-[18rem] justify-center items-start  bg-flag_bg p-5 rounded-b-xl shadow-2xl'>
        <div
          className={`${
            props.type && props.type == 'grid' ? 'grid gap-2' : 'flex'
          } grid-cols-2 flex-col  w-full h-full justify-between items-center divide-flag_bg bg-flag_bg`}
        >
          {props.image.map((img) => {
            return (
              <div
                key={img.src}
                className={`flex ${
                  props.type && props.type == 'grid'
                    ? 'h-full border border-flag_bg '
                    : 'flex divide-y-8'
                } w-full justify-between items-start bg-flag_bg`}
              >
                <Image
                  src={img}
                  alt={props.imageAlt || ''}
                  className={`flex ${
                    props.image.length == 1
                      ? 'hover:scale-110'
                      : 'hover:scale-125 monitor:hover:scale-150'
                  } w-full justify-center items-center rounded-md  hover:rounded-lg hover:border  hover:shadow-2xl border-flag_bg  border-opacity-50 transition duration-300`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
