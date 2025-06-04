import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import logo from '../assets/Route_Fever_-_Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="mb-8">
            <img src={logo} alt="RouteFever Logo" className="h-16 mb-4 object-contain" />
            <p className="text-gray-400 mb-4">
              Explore the world with RouteFever. We bring you unforgettable travel experiences 
              with personalized itineraries, luxury accommodations, and expert guides.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/RouteFever" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/routefever/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-amber-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 text-amber-500" />
                <a 
                  href="mailto:care@routefever.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  feverroute@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <a 
                  href="https://wa.me/919828022224" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp: +91 98280 22224
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 text-amber-500" />
                <a 
                  href="tel:+919828022224" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Call Us: +91 98280 22224
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} RouteFever. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
