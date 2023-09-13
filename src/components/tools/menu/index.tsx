'use client'

// vendors
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// icons
import { MdKeyboardArrowRight, MdMenu } from 'react-icons/md'

// components
import { MenuModal } from './menuModal'

export function Menu() {
  const pathname = usePathname()
  const [selected, setSelected] = useState(1)
  const [selectCurrent, setSelectCurrent] = useState(1)
  const [hoverItem, setHoverItem] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [effectSelectOption, setEffectSelectOption] = useState(0)

  const menuItems = [
    {
      id: 1,
      title: 'Home',
      href: '/',
      type: 'always',
      submenu: [],
    },
    {
      id: 2,
      title: 'Produto',
      href: '',
      type: 'select',
      submenu: [
        {
          id: 1,
          title: 'Despesas',
          href: '/pages/produto/cartoes',
        },
        {
          id: 2,
          title: 'Viagens',
          href: '/pages/produto/viagens',
        },
        {
          id: 3,
          title: 'Frotas',
          href: '/pages/produto/frotas',
        },
        {
          id: 4,
          title: 'Anúncios',
          href: '/pages/produto/anuncios',
        },
      ],
    },
    {
      id: 3,
      title: 'Blog',
      href: '/pages/hub',
      type: 'always',
      submenu: [],
    },
    {
      id: 4,
      title: 'Ferramentas',
      href: '/pages/ferramentas',
      type: 'always',
      submenu: [],
    },
    {
      id: 5,
      title: 'Clientes',
      href: '/pages/clientes',
      type: 'always',
      submenu: [],
    },
    {
      id: 6,
      title: 'Login',
      href: '/pages/user/login',
      type: 'compact',
      submenu: [],
    },
  ]

  function handleClick(id: number) {
    setSelectCurrent((before) => (before == id ? 0 : id))
    setSelected((before) => (before == id ? 0 : id))
  }

  function handleCloseSelect(closeCompactMenu?: boolean) {
    setSelectCurrent(0)
    if (closeCompactMenu) setMenuOpen(false)
  }

  useEffect(() => {
    const currentPathId = menuItems.map((e) => {
      if (e.href == pathname && e.type != 'select') return e.id
    })

    const item = currentPathId.filter((e) => e != undefined)[0] || 0
    setSelected(item)
  }, [menuItems, pathname])

  function handleEffectInSelectOption(id: number) {
    setEffectSelectOption((before) => (before == id ? 0 : id))
  }
  function handleMenuOpen() {
    if (selected != 0) setSelected(0)

    setMenuOpen((before) => !before)
  }

  return (
    <div className='flex font-montserrat font-semibold'>
      <div className='hidden desktop:flex gap-8'>
        {menuItems.map((item) => {
          if (item.type === 'select') {
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoverItem(item.id)}
                onMouseLeave={() => setHoverItem(0)}
              >
                <button
                  onClick={() => handleClick(item.id)}
                  className={`flex ${
                    hoverItem == item.id && selectCurrent != item.id
                      ? ' border-inHover'
                      : 'border-transparent'
                  } border-[3px]  text-sm monitor:text-[1rem] rounded-md p-5 text-second transition-all duration-300`}
                >
                  {item.title}

                  <div
                    className={`flex justify-center items-center ${
                      selectCurrent == item.id ? 'rotate-90' : 'rotate-0'
                    } transition duration-300`}
                  >
                    <MdKeyboardArrowRight className='h-5 w-5' />
                  </div>
                </button>

                <div
                  onMouseLeave={() => handleCloseSelect()}
                  className={`z-30 absolute bg-white ${
                    selectCurrent == item.id
                      ? 'flex opacity-100 h-auto'
                      : ' opacity-0 hidden'
                  } flex-col gap-4 py-4 pl-8 pr-4  w-40 -ml-2 border border-inHover border-opacity-20 shadow-lg rounded-lg transition-all duration-300 delay-100`}
                >
                  {item.submenu.map((menu) => {
                    return (
                      <Link
                        href={menu.href}
                        key={menu.id}
                        className='flex flex-col justify-center items-start'
                        onClick={() => handleCloseSelect(true)}
                        onMouseEnter={() => handleEffectInSelectOption(menu.id)}
                        onMouseLeave={() => handleEffectInSelectOption(0)}
                      >
                        <span
                          className={`flex w-full text-sm monitor:text-[1rem] justify-start items-center ${
                            effectSelectOption == menu.id
                              ? 'scale-110 translate-x-3 text-primary'
                              : ''
                          } hover: transition duration-300 `}
                        >
                          {menu.title}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          }
          if (item.type !== 'compact') {
            return (
              <div
                key={item.id}
                className='flex flex-col justify-center items-start w-full'
                onMouseEnter={() => setHoverItem(item.id)}
                onMouseLeave={() => setHoverItem(0)}
              >
                <Link
                  href={item.href}
                  className={` ${
                    hoverItem == item.id
                      ? ' border-inHover'
                      : 'border-transparent'
                  } border-[3px] rounded-md flex text-sm monitor:text-[1rem] gap-2  p-5 ${
                    selected == item.id
                      ? 'text-primary text-opacity-80'
                      : 'text-second'
                  } transition-all duration-300`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.title}
                </Link>
              </div>
            )
          }
        })}
      </div>
      <div className='flex flex-col desktop:hidden gap-8'>
        <button className='z-10' onClick={handleMenuOpen}>
          <MdMenu className='w-10 h-10  text-primary text-opacity-80  transition-all duration-200' />
        </button>
        {menuOpen && (
          <MenuModal
            menuOpen={menuOpen}
            selectCurrent={selectCurrent}
            selected={selected}
            hoverItem={hoverItem}
            effectSelectOption={effectSelectOption}
            menuItems={menuItems}
            setHoverItem={setHoverItem}
            handleClick={handleClick}
            handleCloseSelect={handleCloseSelect}
            handleEffectInSelectOption={handleEffectInSelectOption}
          />
        )}
      </div>
    </div>
  )
}
