import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    purpose: '',
    location: '',
    pax: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
          name: '',
          email: '',
          mobile: '',
          purpose: '',
          location: '',
          pax: '',
          message: ''
        });
      } else {
        alert('Error: ' + (data.message || 'Something went wrong.'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Contact <span className="text-amber-500">Us</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We're here to help you plan your perfect journey. Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Connect With Us</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-500 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email Address</h4>
                  <p className="text-gray-600">care@routefever.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-500 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone Number</h4>
                  <p className="text-gray-600">+91 98280 22224</p>
                  <p className="text-gray-600">WhatsApp: +91 98280 22224</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-500 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Routefever Travels Pvt. Ltd.</h4>
                  <p className="text-gray-600">3 / 373 Malviya Nagar</p>
                  <p className="text-gray-600">Jaipur 302017</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your contact number"
                  />
                </div>
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                    Purpose of Travel *
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select purpose</option>
                    <option value="vacation">Vacation</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="business">Business</option>
                    <option value="adventure">Adventure</option>
                    <option value="educational">Educational</option>
                    <option value="religious">Religious</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Travel Destination *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Where would you like to go?"
                  />
                </div>
                <div>
                  <label htmlFor="pax" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Travelers *
                  </label>
                  <input
                    type="number"
                    id="pax"
                    name="pax"
                    min="1"
                    value={formData.pax}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Number of people"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Tell us more about your travel plans, preferences, and any special requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-600 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
