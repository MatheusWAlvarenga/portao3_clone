// vendors
import { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// contexts
import { ContextGlobalElements } from '@/context/global'

// assets
import image from '@/assets/lastCardHome.png'

// components
import { InputEmail } from '@/components/tools/inputEmail'

export function CardHome_10() {
  const [hoverElement, setHoverElement] = useState(false)
  const { scrollY, resetActualScrollView } = useContext(ContextGlobalElements)

  const [viewDiv, setViewDiv] = useState(false)

  const refDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const viewDiv = refDiv.current?.offsetTop
        ? refDiv.current?.offsetTop + 100 < window.scrollY + window.innerHeight
        : false

      setViewDiv((before) => (before == false ? viewDiv : true))

      // reset scrollY
      resetActualScrollView(
        refDiv.current?.offsetTop ? refDiv.current?.offsetTop : 0,
      )
    }

    handleScroll()
  }, [scrollY])

  return (
    <div
      ref={refDiv}
      className={`${
        viewDiv ? '' : 'opacity-0'
      } transition-opacity duration-1000 delay-500 flex w-full justify-center items-center py-20 px-[2%] sm:px-[4%] md:px-[8%] tablet:px-[10%] lg:px-[12%] desktop:px-[15%] monitor:px-[22%]  font-montserrat text-white`}
    >
      <div
        onMouseEnter={() => setHoverElement(true)}
        onMouseLeave={() => setHoverElement(false)}
        className='flex flex-col w-full   min-h-[35rem] lg:flex-row gap-12 p-8 justify-center items-center rounded-lg bg-inHover'
      >
        <div className='flex w-full lg:w-1/2 justify-center items-center min-h-[20rem] sm:min-h-[25rem] md:min-h-[28rem] tablet:min-h-[32rem]  lg:min-h-[20rem]'>
          <div className='flex w-full justify-center items-center'>
            <div
              className={`flex  ${
                hoverElement
                  ? 'w-0 min-h-0'
                  : 'w-full  min-h-[18rem]  sm:min-h-[23rem]   md:min-h-[28rem]  tablet:min-h-[30rem]   lg:min-h-[22rem]   desktop:min-h-[26rem]   monitor:min-h-[28rem]'
              } justify-center items-center p-4 bg-primary rounded-md  transition-all duration-1000`}
            >
              <Image
                src={image}
                alt=''
                className={`flex w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[27rem] tablet:max-w-[29rem] lg:max-w-[20rem] desktop:max-w-[28rem] monitor:max-w-[30rem] absolute ${
                  hoverElement
                    ? 'scale-100  -rotate-45 '
                    : 'scale:100 lg:scale-90'
                }  transition-all duration-700 rounded-lg`}
              />
            </div>
          </div>
        </div>
        <div className='flex w-full lg:w-3/4 desktop:w-1/2 flex-col justify-center items-start gap-6'>
          <div className='flex flex-col gap-2 justify-center items-start w-full'>
            <div className='flex text-3xl lg:text-4xl font-bold w-[80%] lg:w-[55%]'>
              Não deixe seu financeiro esperando.
            </div>
            <p className=' w-[90%] lg:w-[65%]'>
              <b>Dê o primeiro passo agora. </b>Sua gestão vai se dividir entre
              antes e depois da P3.
            </p>
          </div>
          <div className='flex w-full'>
            <InputEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
