export default function Formulario() {
  return (
    <main className='flex flex-col w-full font-montserrat'>
      <div className='flex flex-col w-full h-screen  justify-between items-center p-8  bg-inHover mt-[7rem]'>
        <div className='flex flex-col text-sm px-12  w-full justify-center items-center text-center text-white'>
          Página criada para exemplificar o comportamento do menu.
        </div>

        <div className='flex flex-col flex-1 h-full justify-center items-center gap-12'>
          <div className='flex  justify-center items-center text-white text-center font-semibold text-3xl tablet:text-[4rem]'>
            Formulário
          </div>
          <div className=' animate-bounce flex justify-center items-center text-white text-center font-normal text-2xl transition-all duration-500'>
            Página teste!
          </div>
        </div>
      </div>
    </main>
  )
}
