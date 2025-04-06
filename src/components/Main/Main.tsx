import React, { useState } from 'react';
import './Main.scss';
import SliderGallery from '../SliderGallery/SliderGallery';

const Main: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="app-main">
          
      <SliderGallery interval={4000} />
      
      <div className="counter-section">
        <p>Contador: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Incrementar
        </button>
      </div>
    </main>
  );
};

export default Main;