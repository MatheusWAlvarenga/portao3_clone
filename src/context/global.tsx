'use client'

// vendors
import { ReactNode, createContext, useState } from 'react'

// types
type ContextProps = {
  menuOpen: boolean
  controlMenuOpen: (item?: string) => void
}

type Props = {
  children: ReactNode
}

// context create
export const ContextGlobalElements = createContext({} as ContextProps)

export function ContextGlobal({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  function controlMenuOpen(item?: string) {
    if (item == 'close') setMenuOpen(false)

    if (item == undefined) setMenuOpen((before) => !before)
  }

  return (
    <ContextGlobalElements.Provider
      value={{
        menuOpen,
        controlMenuOpen,
      }}
    >
      {children}
    </ContextGlobalElements.Provider>
  )
}
