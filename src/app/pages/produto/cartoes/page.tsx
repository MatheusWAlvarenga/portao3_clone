export default function Cartoes() {
  return (
    <main className='flex flex-col w-full'>
      <div className='flex flex-col w-full h-screen justify-center items-center pt-[7.8rem] gap-6 bg-inHover mt-[7rem]'>
        <div className='flex w-full flex-col gap-6 mb-20'>
          <div className='flex flex-col justify-center items-center text-white text-center font-montserrat font-bold text-[2.5rem] tablet:text-[4rem] transition-all duration-500'>
            Despesas
          </div>
          <div className=' animate-bounce flex flex-col justify-center items-center text-white text-center font-montserrat font-bold text-2xl transition-all duration-500'>
            Página teste
          </div>
        </div>
        <div className='flex flex-col h-[12rem]  w-full justify-center items-center  text-white'>
          Página criada para exemplificar o uso do menu.
        </div>
      </div>
    </main>
  )
}
