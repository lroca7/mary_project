import React from 'react';
import './Services.scss';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Clases de Inglés/Español',
      description: 'Aprende un nuevo idioma con clases personalizadas.',
      buttonText: 'Más información'
    },
    {
      title: 'Nanny Service',
      description: 'Servicio de cuidado infantil profesional y de confianza.',
      buttonText: 'Más información'
    }
  ];

  return (
    <section className="services-section">
      <h2>Servicios</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;