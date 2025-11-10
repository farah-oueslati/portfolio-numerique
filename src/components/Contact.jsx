import React from 'react';
import './Contact.css';
import cvPdf from '../assets/CV.pdf';
import cvVideo from '../assets/cvvd.mp4';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>N’hésitez pas à me contacter pour toute opportunité de stage ou collaboration.</p>

      <ul>
        <li><strong>Email :</strong> <a href="mailto:Farahoueslati53@gmail.com">Farahoueslati53@gmail.com</a></li>
        <li><strong>Téléphone:</strong> 51 757 733</li>
        <li><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/farah-oueslati-49b26b33a" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><strong>GitHub :</strong> <a href="https://github.com/farah-oueslati" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>

      <h3>Mes CV</h3>
      <div className="cv-list">
        <a href={cvPdf} download>Télécharger le CV PDF</a>
        <video controls>
          <source src={cvVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
    </section>
  );
};

export default Contact;
