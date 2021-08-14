import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'

export default function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer/>
    </div>
  )
}
