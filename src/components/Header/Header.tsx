import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
      if (window.innerWidth >= 576) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="app-header">
      <h1>Mary Cabrales</h1>
      <nav>
        {isMobile && (
          <div className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <ul className={menuOpen ? 'show' : ''}>
          <li><a href="/" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="/about" onClick={() => setMenuOpen(false)}>Acerca de</a></li>
          <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;