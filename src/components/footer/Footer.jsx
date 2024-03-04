import React from 'react'
import './Footer.css'

import { BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <footer id='footer'>
        <a className="footer-logo" href="">Rafael Soeiro</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Tech Stack</a></li>
        <li><a href="#service">Skill's</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        {/* <li><a href="#testmonials">Depoimentos</a></li> */}
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/rafael-soeiro/"> <ImLinkedin/></a>
        <a href="https://github.com/rafaelsoeiro"><BsGithub/></a>
        <a href="https://wa.me/5598984883851"><ImWhatsapp/></a>
      </div>
      <div className="footer-copy">
        <small>&copy; Rafael Soeiro</small>
      </div>
    </footer>
  )
}

export default Footer
