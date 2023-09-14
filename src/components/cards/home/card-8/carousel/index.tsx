'use client'
// vendors
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// icons
import { BsArrowRight } from 'react-icons/bs'

// assets
import tech from '../assets/techCrunch.png'
import exame from '../assets/exame.png'
import estadao from '../assets/estadao.png'
import forbes from '../assets/forbes.png'

// components
import { SampleNextArrow, SamplePrevArrow } from './sampleArrow'

// type
type ImageType = {
  id: number
  src: StaticImageData
  alt_description: string
  text: string
  ref: string
}

export default function Carousel() {
  const images: ImageType[] = [
    {
      id: 1,
      src: tech,
      alt_description: 'TechCrunch logo',
      text: '"Software that standardizes transaction data, verifies spend on cards to detect fraud and reduces expense reporting times"',
      ref: '/',
    },
    {
      id: 2,
      src: exame,
      alt_description: 'Exame logo',
      text: '"Empresa brasileira criada durante a pandemia já movimenta milhões"',
      ref: '/',
    },
    {
      id: 3,
      src: estadao,
      alt_description: 'Estadão Logo',
      text: '"Fintech capta R$19 milhões para expandir produtos"',
      ref: '/',
    },
    {
      id: 4,
      src: forbes,
      alt_description: 'Forbes logo',
      text: '"Produtos e serviços que facilitam a gestão financeira com tecnologia para segmentos que foram prejudicados pela pandemia"',
      ref: '/',
    },
  ]

  let settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 2,
    slidesPerRow: 1,
  }

  let settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 1,
  }

  return (
    <>
      <div className='flex lg:hidden mt-8 gap-4 w-full justify-center items-center overflow-hidden'>
        <Slider
          {...settings1}
          className='flex w-full justify-center items-center max-w-[35rem]'
        >
          {images.map((item, index) => (
            <div
              className='flex justify-center items-center w-full  min-h-[28rem] bg-transparent font-montserrat'
              key={index}
            >
              <div className='flex flex-col w-[90%] mx-[1rem] sm:mx-[2rem] justify-start min-h-[26rem] gap-4 items-start p-8 border border-line border-opacity-50 shadow-xl  scale-95 hover:border-opacity-60 hover:scale-100 rounded-lg  transition duration-300 '>
                <Image
                  src={item.src}
                  alt={item.alt_description}
                  className='h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 '
                />
                <div className='flex flex-col justify-center items-start gap-2 text-2xl font-bold text-opacity-80 text-inHover'>
                  {item.text}
                  <Link
                    href={item.ref}
                    className='flex text-sm gap-1 w-max font-montserrat font-light hover:opacity-60 hover:border-opacity-60 transition-all duration-200 '
                  >
                    Confira aqui
                    <BsArrowRight className=' mt-[2px] h-4 ' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='hidden lg:flex w-full justify-center items-center overflow-hidden'>
        <Slider
          {...settings2}
          className='flex flex-col sm:flex-row w-full justify-center items-center'
        >
          {images.map((item, index) => (
            <div
              className='flex justify-center items-center w-full bg-transparent font-montserrat'
              key={index}
            >
              <div className='flex flex-col w-[90%] m-7 bg-white monitor:m-7 monitor:w-[93%] justify-start items-start p-10 border border-line border-opacity-40 shadow-xl hover:shadow-xl scale-95  hover:scale-100 rounded-lg  transition duration-300 '>
                <div className='flex flex-col w-full  justify-start  gap-4 items-start min-h-[22rem]  monitor:min-h-[16rem]  '>
                  <Image
                    src={item.src}
                    alt={item.alt_description}
                    className='h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 -mt-8'
                  />
                  <div className='flex flex-col max-w-[80%] justify-center items-start gap-2 text-2xl font-bold text-opacity-80 text-inHover'>
                    {item.text}
                    <Link
                      href={item.ref}
                      className='flex text-sm gap-1 w-max font-montserrat font-light hover:opacity-60 hover:border-opacity-60 transition-all duration-200 '
                    >
                      Confira aqui
                      <BsArrowRight className=' mt-[2px] h-4 ' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
