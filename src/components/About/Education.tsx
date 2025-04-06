import React from 'react';
import './Education.scss';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Licenciatura en Idiomas",
      institution: "Universidad Nacional",
      period: "2015 - 2019",
      description: "Estudios en enseñanza de inglés y español como lenguas extranjeras con énfasis en metodologías de enseñanza moderna."
    },
    {
      degree: "Certificación en Enseñanza de Inglés como Lengua Extranjera",
      institution: "Cambridge Institute",
      period: "2020",
      description: "Certificación especializada en métodos pedagógicos para la enseñanza del idioma inglés a estudiantes de diversas edades."
    },
    {
      degree: "Diplomado en Desarrollo Infantil Temprano",
      institution: "Instituto de Educación Infantil",
      period: "2021",
      description: "Formación especializada en el cuidado y educación de niños en etapas tempranas de desarrollo."
    }
  ];

  return (
    <section className="education-section">
      <h3>Educación</h3>
      <div className="education-items">
        {educationItems.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h4>{item.degree}</h4>
              <span className="education-period">{item.period}</span>
            </div>
            <div className="education-institution">{item.institution}</div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
