import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../sections/ContactSection';

const ContactNowPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="pt-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-amber-500">Contact Now</h1>
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default ContactNowPage; 