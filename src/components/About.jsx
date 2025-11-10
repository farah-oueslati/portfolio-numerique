import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>À propos de moi</h2>
      <p>
        Étudiante en 3ᵉ année de licence en Science de l’Informatique à l’ISITCOM Sousse,
        passionnée par le développement web, l’intelligence artificielle et les nouvelles technologies.
        Sérieuse, motivée et curieuse, j’aime apprendre à travers la pratique et relever de nouveaux défis.
      </p>
      <p>
        Mon objectif est de concevoir des applications web performantes, intuitives et modernes,
        tout en renforçant mes compétences en développement logiciel et bases de données.
      </p>

      <h3>Compétences comportementales</h3>
      <ul className="soft-skills">
        <li>Rigoureuse & autonome</li>
        <li>Curieuse & motivée</li>
        <li>Travail en équipe & leadership</li>
        <li>Créativité & résolution de problèmes</li>
      </ul>
    </section>
  );
};

export default About;
