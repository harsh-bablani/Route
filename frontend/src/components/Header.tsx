import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Route_Fever_-_Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="RouteFever Logo"
              className="h-16 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-800 hover:text-amber-500 font-medium transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-800 hover:text-amber-500 font-medium transition-colors"
          >
            ABOUT US
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-800 hover:text-amber-500 font-medium transition-colors"
          >
            OUR SERVICES
          </button>
          <button
            onClick={() => scrollToSection('destinations')}
            className="text-gray-800 hover:text-amber-500 font-medium transition-colors"
          >
            DESTINATIONS
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="text-gray-800 hover:text-amber-500 font-medium transition-colors"
          >
            REVIEWS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-800 hover:text-amber-500 font-medium transition-colors"
          >
            CONTACT US
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-800 hover:text-amber-500 font-medium py-2 transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-800 hover:text-amber-500 font-medium py-2 transition-colors"
          >
            ABOUT US
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-800 hover:text-amber-500 font-medium py-2 transition-colors"
          >
            OUR SERVICES
          </button>
          <button
            onClick={() => scrollToSection('destinations')}
            className="text-gray-800 hover:text-amber-500 font-medium py-2 transition-colors"
          >
            DESTINATIONS
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="text-gray-800 hover:text-amber-500 font-medium py-2 transition-colors"
          >
            REVIEWS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-800 hover:text-amber-500 font-medium py-2 transition-colors"
          >
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;