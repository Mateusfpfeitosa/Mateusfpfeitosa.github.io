import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
           Sobre
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Olá. Sou Mateus, prazer em conhecê-lo. Por favor, dê uma olhada nos projetos.</p>
          </div>
          <div>
            <p>Desenvolver software é minha paixão, pois me permite criar sistemas e resolver problemas de forma eficiente.
              acredito que a tecnologia pode mudar o mundo de forma positiva.   
            </p>  
          </div>
        </div>
    </div>
  </div>
  )
}

export default About