import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import robotAnimation from "../animations/Project.json";

const Projects = () => {
  return (
    <section id="projects" className="container-fluid px-4 px-md-5 py-5">

      <div className="d-flex justify-content-center align-items-center mb-5" data-aos="fade-down">
        <h2 className="fw-bold text-light m-0">My Projects</h2>
        <div style={{ width: '70px', marginLeft: '15px' }}>
          <Lottie animationData={robotAnimation} loop={true} />
        </div>
      </div>

      <div className="row justify-content-center mx-auto" style={{ maxWidth: '1400px' }}>

        {/* 3. col-12 சேர்க்கப்பட்டுள்ளது (மொபைல் டிஸ்ப்ளேக்காக) */}
        {/* 1 project */}
        <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
          <Tilt perspective={1000} scale={1.05} transitionSpeed={1000} className="h-100">
            <div className="card shadow-lg border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)' }}>
              <img src="/VantaraImg.png" className="card-img-top" alt="Vantaraniwas" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-light">Vantaraniwas</h5>
                <p className="card-text text-light opacity-75 small">
                  A modern and responsive web application designed to showcase elegant architecture and living spaces. Built with a focus on clean UI and smooth user experience, it highlights property details, visual galleries, and intuitive navigation for seamless exploration.
                </p>
                <div className="mb-4">
                  <span className="badge bg-primary me-1">Next.js</span>
                  <span className="badge bg-success me-1">Tailwind CSS</span>
                  <span className="badge bg-info me-1">Bootstrap</span>
                </div>
                <div className="d-flex gap-2 mt-auto">
                  <a href="https://vantaraniwas.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm w-50">Live Demo</a>
                  <a href="https://github.com/Angappan4783/vantaraniwas" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm w-50">GitHub Code</a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>



        {/* 2 project */}
        <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <Tilt perspective={1000} scale={1.05} transitionSpeed={1000} className="h-100">
            <div
              className="card shadow-lg border-0 h-100"
              style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)' }}
            >
              <img src="/sksalonvercel-app.png" className="card-img-top" alt="sksalon-app" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-light">
                  SK Salon Appointment System
                </h5>
                <p className="card-text text-light opacity-75 small">
                  A salon website to book appointments and manage services. Built using
                  <strong> React.js</strong>, <strong> Node.js</strong>,
                  <strong> MongoDB Atlas</strong>, and <strong> Tailwind CSS</strong>
                  for a smooth and responsive user experience.
                </p>
                <div className="mb-4">
                  <span className="badge bg-primary me-1">React.js</span>
                  <span className="badge bg-warning text-dark me-1">Tailwind CSS</span>
                  <span className="badge bg-success me-1">Node.js</span>
                  <span className="badge bg-dark border border-light me-1">MongoDB Atlas</span>
                </div>
                <div className="d-flex gap-2 mt-auto">
                  <a
                    href="https://sksalone.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm w-50"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/AngappanMERN/Sk_Salon "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm w-50"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>


        {/* 3 project */}
        <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <Tilt perspective={1000} scale={1.05} transitionSpeed={1000} className="h-100">
            <div
              className="card shadow-lg border-0 h-100"
              style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)' }}
            >
              {/* Image */}
              <img
                src="/leave.png"   // 👉 change this image
                className="card-img-top"
                alt="Leave Management App"
                style={{ height: '220px', objectFit: 'cover' }}
              />

              <div className="card-body d-flex flex-column">
                {/* Title */}
                <h5 className="card-title fw-bold text-light">
                  Leave Monitoring App
                </h5>

                {/* Description */}
                <p className="card-text text-light opacity-75 small">
                  A MERN stack based leave management system where employees can apply for leave and extra work,
                  and admins can approve, track, and manage requests with real-time dashboards.
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <span className="badge bg-info text-dark me-1">React.js</span>
                  <span className="badge bg-success me-1">Node.js</span>
                  <span className="badge bg-warning text-dark me-1">MongoDB Atlas</span>
                  <span className="badge bg-light text-dark me-1">Bootstrap</span>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2 mt-auto">
                  <a
                    href="https://leave-monitoring-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm w-50"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/AngappanMERN/Leave-Monitoring-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm w-50"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Projects;