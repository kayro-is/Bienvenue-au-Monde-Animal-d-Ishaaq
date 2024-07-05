// src/components/Footer.jsx
import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 Monde Animal d'Ishaaq. Tous droits réservés.</p>
                <div className="footer-links">
                    <a href="#contact">Contactez-nous</a>
                    <a href="#terms">Termes et conditions</a>
                    <a href="#privacy">Politique de confidentialité</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
