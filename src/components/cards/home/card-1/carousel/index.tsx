import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// assets
import kiwify from '../assets/kiwify.png'
import tractian from '../assets/tractian.png'
import play9 from '../assets/play9.png'
import sulamerica from '../assets/sulamerica.png'
import noh from '../assets/noh.png'
import sami from '../assets/sami.png'
import bitso from '../assets/bitso.png'

// type
type ImageType = {
  id: number
  src: StaticImageData
  alt_description: string
}

export default function Carousel() {
  const divRef = useRef<HTMLDivElement | null>(null)
  const [withPage, setWithPage] = useState(3)

  const images: ImageType[] = [
    { id: 1, src: kiwify, alt_description: 'kiwify' },
    { id: 2, src: tractian, alt_description: 'tractian' },
    { id: 3, src: play9, alt_description: 'play9' },
    { id: 4, src: sulamerica, alt_description: 'sulamerica' },
    { id: 5, src: noh, alt_description: 'noh' },
    { id: 6, src: sami, alt_description: 'sami' },
    { id: 7, src: bitso, alt_description: 'bitso' },
    { id: 8, src: kiwify, alt_description: 'kiwify' },
    { id: 9, src: tractian, alt_description: 'tractian' },
    { id: 10, src: play9, alt_description: 'play9' },
    { id: 11, src: sulamerica, alt_description: 'sulamerica' },
    { id: 12, src: noh, alt_description: 'noh' },
    { id: 13, src: sami, alt_description: 'sami' },
    { id: 14, src: bitso, alt_description: 'bitso' },
  ]

  useEffect(() => {
    if (divRef.current) {
      const elementWidth = divRef.current.clientWidth

      if (elementWidth < 400) {
        setWithPage(2)
        return
      }

      if (elementWidth > 400 && elementWidth < 500) {
        setWithPage(3)
        return
      }
      if (elementWidth > 500 && elementWidth < 600) {
        setWithPage(4)
        return
      }
      if (elementWidth > 600 && elementWidth < 800) {
        setWithPage(4)
        return
      }

      if (elementWidth > 800 && elementWidth < 1000) {
        setWithPage(5)
        return
      }
      if (elementWidth > 1000 && elementWidth < 1500) {
        setWithPage(6)
        return
      }

      if (elementWidth > 1500) {
        setWithPage(9)
        return
      }
    }
  }, [divRef.current?.clientWidth])

  let settings = {
    infinite: true,
    centerMode: true,
    speed: 8000,
    slidesToShow: withPage || 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }

  return (
    <div
      ref={divRef}
      className='flex flex-col py-6 sm:py-0 w-full justify-center items-center overflow-hidden'
    >
      <Slider {...settings} className='w-full'>
        {images.map((image, index) => (
          <div
            className='flex w-full justify-between items-center px-2'
            key={index}
          >
            <Image
              src={image.src}
              alt={image.alt_description}
              className='h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 '
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
