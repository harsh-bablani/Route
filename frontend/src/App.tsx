import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Lazy-loaded sections
const Hero = lazy(() => import('./sections/Hero'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const FoundersStorySection = lazy(() => import('./sections/FoundersStorySection'));
const DestinationsSection = lazy(() => import('./sections/DestinationsSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const ReviewsSection = lazy(() => import('./sections/ReviewsSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

// Landing pages
const TermsPage = lazy(() => import('./pages/TermsPage'));
const RefundPage = lazy(() => import('./pages/RefundPage'));
const ContactNowPage = lazy(() => import('./pages/ContactNowPage'));
const AboutCompanyPage = lazy(() => import('./pages/AboutCompanyPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              {/* Main landing (one-page sections) */}
              <Route path="/" element={
                <>
                  <Hero />
                  <AboutSection />
                  <FoundersStorySection />
                  <DestinationsSection />
                  <ServicesSection />
                  <ReviewsSection />
                  <ContactSection />
                </>
              } />
              {/* New landing pages */}
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/refund" element={<RefundPage />} />
              <Route path="/contact-now" element={<ContactNowPage />} />
              <Route path="/about-company" element={<AboutCompanyPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
