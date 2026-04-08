import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Tools
import AnimatedCursor from "react-animated-cursor";
import { motion, useScroll } from "framer-motion";
import Lottie from "lottie-react";
import loaderAnimation from "./animations/loading.json"; // 1. Loader JSON Import
import { Typewriter } from 'react-simple-typewriter';

// Components
import MyNavbar from './components/MyNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Journey from './components/Journey';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setTimeout(() => setLoading(false), 4800);
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100"
        style={{ background: '#000000' }}>

        <div style={{ width: '250px' }}>
          <Lottie animationData={loaderAnimation} loop={true} />
        </div>

        <h4 className="mt-4 fw-bold text-center" style={{ color: '#00d2ff', fontFamily: 'monospace', fontSize: '1.5rem' }}>
          <span>&gt; </span>
          <Typewriter
            words={['INITIALIZING...', 'WELCOME TO ANGAPPAN\'S WORLD...']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h4>

      </div>
    );
  }

  return (
    <div className="App">

      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "#00d2ff",
          boxShadow: "0 0 10px #00d2ff",
          transformOrigin: "0%",
          zIndex: 9999
        }}
      />

      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color='0, 210, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={['a', 'input', 'button', '.link']}
      />

      <ParticlesBackground />

      <MyNavbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4 shadow-lg"
        style={{ zIndex: 1000, width: '50px', height: '50px' }}
      >
        <i className="bi bi-arrow-up text-white fs-4"></i>
      </button>
    </div>
  );
}

export default App;