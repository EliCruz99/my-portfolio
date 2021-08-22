import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'

export default function Layout(props) {
  return (
    <div className="bg-gray-800 h-full">
      <Nav />
      {props.children}
      <Footer/>
    </div>
  )
}
