import React, { useEffect } from "react";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import './hero/Hero.css'
import Hprice from "./Hprice";
import AboutCard from "../about/AboutCard";
import Testimonal from "./testimonal/Testimonal";
import Heading from "../common/heading/Heading";






const Home = () => {

  const handleCoursesClick = (e) => {
    e.preventDefault();
    window.location.href = "/courses";
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    window.location.href = "/register";
  };



  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div  className='row'>
            <strong>
              <Heading subtitle='E-Research and Publication' title='Best Online Education Expertise' />
            </strong>
            <p>
              <strong className="desc" style={{ fontWeight: 'bolder' }}>
                The Department of Research and Publication is an innovative and flexible online platform dedicated to fostering research and facilitating scholarly publications globally.
              </strong>
            </p>
          </div>
        </div>
      </section>
      <div style={{ width: '100%', height: '95vh', display: 'flex', alignItems: "center", justifyContent: 'center' }} className="marginTop">

        <a
          href="/register"

          className="started"
          onClick={handleRegisterClick}
        >
          <span >
            GET STARTED
          </span>
        </a>

        <a

          href="/courses"
          style={{
            border: "1px solid",
            background: "transparent",
          
          }}
          className="started"
          onClick={handleCoursesClick}
        >
          <span >
            VIEW COURSES
          </span>
        </a>
      </div>

      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <br />
      <Hprice />
    </>
  )
}

export default Home
