import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <h1>Mary Nanny</h1>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;