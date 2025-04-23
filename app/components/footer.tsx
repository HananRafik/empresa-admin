import React from 'react'
import Link from 'next/link'

import Image from 'next/image';

export default function footer() {


  return (
    
   
    <footer className='bg-gray-100 mt-12 border-t border-gray-200'>

      <div className='container mx-auto px-4 py-8'>


        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>


          <div className='grid grid-cols-1 md:grid-cols-3'>

              <Image
              src={'/logo.png'}
              alt='logo '
              width={100}
              height={40}/>
            

            <p className='text-gray-900 text-sm text-justify'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores reiciendis fugit suscipit explicabo autem harum quos sed molestias nulla quis deserunt eaque corrupti debitis, hic porro ipsum doloremque! Id, quae?
            </p>

          </div>


          <div>
            <h3 className='font-semibold text-gray-800 mb-3'>
              Empresa
            </h3>
            <ul className='space-y-2'>

              <FooterLink href='/privacidad' text='Privacidad' />
              <FooterLink href='/terminos' text='Términos' />
              <FooterLink href='/cookies' text='Cookies' />
              <FooterLink href='/licencias' text='Licencias' />

            </ul>

          </div>

          <div>
            <h3 className='font-semibold text-gray-800 mb-3'>
              Contacto
            </h3>

            <ul className='space-y-2 text-sm'>
              <li className='text-gray-600'>contacto@empresa.com</li>
              <li className='text-gray-600'>+34 666 666 666</li>
              <li className='text-gray-600'>Ubicación</li>

            </ul>
          </div>


          <div>

            
          </div>

        </div>


          {/*pie de pagina*/}

          <div className='flex flex-col md:flex-row justify-between items-center text-sm'>

            <p className='text-gray-500 mb-3 md:mb-0'>
              &copy; {new Date().getFullYear()}
               MiPlataforma. Todos los derechos reservados

            </p>

           

          </div>

      </div>



    </footer>

  )
}

function FooterLink({href, text }:{ href:string; text:string}) {

  return(
    <li>
      <Link href={href} className='text-gray-600 hover:text-blue-600 text-sm'>


      {text}


      </Link>
    </li>
  );
  
}



