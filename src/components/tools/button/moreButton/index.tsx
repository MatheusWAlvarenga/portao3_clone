'use client'
// vendors
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// type
interface MoreButtonProps {
  floating?: boolean
}

export function MoreButton({ floating = false }: MoreButtonProps) {
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
            className={`${
              floating
                ? 'border border-white  hover:border-button-second-border'
                : 'border-[3px] border-button-second-border'
            } flex w-max items-center  text-sm monitor:text-[1rem]  hover:border-button-second-hover-border bg-button-second-background hover:bg-button-second-hover-background text-button-second-text hover:text-button-second-hover-text font-semibold px-4 py-2 rounded-lg transition duration-200`}
            href='/pages/registro/prod-typeform-v3'
          >
            Quero saber mais
          </Link>
        </div>
      )}
    </>
  )
}
