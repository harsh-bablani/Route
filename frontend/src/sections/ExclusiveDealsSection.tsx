import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

// Exa destination images (replace with your own in assets/exclusive-deals/)
import bali from '../assets/bali.jpeg';
import dubai from '../assets/dubai.jpeg';
import thailand from '../assets/thailand.jpeg';
import srilanka from '../assets/srilanka.jpeg';
import singapore from '../assets/singapore.jpeg';

const destinations = [
  {
    image: bali,
    name: 'Bali',
    offer: 'Save 20% on Bali adventure packages this month only!'
  },
  {
    image: dubai,
    name: 'Dubai',
    offer: 'Exclusive Dubai luxury tours with free desert safari.'
  },
  {
    image: thailand,
    name: 'Thailand',
    offer: 'Special rates for Thailand island hopping experiences.'
  },
  {
    image: srilanka,
    name: 'Sri Lanka',
    offer: 'Sri Lanka cultural tours at unbeatable prices.'
  },
  {
    image: singapore,
    name: 'Singapore',
    offer: 'Singapore city breaks with complimentary night tour.'
  },
];

const ExclusiveDealsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Exclusive <span className="text-amber-500">Deals</span> on Destinations
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {destinations.map((dest, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-amber-50 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{dest.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{dest.offer}</p>
                <button
                  className="inline-block mt-auto bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded transition-colors text-center"
                >
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default ExclusiveDealsSection; 