import React from 'react'
import logo from '../images/logoDark1.svg'

import {IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoPinterest} from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='container-fluid section-container-footer'>
      <div className='row section-footer'>
        <div className='col-12'>
          <img src={logo} alt="logo" />
        </div>
        <div className='col-12 section-menu-footer '>
          <a href='#'>About</a>
          <a href='#'>Service</a>
          <a href='#'>Projects</a>
         </div>
         <div className='col-12 section-icons-footer'>
          <a href='#'>  <IoLogoFacebook/> </a>
          <a href='#'><IoLogoInstagram/> </a>
          <a href='#'> <IoLogoTwitter/></a>
          <a href='#'><IoLogoPinterest/></a>

         </div>
      </div>

    </footer>
  )
}

export default Footer