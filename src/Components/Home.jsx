import React from 'react';
import '../styles/Home.css';
import banner from '../assets/fondo-grande-nails.webp';
import unasImg from '../assets/card-unas.jpg';
import pestanasImg from '../assets/card-lashes.jpg';
import citaImg from '../assets/card-Citas.jpg';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-banner">
        <img src={banner} alt="Colección de primavera" />
        <div className="overlay"></div>
        <div className="home-text">
          <h1>Bienvenida a <span>Nails & Lashes</span></h1>
          <p>Diseña tu estilo con nuestras especialistas</p>
        </div>
      </div>

      {/* 🔥 Tarjetas */}
      <div className="card-section">
        <div className="card">
          <img src={pestanasImg} alt="Pestañas" />
          <h3>Pestañas</h3>
        </div>
        <div className="card">
          <img src={unasImg} alt="Uñas" />
          <h3>Uñas</h3>
        </div>
        <div className="card">
          <img src={citaImg} alt="Agenda tu cita" />
          <h3>¡Agenda tu cita!</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;

