import React from 'react';
import './Experience.scss';

interface ExperienceItem {
  position: string;
  company: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experienceItems: ExperienceItem[] = [
    {
      position: "Profesora de Inglés",
      company: "Academia de Idiomas Internacional",
      period: "2019 - Presente",
      description: [
        "Enseñanza de inglés a estudiantes de diversos niveles y edades.",
        "Desarrollo de planes de estudio personalizados según las necesidades de cada alumno.",
        "Evaluación regular del progreso de los estudiantes."
      ]
    },
    {
      position: "Nanny Profesional",
      company: "Servicios de Cuidado Infantil Elite",
      period: "2020 - Presente",
      description: [
        "Cuidado integral de niños entre 1-10 años.",
        "Implementación de actividades educativas y recreativas.",
        "Asistencia en tareas escolares y refuerzo en idioma inglés."
      ]
    },
    {
      position: "Tutora de Español",
      company: "Centro de Idiomas Global",
      period: "2018 - 2020",
      description: [
        "Enseñanza de español como lengua extranjera a estudiantes internacionales.",
        "Preparación de material didáctico personalizado.",
        "Organización de actividades culturales para inmersión lingüística."
      ]
    }
  ];

  return (
    <section className="experience-section">
      <h3>Experiencia Laboral</h3>
      <div className="experience-items">
        {experienceItems.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h4>{item.position}</h4>
              <span className="experience-period">{item.period}</span>
            </div>
            <div className="experience-company">{item.company}</div>
            <ul className="experience-description">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
