import React from 'react';
import { RiMailLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri';

function Footer() {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h5>Tayyab's Portfolio</h5>
          <p>
            Building digital experiences that are fast, beautiful, and user-focused. Let's connect and create something amazing together!
          </p>
          <div className="footer__socials">
            <a className="circle-icon" href="mailto:thisistayyab@outlook.com?subject=Let's%20Connect&body=Hi%20Tayyab,%0D%0A%0D%0A"><RiMailLine size={20} /></a>
            <a className="circle-icon" href="https://github.com/thisistayyab"><RiGithubLine size={20} /></a>
            <a className="circle-icon" href="https://www.linkedin.com/in/thisistayyab/"><RiLinkedinLine size={20} /></a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Links</h4>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
            <a href="#service">Services</a>
            <a href="#client">Clients</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <div className="footer__links">
            <a href="#">Website Design</a>
            <a href="#">E-commerce Solutions</a>
            <a href="#">DSA Mastery</a>
            <a href="#">Content Marketing</a>
            <a href="#">SEO</a>
            <a href="#">Digital Marketing</a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <div className="footer__links">
            <a href="mailto:thisistayyab@outlook.com">thisistayyab@outlook.com</a>
            <a href="#">Pakistan</a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        &copy; {new Date().getFullYear()} Tayyab's Portfolio. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 