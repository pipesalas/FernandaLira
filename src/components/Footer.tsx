import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4">
              Fernanda Lira
            </h3>
            <p className="text-slate-600 mb-6 max-w-md">
              Dedicada a ayudarte a encontrar claridad, fortaleza y equilibrio emocional
              a través de enfoques psicológicos basados en evidencia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/fernanda-lira-8538a6b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://www.doctoralia.cl/fernanda-lira/psicologo/valdivia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors duration-300"
                aria-label="Doctoralia"
              >
                {/* Doctoralia icon (using a stethoscope/medical cross style) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4">
              Información de contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-blue-600 mt-1 mr-3" />
                <span className="text-slate-600">+569 98250120</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-blue-600 mt-1 mr-3" />
                <span className="text-slate-600">fernandailirae@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-600 mt-1 mr-3" />
                <span className="text-slate-600">
                  Caupolicán 128, Valdivia
                </span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-blue-600 mt-1 mr-3" />
                <div className="text-slate-600">
                  <p>Lunes - Miércoles: 10:00 - 20:00</p>
                  <p>Martes - Jueves: 13:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Inicio
                </Link>
              </li>
              {/*
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Sobre mí
                </Link>
              </li>
              */}
              <li>
                <Link
                  to="/services"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Servicios
                </Link>
              </li>
              {/*
              <li>
                <Link
                  to="/blog"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              */}
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Fernanda Lira.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;