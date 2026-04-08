import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 text-center text-light" style={{ background: 'rgba(0, 0, 0, 0.8)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container">

        <h5 className="fw-bold mb-3" style={{ color: '#00d2ff', letterSpacing: '2px' }}>Angappan A</h5>

        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="https://github.com/Angappan4783" target="_blank" rel="noopener noreferrer" className="text-light fs-4 hover-effect">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN_ID" target="_blank" rel="noopener noreferrer" className="text-light fs-4 hover-effect">
            <FaLinkedin />
          </a>
          <a href="mailto:angappan83000@gmail.com" className="text-light fs-4 hover-effect">
            <FaEnvelope />
          </a>
        </div>

        <p className="mb-0 opacity-50 small">
          &copy; {new Date().getFullYear()} Designed & Built by <span className="text-primary">Angappan A</span>.
        </p>

      </div>
    </footer>
  );
};

export default Footer;