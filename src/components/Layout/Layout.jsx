import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'

export default function Layout(props) {
  return (
    <div className="bg-mainBackground bg-cover bg-no-repeat">
      <Nav />
      {props.children}
      <Footer/>
    </div>
  )
}
