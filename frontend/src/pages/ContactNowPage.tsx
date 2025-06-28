import { Mail, Phone, MapPin } from 'lucide-react';

const ContactNowPage = () => (
  <main className="pt-20 px-4 max-w-md mx-auto">
    <h1 className="text-3xl font-bold mb-8 text-amber-500 text-center">Get in Touch with us</h1>
    <div className="space-y-8">
      {/* Email Address */}
      <div className="flex items-start space-x-4">
        <div className="bg-amber-500 rounded-lg p-3 flex items-center justify-center">
          <Mail className="text-white" size={32} />
        </div>
        <div>
          <div className="font-bold text-lg">Email Address</div>
          <a href="mailto:care@routefever.com" className="text-gray-600 hover:text-amber-500 transition-colors">care@routefever.com</a>
        </div>
      </div>
      {/* Phone Number */}
      <div className="flex items-start space-x-4">
        <div className="bg-amber-500 rounded-lg p-3 flex items-center justify-center">
          <Phone className="text-white" size={32} />
        </div>
        <div>
          <div className="font-bold text-lg">Phone Number</div>
          <a href="tel:+919828022224" className="text-gray-600 hover:text-amber-500 transition-colors block">+91 98280 22224</a>
          <a href="https://wa.me/919828022224" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-500 transition-colors block">WhatsApp: +91 98280 22224</a>
        </div>
      </div>
      {/* Address */}
      <div className="flex items-start space-x-4">
        <div className="bg-amber-500 rounded-lg p-3 flex items-center justify-center">
          <MapPin className="text-white" size={32} />
        </div>
        <div>
          <div className="font-bold text-lg">Routefever Travels Pvt. Ltd.</div>
          <div className="text-gray-600">3 / 373 Malviya Nagar<br />Jaipur 302017</div>
        </div>
      </div>
    </div>
  </main>
);

export default ContactNowPage; 