import React from 'react';
import founderImage from '../assets/Sanjay Bablani.jpg';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const FoundersStorySection = () => (
  <section id="founder-story" className="py-20 bg-amber-50 w-full">
    <div className="w-full px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8 w-full">
        <div className="flex flex-col items-center md:items-start md:flex-row w-full">
          <img
            src={founderImage}
            alt="Sanjay Bablani"
            className="rounded-xl shadow-lg w-40 h-40 object-cover border-4 border-amber-400 mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center md:text-left">Sanjay Bablani</h3>
            <a
              href="mailto:sanjay.bablani@routefever.com"
              className="flex items-center text-gray-700 hover:text-amber-500 transition-colors text-sm mb-2"
            >
              <Mail className="w-5 h-5 mr-2" /> sanjay.bablani@routefever.com
            </a>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sanjay_bablani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjay-bablani-615a6517/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-amber-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 leading-tight">
          The Journey Behind <span className="text-amber-500">Route Fever</span>:<br />
          <span className="text-base md:text-lg font-medium text-gray-700">The Vision of Sanjay Bablani</span>
        </h2>
        <p className="text-gray-700 mb-3 italic text-sm md:text-base">Every traveler has a story.</p>
        <p className="text-gray-700 mb-3 text-sm md:text-base">
          For Sanjay Bablani, it wasn’t just the destinations that shaped his path — it was the journey itself that gave him a purpose far bigger than any passport stamp.<br />
          Sanjay Bablani, the founder of Route Fever, wasn’t born into the travel industry — he created his space in it. With over a decade of wanderlust, Sanjay noticed one thing missing from most travel plans: the human touch.
        </p>
        <h3 className="text-lg font-semibold text-amber-500 mb-1 mt-4">✈️ From Curious Explorer to Passionate Founder</h3>
        <p className="text-gray-700 mb-3 text-sm md:text-base">
          Sanjay’s love for travel began not in a luxury resort or a planned itinerary — but in the chaos and charm of spontaneous road trips, dusty backpacks, and honest conversations with locals in places far from home. Born into a middle-class Indian family, travel was always considered a luxury — something to be done “when time allows.”<br />
          But Sanjay thought differently.<br />
          He believed that travel was not an escape from life, but a way to understand it better — to grow, to feel, to reconnect with oneself. While his peers were building careers in cubicles, Sanjay was building a vision — one boarding pass at a time.
        </p>
        <h3 className="text-lg font-semibold text-amber-500 mb-1 mt-4">🧳 The Birth of Route Fever</h3>
        <p className="text-gray-700 mb-3 text-sm md:text-base">
          After visiting 25+ countries and helping countless friends and acquaintances plan their trips — from budget-friendly getaways to luxury escapes — Sanjay realized something was missing in the travel industry:<br />
          Too many travel companies were offering packages, but not enough were offering experiences.<br />
          Most itineraries were built around sightseeing, not feeling the place.<br />
          Most trips focused on logistics, not emotions.<br />
          And so, Route Fever was born — not just as a company, but as a movement.
        </p>
        <h3 className="text-lg font-semibold text-amber-500 mb-1 mt-4">💼 What Makes Route Fever Different?</h3>
        <ul className="list-disc list-inside text-gray-700 mb-3 text-sm md:text-base space-y-1">
          <li><b>Customization Over Commercialization</b> – Every trip is tailored, because no two travelers are the same.</li>
          <li><b>Affordability Without Compromise</b> – You don’t need a big budget to make big memories.</li>
          <li><b>End-to-End Support</b> – From planning to touchdown, Route Fever stays with you like a true travel companion.</li>
          <li><b>Real Experiences</b> – Route Fever focuses on local interactions, unique stays, and offbeat adventures — not just tourist spots.</li>
        </ul>
        <h3 className="text-lg font-semibold text-amber-500 mb-1 mt-4">🌟 A Personal Mission</h3>
        <p className="text-gray-700 mb-3 text-sm md:text-base">
          For Sanjay, Route Fever is more than business. It’s his way of giving people what travel gave him — clarity, connection, courage.<br />
          Whether it’s a solo traveler finding themselves on a silent beach in Bali, or a family bonding over bonfires in Himachal, Sanjay sees each itinerary as a story waiting to unfold — and Route Fever as the storyteller.
        </p>
        <blockquote className="border-l-4 border-amber-400 pl-4 italic text-gray-800 mb-3 text-sm md:text-base">
          “I don’t want to sell packages. I want to design memories. I want people to say, ‘that trip changed me.’ That’s the Route Fever promise.”<br />
          <span className="font-semibold">— Sanjay Bablani, Founder</span>
        </blockquote>
        <h3 className="text-lg font-semibold text-amber-500 mb-1 mt-4">💬 Today and Beyond</h3>
        <p className="text-gray-700 text-sm md:text-base">
          With hundreds of happy travelers, curated trips across continents, and a growing team of passionate planners, Route Fever is now one of the most trusted names for people who crave meaningful journeys.<br />
          But to Sanjay, success isn’t measured in numbers — it’s in the smiles of travelers who return not just with souvenirs, but with soul-deep satisfaction.<br />
          Because in the end, Route Fever isn’t just a travel company. It’s a reminder that life is meant to be explored.
        </p>
      </div>
    </div>
  </section>
);

export default FoundersStorySection; 