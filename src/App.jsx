import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<div className="page-placeholder">Página de citas</div>} />
        <Route path="/nails" element={<div className="page-placeholder">Galería de uñas</div>} />
        <Route path="/eyes" element={<div className="page-placeholder">Galería de pestañas</div>} />
        <Route path="/sobre-mi" element={<div className="page-placeholder">Sobre mí</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

