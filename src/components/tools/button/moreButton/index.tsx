'use client'
// vendors
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function MoreButton() {
  const pathname = usePathname()
  const [showMoreButton, setShowMoreButton] = useState(true)

  useEffect(() => {
    if (pathname.endsWith('/prod-typeform-v3') || pathname.endsWith('/login'))
      return setShowMoreButton(false)
    setShowMoreButton(true)
  }, [pathname])

  return (
    <>
      {showMoreButton && (
        <div className='flex p-5'>
          <Link
            className='flex w-max items-center border-[3px] text-sm monitor:text-[1rem]  border-button-second-border hover:border-button-second-hover-border bg-button-second-background hover:bg-button-second-hover-background text-button-second-text hover:text-button-second-hover-text font-semibold px-4 py-2 rounded-lg transition duration-200'
            href='/pages/registro/prod-typeform-v3'
          >
            Quero saber mais
          </Link>
        </div>
      )}
    </>
  )
}
