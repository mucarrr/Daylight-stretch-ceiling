import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

export default function SocialHeader() {
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+905551234567" 
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <Phone size={14} />
              <span>0555 123 45 67</span>
            </a>
            <a 
              href="mailto:daylightgergitavan@gmail.com" 
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <Mail size={14} />
              <span>daylightgergitavan@gmail.com</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Bizi Takip Edin:</span>
            <a 
              href="https://instagram.com/daylightgergitavan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://facebook.com/daylightgergitavan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
