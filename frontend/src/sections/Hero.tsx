import { useEffect, useState } from 'react';

// Import local images from the assets folder
import heroParadise from '../assets/Hero paradise.jpeg';
import heroAdventure from '../assets/Hero adventure.jpeg';
import heroTravel from '../assets/Hero Travel.jpeg';

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
              href="https://wa.me/919828022224"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center bg-[#25D366] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#1ebe57] transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 32 32" fill="none">
                <g>
                  <path
                    d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.05A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
                    fill="#25D366"
                  />
                  <path
                    d="M16 5c5.523 0 10 4.477 10 10 0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5.104-1.39l-.364-.21-4.65 1.22 1.23-4.51-.23-.36A9.96 9.96 0 0 1 6 15c0-5.523 4.477-10 10-10z"
                    fill="#fff"
                  />
                  <path
                    d="M23.49 19.49c-.34-.17-2.01-.99-2.32-1.1-.31-.11-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.25-.74.08-.34-.17-1.43-.53-2.73-1.68-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.06-2.54-.28-.68-.57-.59-.77-.6-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.19 1.19-1.19 2.89s1.22 3.36 1.39 3.6c.17.23 2.39 3.66 5.8 4.99.81.35 1.45.56 1.95.72.81.26 1.54.22 2.12.13.65-.1 2.07-.84 2.37-1.65.29-.81.29-1.5.2-1.65-.09-.15-.31-.23-.66-.4z"
                    fill="#25D366"
                  />
                </g>
              </svg>
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
