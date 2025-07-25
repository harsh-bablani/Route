import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import avatar1 from '../assets/Praveen.jpg';
import avatar2 from '../assets/Vineet.jpg';
import avatar4 from '../assets/Satnam Singh.jpg';
import avatar3 from '../assets/Priyank Pathak.jpg';
import avatar5 from '../assets/KK Agarwal.jpg';
import avatar6 from '../assets/Rahul Rai.jpg';
import avatar7 from '../assets/Tanuj Khanna.jpg';
import avatar8 from '../assets/Venky.jpg';
import avatar9 from '../assets/Saloni and Kshitiz.jpg';
import avatar10 from '../assets/Anjali and Nimish.jpg';

const reviews = [
  {
    id: 1,
    name: "Praveen Bahal",
    avatar: avatar1,
    rating: 5,
    destination: "Dubai",
    comment: "My trip to Dubai with RouteFever was absolutely amazing!..."
  },
  {
    id: 2,
    name: "Vineet Khanna",
    avatar: avatar2,
    rating: 5,
    destination: "Dubai",
    comment: "RouteFever made our Vacation in Dubai absolutely magical!..."
  },
  {
    id: 4,
    name: "Satnam Singh",
    avatar: avatar4,
    rating: 5,
    destination: "Sikkim",
    comment: "Sikkim was on my bucket list for years, and RouteFever made it unforgettable..."
  },
  {
    id: 3,
    name: "Priyank Pathak",
    avatar: avatar3,
    rating: 5,
    destination: "Bali",
    comment: "Bali was my best place ever, and RouteFever helped me to enjoy my vacation"
  },
  {
    id: 5,
    name: "KK Agarwal",
    avatar: avatar5,
    rating: 5,
    destination: "Goa",
    comment: "Goa trip was fantastic! RouteFever took care of everything and made it memorable. Highly recommended!"
  },
  {
    id: 6,
    name: "Rahul Rai",
    avatar: avatar6,
    rating: 5,
    destination: "Kumbhalgarh",
    comment: "Kumbhalgarh was a wonderful experience. Thanks to RouteFever for the seamless arrangements and great support."
  },
  {
    id: 7,
    name: "Tanuj Khanna",
    avatar: avatar7,
    rating: 5,
    destination: "Dubai",
    comment: "RouteFever turned our Dubai adventure into a seamless blend of excitement and comfort. Every detail was handled with care, and we discovered hidden gems we’d never have found on our own."
  },
  {
    id: 8,
    name: "Venky Chopra",
    avatar: avatar8,
    rating: 5,
    destination: "Dubai",
    comment: "From the moment we landed in Dubai, RouteFever’s planning made us feel like VIPs. The itinerary was fresh and full of surprises—truly a step above the usual travel experience."
  },
  {
    id: 9,
    name: "Saloni and Kshitiz",
    avatar: avatar9,
    rating: 5,
    destination: "Andaman",
    comment: "Our Andaman trip was pure bliss! RouteFever crafted a journey that balanced adventure and relaxation perfectly. We came back with memories—and stories—we’ll cherish forever."
  },
  {
    id: 10,
    name: "Anjali and Nimish",
    avatar: avatar10,
    rating: 5,
    destination: "Thailand",
    comment: "Thailand with RouteFever was a revelation. Every day brought something new, from local food tours to tranquil beaches. We felt truly cared for throughout our travels."
  },
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
                      <p className="text-sm text-gray-500">{review.destination}</p>
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
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex >= reviews.length - (windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1)}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md ${startIndex >= reviews.length - (windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
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
