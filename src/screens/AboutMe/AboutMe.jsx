import React from 'react'
import Tech from '../TechStack/Tech'

export default function AboutMe() {
  return (
    <div id='about' className='flex flex-nowrap flex-col mt-15 bg-red-400'>
      <h1 className="pb-1 font-rampart-one text-white text-6xl flex justify-center">About Me</h1>
      <p className="font-raleway text-white text-xl mb-4 text-center">Hi I'm Elijah! I'm a full-stack software engineer currently based in the Greater Los Angeles area. I am a detail-orientated developer that loves clean code. I am an effective communicator that loves to work with people. I implement creativity and innovation whenever I can.</p>
      <Tech/>
    </div>
  )
}
