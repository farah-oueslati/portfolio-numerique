import React from 'react';
import './Skills.css';
import { 
  FaReact, 
  FaJava, 
  FaPython, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt, 
  FaPhp, 
  FaJs 
} from 'react-icons/fa';
import { SiAngular, SiLaravel, SiSpring } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>
      <div className="skills-list">
        <div className="skill-item"><FaReact size={40} color="#61dafb" /> React JS</div>
        <div className="skill-item"><SiAngular size={40} color="#dd0031" /> Angular</div>
        <div className="skill-item"><FaJava size={40} color="#f89820" /> Java</div>
        <div className="skill-item"><SiSpring size={40} color="#6db33f" /> Spring Boot</div>
        <div className="skill-item"><FaJava size={40} color="#f89820" /> J2EE</div>
        <div className="skill-item"><FaPython size={40} color="#306998" /> Python / IA & Data</div>
        <div className="skill-item"><FaDatabase size={40} color="#f29111" /> MySQL / SQL</div>
        <div className="skill-item"><FaHtml5 size={40} color="#e34f26" /> HTML</div>
        <div className="skill-item"><FaCss3Alt size={40} color="#1572b6" /> CSS</div>
        <div className="skill-item"><FaJs size={40} color="#f7df1e" /> JavaScript</div>
        <div className="skill-item"><FaPhp size={40} color="#777bb4" /> PHP</div>
        <div className="skill-item"><SiLaravel size={40} color="#ff2d20" /> Laravel</div>
      </div>
    </section>
  );
};

export default Skills;
