import React, { useState } from 'react';

const BookFlightSection = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    departure: '',
    returnDate: '',
    adults: 1,
    children: 0,
    infants: 0,
    classType: 'Economy',
    name: '',
    email: '',
    phone: '',
    special: '',
    tripType: 'One-way',
    flexible: false,
    direct: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Flight Booking Enquiry:%0A` +
      `Trip Type: ${form.tripType}%0A` +
      `From: ${form.from}%0A` +
      `To: ${form.to}%0A` +
      `Departure: ${form.departure}%0A` +
      `${form.tripType === 'Round-trip' ? `Return: ${form.returnDate}%0A` : ''}` +
      `Adults: ${form.adults}, Children: ${form.children}, Infants: ${form.infants}%0A` +
      `Class: ${form.classType}%0A` +
      `Flexible Dates: ${form.flexible ? 'Yes' : 'No'}%0A` +
      `Direct Flights Only: ${form.direct ? 'Yes' : 'No'}%0A` +
      `Name: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Phone: ${form.phone}%0A` +
      `${form.special ? `Special Requests: ${form.special}%0A` : ''}`
    );
    window.open(`https://wa.me/919828022224?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-white" id="book-flight">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Book a <span className="text-amber-500">Flight</span>
        </h2>
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">From</label>
              <input type="text" name="from" value={form.from} onChange={handleChange} required className="w-full px-3 py-2 border rounded" placeholder="Departure City/Airport" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">To</label>
              <input type="text" name="to" value={form.to} onChange={handleChange} required className="w-full px-3 py-2 border rounded" placeholder="Arrival City/Airport" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Date of Departure</label>
              <input type="date" name="departure" value={form.departure} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Date of Return</label>
              <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange} disabled={form.tripType === 'One-way'} className="w-full px-3 py-2 border rounded" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Adults</label>
              <input type="number" name="adults" min="1" value={form.adults} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Children</label>
              <input type="number" name="children" min="0" value={form.children} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Infants</label>
              <input type="number" name="infants" min="0" value={form.infants} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Class</label>
              <select name="classType" value={form.classType} onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Trip Type</label>
              <select name="tripType" value={form.tripType} onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option>One-way</option>
                <option>Round-trip</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1 flex items-center">
              <input type="checkbox" name="flexible" checked={form.flexible} onChange={handleChange} className="mr-2" />
              <label className="text-gray-700">Flexible Dates</label>
            </div>
            <div className="flex-1 flex items-center">
              <input type="checkbox" name="direct" checked={form.direct} onChange={handleChange} className="mr-2" />
              <label className="text-gray-700">Direct Flights Only</label>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Phone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Special Requests</label>
            <textarea name="special" value={form.special} onChange={handleChange} className="w-full px-3 py-2 border rounded" placeholder="Any special requirements?" />
          </div>
          <button type="submit" className="w-full bg-amber-500 text-white py-3 rounded font-semibold hover:bg-amber-600 transition-colors text-lg mt-2">
            Enquire on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookFlightSection; 