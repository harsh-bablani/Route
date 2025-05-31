import React from 'react';
import {
  Globe,
  Map,
  Compass,
  CreditCard,
  MapPin,
  Headphones,
  Shield,
  Calendar,
  Plane,
  Hotel,
  Briefcase,
  Landmark,
  Car
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-amber-500" />,
      title: "International Tours",
      description: "Explore the world with our carefully curated international tour packages to exotic destinations."
    },
    {
      icon: <Map className="w-10 h-10 text-amber-500" />,
      title: "Customized Itineraries",
      description: "Personalized travel plans tailored to your preferences, interests, and budget."
    },
    {
      icon: <Compass className="w-10 h-10 text-amber-500" />,
      title: "Adventure Travel",
      description: "Thrilling experiences for adventure seekers, from trekking to water sports and beyond."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-amber-500" />,
      title: "Affordable Packages",
      description: "Budget-friendly options without compromising on quality or experiences."
    },
    {
      icon: <MapPin className="w-10 h-10 text-amber-500" />,
      title: "Local Experiences",
      description: "Authentic cultural immersion with local guides and exclusive access to hidden gems."
    },
    {
      icon: <Headphones className="w-10 h-10 text-amber-500" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey for peace of mind."
    },
    {
      icon: <Shield className="w-10 h-10 text-amber-500" />,
      title: "Travel Insurance",
      description: "Comprehensive coverage options for a worry-free travel experience."
    },
    {
      icon: <Calendar className="w-10 h-10 text-amber-500" />,
      title: "Group Bookings",
      description: "Special arrangements and discounts for family reunions, corporate retreats, and group travel."
    },
    {
      icon: <Plane className="w-10 h-10 text-amber-500" />,
      title: "Flight Booking",
      description: "Seamless flight booking services with competitive prices and global coverage."
    },
    {
      icon: <Hotel className="w-10 h-10 text-amber-500" />,
      title: "Hotel Accommodation",
      description: "Handpicked hotels offering comfort, convenience, and great value at every destination."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-amber-500" />,
      title: "Holiday Packages",
      description: "All-inclusive holiday packages designed for relaxation, adventure, and cultural exploration."
    },
    {
      icon: <Landmark className="w-10 h-10 text-amber-500" />,
      title: "Visa Assistance",
      description: "Expert support in securing travel visas for all your international journeys."
    },
    {
      icon: <Car className="w-10 h-10 text-amber-500" />,
      title: "Car Rental",
      description: "Convenient and reliable car rental services at your destination."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive travel solutions tailored to make your journey memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border-b-4 border-amber-500"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
