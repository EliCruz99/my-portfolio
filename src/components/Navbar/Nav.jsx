import React from 'react'

export default function Nav() {
  return (
    <nav className='flex flex-row fixed w-screen bg-gray-700 mb-6'>
      <a href='#home' className="text-white m-2">Home</a>
      <a href="#about" className='text-white m-2'>About Me</a>
      <a href="#project" className='text-white m-2'>Projects</a>
      <a href="#contact" className='text-white m-2'>Contact</a>
    </nav>
  )
}
