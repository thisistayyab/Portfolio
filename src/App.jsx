import React from 'react'
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeCustomization from './themes';
import { motion } from 'framer-motion';
// Diverse tech icons from Simple Icons CDN
const techIcons = [
  { src: 'https://cdn.simpleicons.org/cplusplus/00599C', top: '15%', left: '20%', duration: 9 },
  { src: 'https://cdn.simpleicons.org/csswizardry/00599C', top: '19%', left: '30%', duration: 9 },
  { src: 'https://cdn.simpleicons.org/html5/E34F26', top: '30%', left: '60%', duration: 11 },
  { src: 'https://cdn.simpleicons.org/tailwindcss/1572B6', top: '70%', left: '25%', duration: 10 },
  { src: 'https://cdn.simpleicons.org/javascript/F7DF1E', top: '50%', left: '40%', duration: 8 },
  { src: 'https://cdn.simpleicons.org/bootstrap/7952B3', top: '15%', left: '75%', duration: 9 },
  { src: 'https://cdn.simpleicons.org/mongodb/47A248', top: '80%', left: '60%', duration: 12 },
  { src: 'https://cdn.simpleicons.org/express/FF6F00', top: '35%', left: '10%', duration: 10 },
  { src: 'https://cdn.simpleicons.org/python/3776AB', top: '65%', left: '80%', duration: 11 },
  { src: 'https://cdn.simpleicons.org/scikitlearn/F7931E', top: '20%', left: '50%', duration: 10 },
  { src: 'https://cdn.simpleicons.org/tensorflow/FF6F00', top: '80%', left: '30%', duration: 12 },
  { src: 'https://cdn.simpleicons.org/pytorch/EE4C2C', top: '40%', left: '80%', duration: 10 },
  { src: 'https://cdn.simpleicons.org/react/61DAFB', top: '60%', left: '10%', duration: 11 },
  { src: 'https://cdn.simpleicons.org/robotframework/00C0B5', top: '75%', left: '50%', duration: 13 }, // AI/robot
  { src: 'https://cdn.simpleicons.org/kalilinux/FFFFFF', top: '55%', left: '55%', duration: 13 }, 
];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(() => window.innerWidth >= 768);
  React.useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isDesktop;
}

function App() {
  const isDesktop = useIsDesktop();
  return (
    <ThemeCustomization>
      {/* Global Animated Background: Blurred Circles and Tech Icons */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: 200,
          height: 200,
          background: '#ee9821',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.3,
          zIndex: 1,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: 250,
          height: 250,
          background: '#f8f208',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.2,
          zIndex: 1,
        }} />
        {/* Tech Icons: animated on desktop, still on mobile */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
          {isDesktop
            ? techIcons.map((item, i) => (
                <motion.img
                  key={i}
                  src={item.src}
                  alt="tech icon"
                  style={{ position: 'absolute', width: 40, height: 40, top: item.top, left: item.left, opacity: 0.18 }}
                  initial={{ y: -20, x: 0 }}
                  animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
                  transition={{ duration: item.duration, repeat: Infinity }}
                />
              ))
            : techIcons.map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt="tech icon"
                  style={{ position: 'absolute', width: 40, height: 40, top: item.top, left: item.left, opacity: 0.18 }}
                />
              ))}
        </div>
      </div>
      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        <Header />
        <About />
        <Banner />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeCustomization>
  )
}

export default App
