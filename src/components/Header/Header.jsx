// src/components/Header/Header.jsx
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="../../image/logo.webp" alt="Logo" />
          <h1>Monde Animal d'Ishaaq</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
