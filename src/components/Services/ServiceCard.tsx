import React from 'react';
import './ServiceCard.scss';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="service-btn">{buttonText}</button>
    </div>
  );
};

export default ServiceCard;