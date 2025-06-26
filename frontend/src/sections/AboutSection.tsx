import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            About <span className="text-amber-500">RouteFever</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Your premier travel partner for extraordinary journeys and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Crafting Perfect Travel Experiences
            </h3>
            <p className="text-gray-600 mb-6">
              At RouteFever, we're passionate about creating extraordinary travel experiences that inspire,
              excite, and transform. With over a decade of expertise in the travel industry, we've helped
              thousands of travelers discover the world's most breathtaking destinations.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced travel consultants works tirelessly to design personalized itineraries
              that cater to your unique preferences and interests. Whether you're seeking adventure,
              relaxation, cultural immersion, or a blend of experiences, we have the expertise to make it
              happen.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="text-amber-500 font-bold text-4xl mb-2">20+</div>
                <div className="text-gray-700 font-medium">Countries</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="text-amber-500 font-bold text-4xl mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Happy Travelers</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="text-amber-500 font-bold text-4xl mb-2">50+</div>
                <div className="text-gray-700 font-medium">Destinations</div>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="text-amber-500 font-bold text-4xl mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Customer Support</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-64">
                <img
                  src={img1}
                  alt="Travel Experience 1"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-64">
                <img
                  src={img2}
                  alt="Travel Experience 2"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-64">
                <img
                  src={img3}
                  alt="Travel Experience 3"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-64">
                <img
                  src={img4}
                  alt="Travel Experience 4"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
