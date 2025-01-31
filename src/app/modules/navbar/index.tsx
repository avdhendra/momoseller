import React from 'react'
import Logo from "../../../../public/images/logo.svg"
import Phone from "../../../../public/images/phone.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'

type Props = {}

export default function Navbar({}: Props) {
  return (
      <header className='flex flex-row p-8 items-center justify-between w-full'>
          <div className='flex w-1/3'>
           <Image src={Logo} alt='momo' className='h-16 w-16'/>
          </div>
          <nav className='hidden w-1/3 sm:flex'>
              <ul className=' w-full flex flex-row items-center  justify-between gap-2 list-none m-0'>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>About</a></li>
                  <li><a href='#'>Services</a></li>
                  <li><a href='#'>Contact</a></li>
              </ul>
          </nav>
          <div className='flex w-1/3 justify-end'>
              <button className='hidden bg-orange-500  rounded-full sm:flex px-4 py-1 items-center gap-2'>
                  <span>
                      <Image src={Phone} alt="phone" className='h-4'/>
                  </span>
                  <span className='text-white '>Contact</span>
              </button>
              <GiHamburgerMenu className='flex sm:hidden'/>
          </div>
          
              
              
          
  
          
    </header>
  )
}