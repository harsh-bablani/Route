import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutCompanyPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="pt-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-amber-500">About Company</h1>
      <p className="text-gray-700 mb-4">This is the About Company page. Please add information about your company here.</p>
    </main>
    <Footer />
  </div>
);

export default AboutCompanyPage; 