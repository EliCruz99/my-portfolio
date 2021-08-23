import React from 'react'

export default function Landing() {
  const position = '{ Full-Stack Web Developer }'
  return (
    <div id='home' className="h-screen flex flex-nowrap flex-col justify-center items-center">
            <h3 className="text-white text-4xl text-center tracking-tight"><span className='text-4xl font-press-start text-red-500'>{position}</span></h3>
      <h1
        className="font-serif text-white text-8xl text-center tracking-tight mb-3"
      >Hi, I'm <span className=''>Elijah Cruz</span></h1>

    </div>
  )
}
