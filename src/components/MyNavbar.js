import React from 'react';

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="/">Angappan A</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><a className="nav-link text-light" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#journey">My Journey</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#contact">Contact</a></li>
            <li className="nav-item ms-2">
              <a href="#contact" className="btn btn-primary btn-sm rounded-pill px-3">Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;