// vendors
import Image from 'next/image'
import Link from 'next/link'

// components
import { Menu } from '@/components/tools/menu'
import { MoreButton } from '@/components/tools/button/moreButton'

// assets
import logo from '@/assets/portao3-logo.svg'

export function Header() {
  return (
    <div className='flex font-montserrat justify-between items-center w-full min-h-[7rem] px-[4%] sm:px-[5%] md:px-[6%] tablet:px-[7%] lg:px-[8%] desktop:px-[9%] monitor:px-[16%] bg-header-background'>
      <Link href={'/'}>
        <Image
          className='w-[6rem]'
          src={logo}
          alt='Retângulo transparente com o nome Portão e quadrado na cor roxa com o número 3 em branco'
        />
      </Link>
      <Menu />
      <div className='hidden desktop:flex gap-5 justify-self-end'>
        <MoreButton />
        <div className='flex py-2'>
          <Link
            className='flex border-[3px] justify-center items-center text-sm monitor:text-[1rem]  border-button-primary-border hover:border-button-primary-hover-border bg-button-primary-background hover:bg-button-primary-hover-background text-button-primary-text hover:text-button-primary-hover-text font-semibold p-5 rounded-lg transition duration-200'
            href='/pages/user/login'
            scroll
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
