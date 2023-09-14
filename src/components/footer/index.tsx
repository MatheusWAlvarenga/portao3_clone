// vendors
import Image from 'next/image'
import Link from 'next/link'

// components
import { InputEmail } from '@/components/tools/inputEmail'

// assets
import logo from '@/assets/portao3-logo.svg'
import instagramLogo from './assets/instagram-logo.svg'
import linkedInLogo from './assets/linkedIn-logo.svg'
import youTubeLogo from './assets/youTube-logo.svg'
import appStoreImage from './assets/appStore.png'
import googlePlayImage from './assets/googlePlay.png'

export function Footer() {
  const linksPage = [
    {
      id: 1,
      title: 'Imprensa',
      ref: 'https://www.portao3.com.br/imprensa',
    },
    {
      id: 2,
      title: 'Sobre',
      ref: 'https://www.portao3.com.br/sobre',
    },
    {
      id: 3,
      title: 'Vagas',
      ref: 'https://www.linkedin.com/company/portao-3/jobs/',
    },
  ]
  const linksSocialMedia = [
    {
      id: 1,
      title: 'instagram',
      image: instagramLogo,
      alt: 'instagram logo',
      ref: 'https://www.instagram.com/portao.3',
    },
    {
      id: 2,
      title: 'linkedIn',
      image: linkedInLogo,
      alt: 'linkedIn logo',
      ref: 'https://www.linkedin.com/company/portao-3',
    },
    {
      id: 3,
      title: 'youTube',
      image: youTubeLogo,
      alt: 'youTube logo',
      ref: 'https://www.youtube.com/@portao3985',
    },
  ]
  return (
    <main className='flex flex-col gap-4 desktop:gap-2 px-[2%] sm:px-[4%] md:px-[8%] tablet:px-[10%] lg:px-[12%] desktop:px-[15%] monitor:px-[22%] py-[1rem] justify-center items-center w-full min-h-[28rem] bg-footer-background  divide-y-2 divide-footer-line pb-14 md:pb-[5rem] desktop:pb-0'>
      <div className='flex flex-col tablet:flex-row gap-3 w-full justify-between items-center py-4'>
        <div className='flex flex-col-reverse md:flex-row tablet:hidden gap-6 mt-6'>
          {linksSocialMedia.map((media) => {
            return (
              <Link key={media.id} href={media.ref} target='_blank'>
                <Image
                  className='flex w-6 h-6'
                  src={media.image}
                  alt={media.alt}
                />
              </Link>
            )
          })}
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row gap-5 tracking-wide mt-6'>
          {linksPage.map((link) => {
            return (
              <Link
                className='text-[1.125rem] font-light text-footer-text hover:text-footer-textHover'
                key={link.id}
                href={link.ref}
              >
                {link.title}
              </Link>
            )
          })}
        </div>
        <div className='hidden tablet:flex gap-6 justify-center items-center'>
          {linksSocialMedia.map((media) => {
            return (
              <Link key={media.id} href={media.ref} target='_blank'>
                <Image
                  className='flex w-6 h-auto lg:mt-0 mt-6'
                  src={media.image}
                  alt={media.alt}
                />
              </Link>
            )
          })}
        </div>
      </div>

      <div className='flex flex-col pt-10 desktop:mt-0 desktop:flex-row gap-4 desktop:gap-0 w-full justify-between items-center '>
        <Link href={'/'}>
          <Image
            className='w-[6rem]'
            src={logo}
            alt='Retângulo transparente com o nome Portão e quadrado na cor roxa com o número 3 em branco'
          />
        </Link>
        <span className='text-[1rem] md:text-[1.3rem] font-normal text-footer-text -ml-20'>
          Junte-se a + de 600 clientes
        </span>
        <div className='flex w-[95%] sm:w-[90%] md:w-[80%] tablet:w-[70%] lg:w-[60%] desktop:w-[50%] my-12 justify-end items-center '>
          <InputEmail />
        </div>
      </div>

      <div className='flex flex-col desktop:flex-row w-full justify-between items-center gap-4 py-4'>
        <div className='flex flex-col-reverse justify-center items-center tablet:flex-row lg:hidden gap-4'>
          <Link
            href='https://play.google.com/store/apps/details?id=com.portao3.portao3'
            target='_blank'
            className='flex shadow-sm'
          >
            <Image
              className='flex w-auto h-10 rounded-md'
              src={googlePlayImage}
              alt=''
            />
          </Link>
          <Link
            href='https://apps.apple.com/br/app/port%C3%A3o-3/id1502054193'
            target='_blank'
            className='flex shadow-sm '
          >
            <Image
              className='flex w-auto h-10 rounded-md '
              src={appStoreImage}
              alt=''
            />
          </Link>
        </div>
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-4 text-[.68rem] sm:text-[.7rem] md:text-[.75rem] tablet:text-[.8rem] lg:text-[.8rem] desktop:text-[.9rem] monitor:text-[1rem] font-light text-footer-tex'>
          <span>PORTÃO 3 VIAGENS LTDA. - TODOS OS DIREITOS RESERVADOS</span>
          <Link href='https://uploads-ssl.webflow.com/61a657319f52a6aa0fcfd29b/63b71192010714da30cc0326_Port%C3%A3o%203%20-%20Pol%C3%ADtica%20de%20Privacidade%20(ENG).pdf'>
            POLÍTICA DE PRIVACIDADE
          </Link>
          <Link href='https://uploads-ssl.webflow.com/61a657319f52a6aa0fcfd29b/63b71192010714da30cc0326_Port%C3%A3o%203%20-%20Pol%C3%ADtica%20de%20Privacidade%20(ENG).pdf'>
            PRIVACY POLICY
          </Link>
        </div>
        <div className='hidden lg:flex gap-4'>
          <Link
            href='https://play.google.com/store/apps/details?id=com.portao3.portao3'
            target='_blank'
            className='flex shadow-sm '
          >
            <Image
              className='flex w-auto h-10  rounded-md'
              src={googlePlayImage}
              alt=''
            />
          </Link>
          <Link
            href='https://apps.apple.com/br/app/port%C3%A3o-3/id1502054193'
            target='_blank'
            className='flex shadow-sm '
          >
            <Image
              className='flex w-auto h-10 rounded-md '
              src={appStoreImage}
              alt=''
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
