import React from 'react';
import './Main.scss';
import SliderGallery from '../SliderGallery/SliderGallery';
import Services from '../Services/Services';

const Main: React.FC = () => {

  return (
    <main className="app-main">
          
      <SliderGallery interval={4000} />
      
      <Services />
      
    </main>
  );
};

export default Main;