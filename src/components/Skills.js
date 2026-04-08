import React from 'react';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import skillsAnimation from "../animations/Skills.json";

import { VscVscode } from "react-icons/vsc";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiPostman, SiTailwindcss, SiExpress, SiMongodb, SiVercel } from "react-icons/si";

const Skills = () => {

  const categories = [
    {
      title: "Frontend Development",
      color: "#00d2ff",
      skills: [
        { name: "React JS", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> }, // ✅ FIXED
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ]
    },
    {
      title: "Backend Development",
      color: "#00ff88",
      skills: [
        { name: "Node JS", icon: <FaNodeJs /> },
        { name: "Express JS", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "REST API", icon: <SiPostman /> }, // better fit
      ]
    },
    {
      title: "Tools & Platforms",
      color: "#ff0055",
      skills: [
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "vercel", icon: <SiVercel /> },
      ]
    }
  ];

  return (
    <section id="skills" className="container py-5" style={{ minHeight: '100vh' }}>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <h2 className="fw-bold text-light m-0 display-5">Technical Proficiency</h2>
        <div style={{ width: '80px', marginLeft: '15px' }}>
          <Lottie animationData={skillsAnimation} loop={true} />
        </div>
      </div>

      <div className="row justify-content-center">
        {categories.map((cat, index) => (
          <div key={index} className="col-lg-10 mb-5">

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-4 position-relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '5px', height: '100%', background: cat.color }}></div>

              <div className="row align-items-center">

                <div className="col-md-4 mb-3 mb-md-0 border-end border-secondary">
                  <h3 className="fw-bold m-0" style={{ color: cat.color }}>{cat.title}</h3>
                  <p className="text-light opacity-50 m-0"><small>My core competency</small></p>
                </div>

                <div className="col-md-8">
                  <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-md-start px-md-4">
                    {cat.skills.map((skill, i) => (
                      <div key={i} className="text-center">

                        <motion.div
                          whileHover={{ y: -5, color: cat.color }}
                          className="d-flex align-items-center justify-content-center rounded-circle mb-2"
                          style={{
                            width: '60px',
                            height: '60px',
                            background: 'rgba(0,0,0,0.3)',
                            fontSize: '1.8rem',
                            color: '#fff',
                            transition: '0.3s'
                          }}
                        >
                          {skill.icon}
                        </motion.div>

                        <small className="text-light opacity-75">{skill.name}</small>

                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;