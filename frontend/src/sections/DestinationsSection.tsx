import React, { useState } from 'react';

import thailandImg from '../assets/thailand.jpeg';
import vietnamImg from '../assets/vietnam.jpeg';
import dubaiImg from '../assets/dubai.jpeg';
import malaysiaImg from '../assets/malaysia.jpeg';
import baliImg from '../assets/bali.jpeg';
import indiaImg from '../assets/india.jpeg';
import srilankaImg from '../assets/srilanka.jpeg';
import singaporeImg from '../assets/singapore.jpeg';

const destinations = [
  {
    id: 1,
    name: "Thailand",
    image: thailandImg,
    description: "Experience the perfect blend of ancient temples, vibrant street life, and pristine beaches in Thailand.",
    duration: "7-10 Days"
  },
  {
    id: 2,
    name: "Vietnam",
    image: vietnamImg,
    description: "Discover Vietnam's rich history, breathtaking landscapes, and delicious cuisine.",
    duration: "8-12 Days"
  },
  {
    id: 3,
    name: "Dubai",
    image: dubaiImg,
    description: "Explore the futuristic cityscape, luxury shopping, and desert adventures in Dubai.",
    duration: "5-8 Days"
  },
  {
    id: 4,
    name: "Malaysia",
    image: malaysiaImg,
    description: "From bustling cities to serene islands, Malaysia offers diverse experiences for every traveler.",
    duration: "6-9 Days"
  },
  {
    id: 5,
    name: "Bali",
    image: baliImg,
    description: "Immerse yourself in Bali's spiritual atmosphere, stunning beaches, and lush rice terraces.",
    duration: "7-10 Days"
  },
  {
    id: 6,
    name: "India",
    image: indiaImg,
    description: "Experience the vibrant colors, rich heritage, and cultural diversity of incredible India.",
    duration: "9-14 Days"
  },
  {
    id: 7,
    name: "Sri Lanka",
    image: srilankaImg,
    description: "Discover ancient ruins, wildlife safaris, and pristine beaches in the pearl of the Indian Ocean.",
    duration: "7-11 Days"
  },
  {
    id: 8,
    name: "Singapore",
    image: singaporeImg,
    description: "Explore the perfect blend of urban sophistication and natural beauty in Singapore.",
    duration: "4-7 Days"
  }
];


const DestinationsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-serif">Popular <span className="text-amber-500">Destinations</span></h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl font-light">
            Explore our most sought-after destinations and start planning your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold font-serif">{destination.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 mb-4 text-sm line-clamp-2 font-light">{destination.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-500 text-sm font-medium">{destination.duration}</span>
                </div>
                <button
                  onClick={() => window.open('https://wa.me/919828022224', '_blank')}
                  className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition-colors font-medium"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center bg-transparent text-amber-500 font-semibold hover:text-amber-600 transition-colors text-lg"
          >
            <span>View All Destinations</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;