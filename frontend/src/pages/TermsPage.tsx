import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="pt-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-amber-500">Terms & Conditions</h1>
      <p className="text-gray-700 mb-4">This is the Terms & Conditions page. Please add your terms and conditions here.</p>
    </main>
    <Footer />
  </div>
);

export default TermsPage; 