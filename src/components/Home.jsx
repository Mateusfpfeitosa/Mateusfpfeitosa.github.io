import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Olá,Meu nome é</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Mateus Felipe
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Eu sou Desenvolvedor Mobile, Front end.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'> 
           Sou um desenvolvedor experiente em Mobile e Front-end, com experiencia em criação de aplicativos
           e sites eficientes para projetos de pequeno e grande porte. Meu profissionalismo e atenção aos detalhes garantem que cada projeto seja entregue com qualidade e no prazo.
        </p>
        <div>
          <Link  to='work' smooth={true} duration={500} className='text-white group border-2 px-6 py-3 my-2 flex items-center max-w-[180px] hover:bg-pink-600 hover:border-pink-600'>
            Ver Projetos
            
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home