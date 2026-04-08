import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from "lottie-react";
import codingAnimation from "../animations/space_boy_developer.json";

const Hero = () => {
  return (
    <section id="home" className="container py-5 mt-5">
      <div className="row align-items-center">
        <div className="col-md-6" data-aos="fade-right">

          <h4 className="text-light">Hello, I'm</h4>

          <h1 className="display-3 fw-bold">
            <span className="text-primary">Angappan A</span>
          </h1>

          <h3 className="mb-4 text-light">
            I am a{' '}
            <span style={{ color: '#00d2ff', fontWeight: 'bold' }}>
              <Typewriter
                words={[
                  'MERN Stack Developer',
                  'Full Stack Engineer',
                  'REST API & Authentication Expert',
                  'Database Design Specialist',
                  'Problem Solver & Clean Code Advocate'
                ]}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>

          <p className="text-light opacity-50 mt-4 lead" style={{ maxWidth: '600px' }}>
            Result-oriented MERN Stack Developer based in Komarapalayam. I architect secure, scalable, and high-performance web applications using MongoDB, Express.js, React, and Node.js.
          </p>

          <div className="mt-4">
            <a href="#contact" className="btn btn-primary btn-lg me-3 shadow">Hire Me</a>
            <a href="Angappan CV.pdf" download="Angappan CV.pdf" className="btn btn-outline-light btn-lg shadow"> Download Resume <i className="bi bi-download ms-2"></i></a>
          </div>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="fade-left">
          <Lottie
            animationData={codingAnimation}
            loop={true}
            className="img-fluid"
            style={{ height: '400px', background: 'transparent' }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;