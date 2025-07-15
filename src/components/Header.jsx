import React, { useState } from 'react';
import { motion } from 'framer-motion';
import headerImg from '../assets/header.webp';
import logo from '../assets/favicon.png'
import { RiMailLine, RiGithubLine, RiLinkedinLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import LaserBeam from './LaserBeam';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((open) => !open);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Header Content */}
      <div className="header__socials">
        <a className="circle-icon" href="mailto:thisistayyab@outlook.com?subject=Let's%20Connect&body=Hi%20Tayyab,%0D%0A%0D%0A"><RiMailLine size={24} /></a>
        <a className="circle-icon" href="https://github.com/thisistayyab"><RiGithubLine size={24} /></a>
        <a className="circle-icon" href="https://www.linkedin.com/in/thisistayyab/"><RiLinkedinLine size={24} /></a>
      </div>
      <nav>
        <div className="nav__bar">
          <div className="nav__header">
            <div className="nav__logo">
              <img src={logo} alt="Tayyab MERN Stack Developer React Node.js Express MongoDB JavaScript" />
              <a href="#">Tayyab's Portfolio<span></span></a>
            </div>
            <div className="nav__menu__btn" id="menu-btn" onClick={handleMenuToggle}>
              <span>
                {menuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
              </span>
            </div>
          </div>
          <ul className={`nav__links${menuOpen ? ' open' : ''}`} id="nav-links" onClick={handleNavLinkClick}>
            <li className="link"><a href="#home">Home<span></span></a></li>
            <li className="link"><a href="#about">About<span></span></a></li>
            <li className="link"><a href="#project">Projects<span></span></a></li>
            <li className="link"><a href="#service">Services<span></span></a></li>
            <li className="link"><a href="#client">Clients<span></span></a></li>
            <li className="link"><a href="#blog">Blog<span></span></a></li>
            <li className="btn"><a href="#contact">Contact<span></span></a></li>
          </ul>
        </div>
      </nav>
      <div className="section__container header__container" id="home" style={{ position: 'relative', zIndex: 5 }}>
        <LaserBeam top="100%" left="13%" color="blue" duration="4.5s" />
        <div className="header__image">
          <img src={headerImg} alt="Tayyab MERN Stack Developer React Node.js Express MongoDB JavaScript" />
        </div>
        <div className="header__content" style={{ textAlign: 'center' }}>
          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            Crafting Digital Excellence
          </motion.h4>
          <motion.h1
            className='fire'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Hi, I’m Tayyab. Web Developer & DSA Enthusiast.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            I’m a passionate web developer and computer engineering student with 3+ years of hands-on experience in building full-stack applications. I specialize in creating clean, responsive UIs with React and robust backends using modern technologies.<br /><br />
            Beyond development, I've solved over 850+ LeetCode problems, strengthening my core in Data Structures and Algorithms — giving me an edge in building optimized, scalable solutions.
          </motion.p>
          <motion.button
            className="btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#contact">Hire Me Now</a>
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export default Header; 