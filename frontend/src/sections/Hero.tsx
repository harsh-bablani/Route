import { useEffect, useState } from 'react';

// Import local images from the assets fol
import heroParadise from '../assets/Hero paradise.jpeg';
import heroAdventure from '../assets/Hero adventure.jpeg';
import heroTravel from '../assets/Hero Travel.jpeg';
import whatsapp3d from '../assets/WhatsApp.svg.webp';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroParadise,
      title: "Explore Paradise",
      subtitle: "Discover breathtaking beaches and coastal wonders"
    },
    {
      image: heroAdventure,
      title: "Adventure Awaits",
      subtitle: "Experience thrilling moments in nature's playground"
    },
    {
      image: heroTravel,
      title: "Luxury Travel Experience",
      subtitle: "Premium service for the discerning traveler"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 transform transition-transform duration-700 ease-out translate-y-0 opacity-100 font-serif">
              {slide.title}
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-10 max-w-2xl transform transition-transform duration-700 ease-out translate-y-0 opacity-100 font-light">
              {slide.subtitle}
            </p>
            <button
              onClick={() => scrollToSection('destinations')}
              className="bg-amber-500 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Now
            </button>
            <a
              href="https://wa.me/919828022224?text=Hi%2C%20I%20am%20interested%20in%20planning%20a%20trip%20with%20RouteFever."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center bg-[#25D366] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#1ebe57] transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <img src={whatsapp3d} alt="WhatsApp" className="w-8 h-8 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-amber-500 w-10' : 'bg-white bg-opacity-60'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
