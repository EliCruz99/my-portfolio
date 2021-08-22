import React from 'react'

export default function Nav() {
  return (
    <nav className='flex flex-row fixed w-screen bg-gray-800 top-0 shadow-xl'>
      <a href='#home' className="text-purple-600 m-2">Home</a>
      <a href="#about" className='text-purple-600 m-2'>About Me</a>
      <a href="#project" className='text-purple-600 m-2'>Projects</a>
      <a href="#contact" className='text-purple-600 m-2'>Contact</a>
    </nav>
  )
}
