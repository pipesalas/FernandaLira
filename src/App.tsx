import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AnsiedadDiaADia from './blog/ansiedad-dia-a-dia';
import DiversidadLGTBQI from './blog/diversidad-lgtbqi';
import ColoresEstadosMentales from './blog/colores-estados-mentales';

import ElPoderDelAhora from './recommendations/el-poder-del-ahora';
import UnaTeoriaGeneralDelAmor from './recommendations/una-teoria-general-del-amor';
import ScrollToTop from './components/ScrollToTop';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog/ansiedad-dia-a-dia" element={<AnsiedadDiaADia />} />
            <Route path="/blog/diversidad-lgtbqi" element={<DiversidadLGTBQI />} />
            <Route path="/blog/colores-estados-mentales" element={<ColoresEstadosMentales />} />
            <Route path="/recommendations/el-poder-del-ahora" element={<ElPoderDelAhora />} />
            <Route path="/recommendations/una-teoria-general-del-amor" element={<UnaTeoriaGeneralDelAmor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;