import React, { useState } from 'react';
import './Main.scss';

const Main: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="app-main">
      <h2>Bienvenido a Mi Aplicación</h2>
      <p>Este es un proyecto creado con React, TypeScript y Vite.</p>
      
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