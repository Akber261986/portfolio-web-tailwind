import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-950 py-2 px-4 sm:px-24">
      <div className="text-cyan-400 font-bold sm:text-2xl">
        <span className='text-white'>GHULAM </span>AKBER
      </div>
        <ul className="flex items-center gap-4 sm:gap-10 text-white">
            <li><Link href="/" className='hover:text-cyan-400'>Home</Link></li>
            <li><Link href="/about" className='hover:text-cyan-400'>About</Link></li>
            <li><Link href="/career" className='hover:text-cyan-400'>Career</Link></li>
            <li><Link href="/contactUs" className='hover:text-cyan-400'>Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
