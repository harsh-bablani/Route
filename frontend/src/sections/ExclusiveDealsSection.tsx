import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

// Example images (replace with your own in assets/exclusive-deals/)
import deal1 from '../assets/img1.jpeg';
import deal2 from '../assets/img2.jpeg';
import deal3 from '../assets/img3.jpeg';

const deals = [
  {
    image: deal1,
    title: 'Bali Adventure',
    description: 'Experience the magic of Bali with exclusive discounts on resorts and tours.',
    link: '#',
  },
  {
    image: deal2,
    title: 'Dubai Luxury Escape',
    description: 'Enjoy luxury hotels and desert safaris at unbeatable prices.',
    link: '#',
  },
  {
    image: deal3,
    title: 'Thailand Beach Special',
    description: 'Book now for special rates on Thailand’s best beaches and island hopping.',
    link: '#',
  },
];

const ExclusiveDealsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Exclusive <span className="text-amber-500">Deals</span>
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
        {deals.map((deal, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-amber-50 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{deal.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{deal.description}</p>
                <a
                  href={deal.link}
                  className="inline-block mt-auto bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded transition-colors text-center"
                >
                  View Deal
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default ExclusiveDealsSection; 