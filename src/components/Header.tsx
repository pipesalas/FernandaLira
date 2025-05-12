import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerClass = isScrolled
    ? 'bg-white shadow-sm py-3 transition-all duration-300'
    : 'bg-transparent py-5 transition-all duration-300';

  const linkClass = (path: string) =>
    `text-slate-700 hover:text-blue-500 transition-colors duration-300 ${
      location.pathname === path ? 'font-medium text-blue-600' : ''
    }`;

  return (
    <header className={`fixed w-full top-0 z-10 ${headerClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-playfair font-bold text-slate-800 tracking-tight"
          >
            Fernanda Lira
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass('/')}>
              Inicio
            </Link>
            <Link to="/about" className={linkClass('/about')}>
              Sobre mí
            </Link>
            <Link to="/services" className={linkClass('/services')}>
              Servicios
            </Link>
            <Link to="/blog" className={linkClass('/blog')}>
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-md transition-colors duration-300"
            >
              Contáctame
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={linkClass('/')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={linkClass('/about')}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={linkClass('/services')}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link to="/blog" className={linkClass('/blog')}>
                Blog
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-md transition-colors duration-300 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;