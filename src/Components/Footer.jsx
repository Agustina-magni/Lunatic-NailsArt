import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Horarios */}
        <div className="footer-column">
          <h4>Horarios</h4>
          <p>Lunes a Viernes: 9:00 – 20:00</p>
          <p>Sábados: 9:00 – 14:00</p>
        </div>

        {/* Dirección */}
        <div className="footer-column">
          <h4>Dirección</h4>
          <p>Av. Belleza Natural 123</p>
          <p>Buenos Aires, Argentina</p>
        </div>

        {/* Contacto + redes */}
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>Email: <a href="mailto:nailslashes@gmail.com">nailslashes@gmail.com</a></p>
          <p>Tel: <a href="tel:+541112345678">+54 11 1234 5678</a></p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="footer-newsletter">
        <p>Suscribite para recibir novedades y promos exclusivas ✨</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Tu email" required />
          <button type="submit">Suscribirme</button>
        </form>
      </div>

      <hr />

      <p className="footer-copy">
        &copy; 2024 Nails & Lashes. Hecho con 💖 para realzar tu belleza.
      </p>
    </footer>
  );
};

export default Footer;



