import React, { useState } from "react"
import './header.css';

const Head = () => {
  const [toggle, setToggle] = useState(false)




  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>

            <h1>Department Of Research and Publication</h1>
            <span>ONLINE EDUCATION </span>
          </div>
          <div  className='toggle_comntainner' style={{ width: '100px', height: '100px', borderRadius: "0 0 10% 10%" }} onClick={() => setToggle(!toggle)}>
            <img className="toggle" src="tg1.png" />
          </div>
        </div>

        {toggle && (
          <ul className="mobile">
            <li>
              <a href='/'>Home</a>
            </li>
            <hr />
            <li>
              <a href="/courses">All Courses</a>
            </li>
            <hr />
            <li>
              <a href="/about">About</a>
            </li>
            <hr />
            <li>
              <a href="/team">Team</a>
            </li>
            <hr />
            <li>
              <a href="/journals"> Journals</a>
            </li>
            <hr />
            {/* <li>
              <a href="/pricing"> Pricing</a>
            </li>
            <hr /> */}
            <li>
              <a href="/allbooks">AllbooK</a>
            </li>
            <hr />
            <li>
              <a href="/contact" >Contact</a>
            </li>
          </ul>
        )}
      </section>
    </>
  )
}

export default Head
