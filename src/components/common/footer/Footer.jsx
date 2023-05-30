import "./footer.css"
import axios from "axios";
import React from "react"
import { Link } from "react-router-dom";
import { blog } from "../../../dummydata"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Department Of Research and Publication</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <SendOutlinedIcon style={{ width: '50px', height: "50px", marginLeft: '10px' }} />
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Department Of Research and Publication</h1>
            <span>ONLINE EDUCATION </span>

            <div style={{ display: "flex", justifyContent: 'space-around', paddingTop:'20px' }} className="social">

              <a href="https://wa.me/whatsappphonenumber">
                <span style={{ color: 'royalblue', fontSize: '30px', marginTop: '10px' }}>
                  <FaFacebook />
                </span>
              </a>

              <a href="https://wa.me/whatsappphonenumber">
                <span style={{ color: 'blue', fontSize: '30px', marginTop: '10px' }}>
                  <FaTwitter />
                </span>
              </a>


              <a href="https://wa.me/whatsappphonenumber">
                <span style={{ color: 'purple', fontSize: '30px', marginTop: '10px' }}>
                  <FaInstagram />
                </span>
              </a>

              <a href="https://wa.me/whatsappphonenumber">
                <span style={{ color: 'green', fontSize: '30px', marginTop: '10px' }} >
                  <FaWhatsapp />
                </span>
              </a>

              <a href="https://wa.me/whatsappphonenumber">
                <span style={{ color: 'red', fontSize: '30px', marginTop: '10px' }} >
                  < FaYoutube />
                </span>
              </a>

            </div>

          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <Link to='/about'>
                <li>About Us</li>
              </Link>
              <Link to='/course'>
                <li>Services</li>
              </Link>
              <Link to='/course'>
                <li>Courses</li>
              </Link>
              <Link to='/contact'>
                <li>Contact us</li>
              </Link>
            </ul>
          </div>
        
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
               
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3 className="quesion" >Have a Questions?</h3>
            <img className="footer_logo" src="logo.jpeg" />
            <ul>
              <li className="quesion" style={{ fontFamily: 'cursive' }}>

                Department of research and publication. International institute of Paris.
                26 Rue Castagnary, 75015 Paris France.
              </li>
              <li className="quesion" style={{ fontFamily: 'cursive' }}>
                <i className='fa fa-phone-alt'></i>
                +33758491949
              </li>
              <li className="quesion" style={{ fontFamily: 'cursive' }}>
                <i className='fa fa-paper-plane'></i>
                info@dept.research.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          copy2023 Department of research and publication.
        </p>
      </div>
    </>
  )
}

export default Footer
