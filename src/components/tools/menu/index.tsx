'use client'

// vendors
import { useEffect, useState, useContext, useRef, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// icons
import { MdKeyboardArrowRight, MdMenu } from 'react-icons/md'

// contexts
import { ContextGlobalElements } from '@/context/global'

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

export function Menu() {
  const pathname = usePathname()
  const { controlMenuOpen, menuOpen } = useContext(ContextGlobalElements)
  const [selected, setSelected] = useState(1)
  const [selectCurrent, setSelectCurrent] = useState(0)
  const [selectCurrent2, setSelectCurrent2] = useState(0)
  const [hoverItem, setHoverItem] = useState(0)
  const [effectSelectOption, setEffectSelectOption] = useState(0)
  const menuRef = useRef(null)
  const selectMenuRef = useRef(null)
  const selectMenuRef2 = useRef(null)

  function useOutsideMenu(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          controlMenuOpen('close')
          setSelectCurrent(0)
          setSelectCurrent2(0)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  function useOutsideSelect(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSelectCurrent(0)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  function useOutsideSelect2(ref: any) {
    useEffect(() => {
      function handleClickOutside2(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSelectCurrent2(0)
        }
      }

      document.addEventListener('mousedown', handleClickOutside2)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside2)
      }
    }, [ref])
  }

  useOutsideMenu(menuRef)
  useOutsideSelect(selectMenuRef)
  useOutsideSelect2(selectMenuRef2)

  function handleClick(id: number) {
    setSelectCurrent((before) => (before == id ? 0 : id))
    setSelectCurrent2((before) => (before == id ? 0 : id))
    setSelected((before) => (before == id ? 0 : id))
  }

  function handleCloseSelect(closeCompactMenu?: boolean) {
    setSelectCurrent(0)
    setSelectCurrent2(0)
    if (closeCompactMenu) {
      controlMenuOpen('close')
    }
  }

  useEffect(() => {
    const currentPathId = menuItems.map((e) => {
      if (e.href == pathname && e.type != 'select') return e.id
    })

    const item = currentPathId.filter((e) => e != undefined)[0] || 0
    setSelected(item)
  }, [pathname, selectCurrent, selectCurrent2])

  function handleEffectInSelectOption(id: number) {
    setEffectSelectOption((before) => (before == id ? 0 : id))
  }
  function handleMenuOpen() {
    if (selected != 0) setSelected(0)

    setSelectCurrent(0)
    setSelectCurrent2(0)
    controlMenuOpen()
  }

  return (
    <div ref={menuRef} className='flex font-montserrat font-semibold'>
      <div className='hidden desktop:flex gap-8'>
        {menuItems.map((item) => {
          if (item.type === 'select') {
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoverItem(item.id)}
                onMouseLeave={() => setHoverItem(0)}
                ref={selectMenuRef}
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
                        scroll
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
                  scroll
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
          <div
            className={` ${
              menuOpen ? 'flex  min-w-[10rem]' : 'hidden'
            }  flex-col z-30 fixed bg-white bg-pointer-events-auto p-4 gap-1 right-[4%] sm:right-[5%] md:right-[6%] tablet:right-[7%] lg:right-[8%] desktop:right-[9%] monitor:right-[16%]  mt-14 border border-inHover border-opacity-20 shadow-lg rounded-lg`}
          >
            {menuItems.map((item) => {
              if (item.type === 'select') {
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoverItem(item.id)}
                    onMouseLeave={() => setHoverItem(0)}
                    ref={selectMenuRef2}
                  >
                    <button
                      onClick={() => handleClick(item.id)}
                      className={`flex justify-start items-start text-sm monitor:text-[1rem] w-full h-8 py-2 px-4 mb-2 -mt-2 text-second transition duration-500`}
                    >
                      <div
                        className={`${
                          hoverItem == item.id && selected != item.id
                            ? ' h-8 opacity-100 '
                            : ' h-0  opacity-0'
                        } w-[2px] -ml-4 mr-2 rounded-xl items-self-start bg-inHover transition-all duration-500`}
                      />
                      <div className='flex w-full mt-[6px]'>{item.title}</div>
                      <div
                        className={`flex justify-center items-center mt-[6px]  ${
                          selectCurrent2 == item.id && menuOpen
                            ? 'rotate-90'
                            : 'rotate-0'
                        } transition duration-300`}
                      >
                        <MdKeyboardArrowRight className='h-5 w-5' />
                      </div>
                    </button>

                    <div
                      className={`flex  bg-white ${
                        selectCurrent2 == item.id && menuOpen
                          ? 'w-full h-auto'
                          : 'hidden w-0 h-0 pointer-events-none'
                      } flex-col gap-6 py-4 px-8 mt-2 -ml-2 transition-all duration-500 `}
                    >
                      {item.submenu.map((menu) => {
                        return (
                          <Link
                            href={menu.href}
                            key={menu.id}
                            className='flex flex-col justify-center items-start'
                            onClick={() => handleClick(menu.id)}
                            onMouseEnter={() =>
                              handleEffectInSelectOption(menu.id)
                            }
                            onMouseLeave={() => handleEffectInSelectOption(0)}
                          >
                            <span
                              className={`flex text-sm monitor:text-[1rem] w-full justify-start items-center hover:text-primary ${
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
              return (
                <div
                  key={item.id}
                  className='flex justify-center items-start w-full'
                  onMouseEnter={() => setHoverItem(item.id)}
                  onMouseLeave={() => setHoverItem(0)}
                >
                  <div
                    className={`${
                      hoverItem == item.id && selected != item.id
                        ? ' h-8 opacity-100 '
                        : ' h-0  opacity-0'
                    } w-[2px]  -mr-2 rounded-xl bg-inHover transition-all duration-500`}
                  />
                  <Link
                    scroll
                    href={item.href}
                    className={`flex text-sm monitor:text-[1rem] w-full  py-2 px-4 ${
                      selected == item.id
                        ? 'text-primary text-opacity-80'
                        : 'text-second'
                    } transition duration-200`}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.title}
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
