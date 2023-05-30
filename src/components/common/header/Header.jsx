import React, { useState } from "react"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <a href='/' active >Home</a>
            </li>
            <li>
              <a href='/courses'>All Courses</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/team'>Team</a>
            </li>
            <li>
              <a href='/allbooks'>All Books</a>
            </li>
            <li>
              {/* <a href='/pricing'>Pricing</a> */}
            </li>
            <li>
              <a href="/journals">Journal</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
            <a href="/cert">
          <div className='start'>
            <div  className='button'>GET CERTIFICATE</div>
          </div>
            </a>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
        <img style={{float:'right', width:'160px', borderRadius:'100px', paddingTop:"2px"}} src="logo.jpeg" alt="" />
      </header>


    </>
  )
}

export default Header
