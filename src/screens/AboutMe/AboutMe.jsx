import React from 'react'
import Tech from '../TechStack/Tech'

export default function AboutMe() {
  return (
    <div id='about' className='flex flex-nowrap flex-col mt-15'>
      <h1 className="text-white text-3xl flex justify-center">About Me</h1>
      <p className="text-white text-xl mx text-center">Hi I'm Elijah! I'm a full-stack software engineer currently based in the Greater Los Angeles area. Detail-orientated developer that loves clean code. I am an effective communicator that loves to work with people. I implement creativity and innovation whenever I can.</p>
      <Tech/>
    </div>
  )
}
