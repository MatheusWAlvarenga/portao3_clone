// vendors
import Link from 'next/link'

// icons
import { MdKeyboardArrowRight } from 'react-icons/md'

// types
interface MenuModalProps {
  menuOpen: boolean
  selectCurrent: number
  selected: number
  hoverItem: number
  effectSelectOption: number
  menuItems: ItemsType[]
  setHoverItem: (item: number) => void
  handleClick: (item: number) => void
  handleCloseSelect: (item: boolean) => void
  handleEffectInSelectOption: (item: number) => void
  setMenuOpen: () => void
}

type ItemsType = {
  id: number
  title: string
  href: string
  type: string
  submenu: SubmenuType[]
}

type SubmenuType = {
  id: number
  title: string
  href: string
}

export function MenuModal({
  menuOpen,
  selectCurrent,
  selected,
  hoverItem,
  effectSelectOption,
  menuItems,
  setHoverItem,
  handleClick,
  handleCloseSelect,
  handleEffectInSelectOption,
  setMenuOpen,
}: MenuModalProps) {
  return (
    <div
      onMouseLeave={() => setMenuOpen}
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
                    selectCurrent == item.id && menuOpen
                      ? 'rotate-90'
                      : 'rotate-0'
                  } transition duration-300`}
                >
                  <MdKeyboardArrowRight className='h-5 w-5' />
                </div>
              </button>

              <div
                className={`flex  bg-white ${
                  selectCurrent == item.id && menuOpen
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
                      onClick={() => handleCloseSelect(true)}
                      onMouseEnter={() => handleEffectInSelectOption(menu.id)}
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
  )
}
