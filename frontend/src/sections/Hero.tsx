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
              className="mt-4 inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.68.96.98-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.47.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.85c.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
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
