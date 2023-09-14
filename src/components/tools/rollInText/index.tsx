'use client'

// vendors
import { useEffect, useState } from 'react'
import React from 'react'
import Slider from 'react-slick'

interface RollInTextProps {
  wordList: string[]
}

export default function RollInText({ wordList }: RollInTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [rollOut, setRollOut] = useState(false)

  const delay = 300

  useEffect(() => {
    const interval = setInterval(() => {
      setRollOut(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % wordList.length)
        setRollOut(false)
      }, delay)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  }
  return (
    <div className='overflow-hidden text-center'>
      <Slider {...settings}>
        {wordList.map((word) => {
          return <span key={word}>{word}</span>
        })}
      </Slider>
    </div>
  )
}
