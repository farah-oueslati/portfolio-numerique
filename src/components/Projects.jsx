import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Application Web de Gestion de Tâches",
    desc: "Développement d’une application interactive pour organiser, filtrer et gérer des tâches.",
    tech: "ReactJS, Laravel, MySQL, API REST",
    github: "https://github.com/farah-oueslati/D-veloppement-d-une-application-de-gestion-de-t-ches",
  },
  {
    title: "Application Web de Transport par Bus",
    desc: "Application en équipe pour consulter horaires et trajets de bus.",
    tech: "HTML, CSS, JavaScript, PHP, SQL",
    github: "#",
  },
  {
    title: "Portfolio Personnel",
    desc: "Site web personnel réalisé avec React pour présenter mon parcours et mes compétences.",
    tech: "ReactJS, CSS, JS",
    github: "https://github.com/farah-oueslati/portfolio-numerique",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <p><strong>Technologies :</strong> {proj.tech}</p>
            <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-small">Voir sur GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
