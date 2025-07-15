import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

import bali from '../assets/Bali Exclusive.jpg';
import dubai from '../assets/Dubai Exclusive.jpg';
import thailand from '../assets/Thailand Exclusive.jpg';
import srilanka from '../assets/Srlanka Exclusive.jpg';
import singapore from '../assets/Singapore Exclusive.jpg';

const destinations = [
  {
    image: bali,
    name: 'Bali',
    offer: 'Save 20% on Bali adventure packages this month only!',
  },
  {
    image: dubai,
    name: 'Dubai',
    offer: 'Exclusive Dubai luxury tours with free desert safari.',
  },
  {
    image: thailand,
    name: 'Thailand',
    offer: 'Special rates for Thailand island hopping experiences.',
  },
  {
    image: srilanka,
    name: 'Sri Lanka',
    offer: 'Sri Lanka cultural tours at unbeatable prices.',
  },
  {
    image: singapore,
    name: 'Singapore',
    offer: 'Singapore city breaks with complimentary night tour.',
  },
];

const ExclusiveDealsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setModalImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
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
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => openModal(dest.image)}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{dest.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{dest.offer}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
            <div className="relative max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              <img src={modalImage!} alt="Exclusive Deal" className="w-full h-auto rounded-xl shadow-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExclusiveDealsSection; 