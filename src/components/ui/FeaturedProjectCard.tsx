import Image from 'next/image';
import Link from 'next/link';

interface FeaturedProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  modelType: string;
  year: string;
}

export default function FeaturedProjectCard({ 
  title, 
  description, 
  image, 
  location, 
  modelType, 
  year 
}: FeaturedProjectCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {modelType}
          </span>
          <span className="text-sm text-gray-400">{location}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
