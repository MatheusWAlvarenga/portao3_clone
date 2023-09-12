'use client'

// vendors
import { useState } from 'react'

export function InputEmail() {
  const [email, setEmail] = useState('')

  function handleEmailInput(item: HTMLInputElement) {
    setEmail(item.value)
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setEmail('')
    if (email.length) return alert('Simulating e-mail registration')
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='flex w-full bg-primary py-1 pl-5 pr-2 rounded-lg text-white font-thin text-sm gap-4 '
    >
      <input
        className='flex py-1 w-full font-light sm:min-w-[14rem] md:min-w-[15rem] tablet:min-w-[16.5rem] bg-transparent border-none placeholder:font-light placeholder:text-white placeholder:text-[.915rem] focus:outline-none focus:ring-0 focus:border-spacing-0'
        type='email'
        placeholder='Seu e-mail corporativo...'
        value={email}
        onChange={(e) => handleEmailInput(e.target)}
      />
      <button
        type='submit'
        className='flex justify-center items-center font-medium px-4 py-[.35rem] my-1 rounded-md text-footer-text hover:text-white bg-white hover:bg-transparent border-2 border-white transition duration-300'
      >
        Começar
      </button>
    </form>
  )
}
