'use client'

import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow (!show)
  }

  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-950 py-2 px-8 sm:px-24 h-20">
      <div className="text-cyan-400 font-bold text-2xl">
        <span className='text-white'>GHULAM </span> AKBER
      </div>
        <ul 
        className={`flex-col items-center pt-10 gap-10 absolute right-0 top-20 w-60 h-[25rem] text-white bg-gray-950
          md:flex md:flex-row md:static md:h-auto md:w-auto md:pt-0
          ${show ? "flex" : "hidden"}`}

        >
            <li><Link href="/" className='hover:text-cyan-400'>Home</Link></li>
            <li><Link href="/about" className='hover:text-cyan-400'>About</Link></li>
            <li><Link href="/career" className='hover:text-cyan-400'>Career</Link></li>
            <li><Link href="/contactUs" className='hover:text-cyan-400'>Contact Us</Link></li>
        </ul>
        <div className='md:hidden absolute right-8 '>
        <Image 
          src={"/images/svg/bars-solid.svg"}
          alt='Ham'
          width={30}
          height={1}
          onClick={handleToggle}
          className={show ? "hidden": "block"}
          />
           <Image 
          src={"/images/svg/xmark-solid.svg"}
          alt='cross'
          width={30}
          height={1}
          onClick={handleToggle}
          className={show ? "block": "hidden"}
          />
        </div>
      </nav>
    </div>
  )
}

export default Header
