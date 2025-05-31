import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy-loaded sections
const Hero = lazy(() => import('./sections/Hero'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const DestinationsSection = lazy(() => import('./sections/DestinationsSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const ReviewsSection = lazy(() => import('./sections/ReviewsSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Hero />
          <AboutSection />
          <DestinationsSection />
          <ServicesSection />
          <ReviewsSection />
          <ContactSection />
          
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
