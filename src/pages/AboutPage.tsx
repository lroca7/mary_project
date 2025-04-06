import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

const AboutPage: React.FC = () => {
  // Usar variable de entorno para el número de WhatsApp
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER || "+573215050468";
  
  return (
    <div className="app-container">
      <Header />
      <About />
      <Footer />
      <WhatsAppButton phoneNumber={whatsappNumber} message="Hola ..." />
    </div>
  );
};

export default AboutPage;
