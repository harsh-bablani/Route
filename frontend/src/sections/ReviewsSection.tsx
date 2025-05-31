import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import avatar1 from '../assets/review priya.jpeg';
import avatar2 from '../assets/review raj.jpeg';
import avatar3 from '../assets/review anita desai.jpeg';
import avatar4 from '../assets/review vikram singh.jpeg';
import avatar5 from '../assets/review meera patel.jpeg';


const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: avatar1,
    rating: 5,
    destination: "Thailand",
    date: "January 15, 2025",
    comment: "My trip to Thailand with RouteFever was absolutely amazing!..."
  },
  {
    id: 2,
    name: "Raj Malhotra",
    avatar: avatar2,
    rating: 5,
    destination: "Bali",
    date: "February 3, 2025",
    comment: "RouteFever made our honeymoon in Bali absolutely magical!..."
  },
  {
    id: 3,
    name: "Anita Desai",
    avatar: avatar3,
    rating: 4,
    destination: "Dubai",
    date: "March 22, 2025",
    comment: "Our family trip to Dubai was well-organized by RouteFever..."
  },
  {
    id: 4,
    name: "Vikram Singh",
    avatar: avatar4,
    rating: 5,
    destination: "Vietnam",
    date: "April 10, 2025",
    comment: "Vietnam was on my bucket list for years, and RouteFever made it unforgettable..."
  },
  {
    id: 5,
    name: "Meera Patel",
    avatar: avatar5,
    rating: 5,
    destination: "Malaysia",
    date: "May 5, 2025",
    comment: "My solo trip to Malaysia was perfectly arranged by RouteFever..."
  }
];

const ReviewsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState<typeof reviews>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let visibleCount = 1;
    if (windowWidth >= 1024) {
      visibleCount = 3;
    } else if (windowWidth >= 768) {
      visibleCount = 2;
    }

    setVisibleReviews(reviews.slice(startIndex, startIndex + visibleCount));
  }, [startIndex, windowWidth]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(reviews.length - 1, prev + 1));
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Customer <span className="text-amber-500">Reviews</span></h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            See what our travelers have to say about their experiences with RouteFever
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap -mx-4">
            {visibleReviews.map((review) => (
              <div key={review.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-amber-500"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.destination} • {review.date}</p>
                      <div className="flex mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 flex-grow">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md ${
              startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button 
            onClick={handleNext}
            disabled={startIndex >= reviews.length - (windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1)}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md ${
              startIndex >= reviews.length - (windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        
        <div className="mt-8 text-center">
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;