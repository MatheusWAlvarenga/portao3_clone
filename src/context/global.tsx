'use client'

// vendors
import { ReactNode, createContext, useEffect, useRef, useState } from 'react'

// types
type ContextProps = {
  menuOpen: boolean
  scrollY: number
  controlMenuOpen: (item?: string) => void
  resetActualScrollView: (item: number) => void
}

type Props = {
  children: ReactNode
}

// context create
export const ContextGlobalElements = createContext({} as ContextProps)

export function ContextGlobal({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [managerScrollView, setManagerScrollView] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY + window.innerHeight)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [managerScrollView])

  function resetActualScrollView(item: number) {
    setManagerScrollView(item)
  }

  function controlMenuOpen(item?: string) {
    if (item == 'close') setMenuOpen(false)

    if (item == undefined) setMenuOpen((before) => !before)
  }

  return (
    <ContextGlobalElements.Provider
      value={{
        menuOpen,
        controlMenuOpen,
        scrollY,
        resetActualScrollView,
      }}
    >
      {children}
    </ContextGlobalElements.Provider>
  )
}
