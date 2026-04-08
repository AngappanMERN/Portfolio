import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Lottie from "lottie-react";
import contactAnimation from "../animations/Contact.json";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      toast.warn("Please fill in all fields! ⚠️");
      return;
    }

    const toastId = toast.loading("Sending message...");

    emailjs.sendForm('service_ttz7nfs', 'template_bfkvpx8', form.current, '0-BKXKDengVisfaww')
      .then((result) => {
        toast.update(toastId, { render: "Message Sent Successfully! 🚀", type: "success", isLoading: false, autoClose: 3000 });
        form.current.reset();
      }, (error) => {
        toast.update(toastId, { render: "Failed to send message. ❌", type: "error", isLoading: false, autoClose: 3000 });
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="container py-5">

      <h2 className="text-center fw-bold mb-5 text-light" data-aos="fade-down">Contact Me</h2>

      <div className="row justify-content-center align-items-center">

        <div className="col-md-5 mb-4" data-aos="fade-right" style={{ marginTop: '40px' }}>

          <h3 className="fw-bold text-primary mb-3">Get in Touch</h3>
          <p className="text-light opacity-75 mb-4">
            I am available for freelance work or full-time opportunities.
            Connect with me via email or social media.
          </p>


          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=angappan83000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            style={{ position: 'relative', zIndex: 100, cursor: 'pointer' }}
          >
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope-fill fs-4 text-primary me-3"></i>
              <span className="text-light">angappan83000@gmail.com</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/angappan-a-5655a9361" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-linkedin fs-4 text-primary me-3"></i>
              <span className="text-light">LinkedIn Profile</span>
            </div>
          </a>

          <a href="https://github.com/AngappanMERN" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <div className="d-flex align-items-center mb-4">
              <i className="bi bi-github fs-4 text-primary me-3"></i>
              <span className="text-light">GitHub Profile</span>
            </div>
          </a>

          <div className="mt-5" style={{ marginLeft: '-180px' }}>
            <Lottie
              animationData={contactAnimation}
              loop={true}
              className="img-fluid"
              style={{ height: '300px', width: '100%' }}
            />
          </div>

        </div>

        <div className="col-md-6" data-aos="fade-left" style={{ marginTop: '-50px' }}>
          <form ref={form} onSubmit={sendEmail} className="p-4 shadow rounded border border-secondary" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)' }}>
            <div className="mb-3">
              <label className="form-label fw-bold text-light">Name</label>
              <input type="text" name="user_name" className="form-control text-light bg-transparent" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-light">Email</label>
              <input type="email" name="user_email" className="form-control text-light bg-transparent" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-light">Message</label>
              <textarea name="message" className="form-control text-light bg-transparent" rows="9" placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold shadow-sm">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;