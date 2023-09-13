'use client'

// vendors
import { ReactNode, createContext, useState } from 'react'

// types
type ContextProps = {
  menuOpen: boolean
  controlMenuOpen: (item?: boolean) => void
  controlClickOutMenu: () => void
}

type Props = {
  children: ReactNode
}

// context create
export const ContextGlobalElements = createContext({} as ContextProps)

export function ContextGlobal({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  function controlMenuOpen(item?: boolean) {
    if (item) return setMenuOpen(item)

    setMenuOpen((before) => !before)
  }

  function controlClickOutMenu() {
    if (menuOpen) setMenuOpen(false)
  }

  return (
    <ContextGlobalElements.Provider
      value={{
        menuOpen,
        controlMenuOpen,
        controlClickOutMenu,
      }}
    >
      {children}
    </ContextGlobalElements.Provider>
  )
}
