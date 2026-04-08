import React from "react";
import Lottie from "lottie-react";
import rocketAnimation from "../animations/Rocket.json";

const About = () => {
  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2
            className="text-center fw-bold mb-5 text-light"
            data-aos="fade-up"
          >
            About Me
          </h2>

          <div className="row align-items-center">
            <div className="col-md-7" data-aos="fade-right">
              <h4 className="fw-bold text-primary">Who am I?</h4>
              <p className="lead text-light mt-3 text-justify">
                I am a passionate <strong>MERN Stack Developer</strong> based in
                Komarapalayam, Tamil Nadu. I hold a{" "}
                <strong>M.Sc in Computer Science</strong> from Periyar
                University.
              </p>

              <p className="text-light text-justify">
                I specialize in building modern, responsive, and scalable web
                applications using
                <strong> MongoDB, Express.js, React.js, and Node.js</strong>. My
                journey began with JavaScript, and I have continuously expanded
                my skill set to develop full-stack applications with real-world
                functionality.
              </p>

              <p className="text-light text-justify">
                I enjoy solving complex problems, optimizing performance, and
                creating user-friendly interfaces. I am highly interested in
                working with modern technologies like <strong>Next.js</strong>,
                API development, and secure authentication systems.
              </p>

              <p className="text-light text-justify">
                Currently, I am seeking an opportunity to start my professional
                career where I can contribute, learn, and grow as a software
                developer while building impactful digital products.
              </p>
            </div>

            <div
              className="col-md-5 mt-5 mt-md-0 position-relative"
              data-aos="fade-left"
            >
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  right: "30px",
                  width: "150px",
                  zIndex: 1,
                }}
              >
                <Lottie animationData={rocketAnimation} loop={true} />
              </div>

              <div className="card shadow border-0 p-4">
                <h4 className="fw-bold text-light mb-3">Education & Details</h4>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-mortarboard-fill text-primary fs-4 me-3"></i>
                    <div>
                      <strong className="text-light">
                        M.Sc in Computer Science
                      </strong>
                      <br />
                      <small className="text-light opacity-75">
                        Periyar University
                      </small>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill text-primary fs-4 me-3"></i>
                    <div>
                      <strong className="text-light">Location</strong>
                      <br />
                      <small className="text-light opacity-75">
                        Komarapalayam, Tamil Nadu
                      </small>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-translate text-primary fs-4 me-3"></i>
                    <div>
                      <strong className="text-light">Languages</strong>
                      <br />
                      <small className="text-light opacity-75">
                        Tamil, English, Kannada(basic)
                      </small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
