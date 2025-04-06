import React from 'react';
import './About.scss';
import Education from './Education';
import Hobbies from './Hobbies';
import Experience from './Experience';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>Acerca de Mí</h2>
        <p className="about-intro">
          Soy Mary Cabrales, profesional apasionada por la educación y el desarrollo personal.
          Me dedico a enseñar idiomas y brindar servicios de cuidado infantil de alta calidad, 
          combinando mi formación académica con mi experiencia y entusiasmo.
        </p>
      </div>
      
      <div className="about-content">
        <Education />
        <Experience />
        <Hobbies />
      </div>
    </div>
  );
};

export default About;
