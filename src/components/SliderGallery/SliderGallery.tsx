import React, { useState, useEffect } from 'react';
import './SliderGallery.scss';

// Importamos todas las imágenes de la carpeta slider
// Esta técnica permite importar dinámicamente las imágenes
const importAllImages = () => {
  const context = import.meta.glob('/src/assets/slider/*.{jpg,jpeg,png,gif,webp}', { eager: true });
  const images = Object.values(context).map((module: any) => module.default);
  return images;
};

interface SliderGalleryProps {
  interval?: number; // Intervalo de cambio de imagen en ms (opcional)
}

const SliderGallery: React.FC<SliderGalleryProps> = ({ interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    // Cargar las imágenes cuando el componente se monte
    setImages(importAllImages());
  }, []);

  // Efecto para cambiar automáticamente las imágenes
  useEffect(() => {
    if (images.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearInterval(timer);
  }, [interval, images.length]);

  // Función para cambiar manualmente a una diapositiva
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (images.length === 0) {
    return <div className="slider-gallery loading">Cargando imágenes...</div>;
  }

  return (
    <div className="slider-gallery">
      <div className="slider-container">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      <div className="slider-indicators">
        {images.map((_, index) => (
          <button 
            key={index} 
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderGallery;