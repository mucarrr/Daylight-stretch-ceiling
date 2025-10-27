import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

export default function SocialHeader() {
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+905061509841" 
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <Phone size={14} />
              <span>+90 506 150 98 41</span>
            </a>
            <a 
              href="mailto:daylightgergitavan@gmail.com" 
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <Mail size={14} />
              <span>daylightgergitavan@gmail.com</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-sm">Bizi Takip Edin:</span>
            <a 
              href="https://instagram.com/daylightgergi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              title="Instagram'da takip et"
            >
              <Instagram size={18} className="text-white" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Instagram
              </div>
            </a>
            <a 
              href="https://www.facebook.com/share/1HotGTJZUo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              title="Facebook'ta takip et"
            >
              <Facebook size={18} className="text-white" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Facebook
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
