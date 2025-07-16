import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Route_Fever_-_Logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Helper to scroll to section after navigation
  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to ensure DOM is ready
  };

  // Handles navigation and scrolling
  const handleNav = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => scrollToSection(sectionId), 300);
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
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
            onClick={() => handleNav('home')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium transition-colors`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium transition-colors`}
          >
            ABOUT US
          </button>
          <button
            onClick={() => handleNav('services')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium transition-colors`}
          >
            OUR SERVICES
          </button>
          <button
            onClick={() => handleNav('destinations')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium transition-colors`}
          >
            DESTINATIONS
          </button>
          <button
            onClick={() => handleNav('reviews')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium transition-colors`}
          >
            REVIEWS
          </button>
          <Link
            to="/blog"
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            BLOG
          </Link>
          <button
            onClick={() => handleNav('contact')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium transition-colors`}
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
        <div className={`md:hidden ${scrolled ? 'bg-white' : 'bg-black bg-opacity-80'} shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4`}>
          <button
            onClick={() => handleNav('home')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium py-2 transition-colors`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium py-2 transition-colors`}
          >
            ABOUT US
          </button>
          <button
            onClick={() => handleNav('services')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium py-2 transition-colors`}
          >
            OUR SERVICES
          </button>
          <button
            onClick={() => handleNav('destinations')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium py-2 transition-colors`}
          >
            DESTINATIONS
          </button>
          <button
            onClick={() => handleNav('reviews')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium py-2 transition-colors`}
          >
            REVIEWS
          </button>
          <Link
            to="/blog"
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium py-2 transition-colors text-center w-full`}
            onClick={() => setIsOpen(false)}
          >
            BLOG
          </Link>
          <button
            onClick={() => handleNav('contact')}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-500 font-medium py-2 transition-colors`}
          >
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;