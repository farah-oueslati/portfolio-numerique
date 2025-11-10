import React from 'react';
import farahPhoto from '../assets/photo.jpg';
import './Hero.css'; // ✅ très important

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Farah Oueslati</h1><br></br>
          <h2>Étudiante en Informatique  💻</h2>
          <p>
            Étudiante en 3ᵉ année à l’ISITCOM Sousse, passionnée par le développement web et l’intelligence artificielle.
            Je recherche un stage PFE pour créer une application web innovante intégrant des fonctionnalités d’IA.
          </p>
          <a href="#projects" className="btn">Voir mes projets</a>
        </div>

        <div className="hero-image">
          <img src={farahPhoto} alt="Farah Oueslati" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
