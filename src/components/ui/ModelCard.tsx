import Image from 'next/image';
import Link from 'next/link';

interface ModelCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
}

export default function ModelCard({ id, name, description, image, slug, features }: ModelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Özellikler:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Link
          href={`/modeller/${slug}`}
          className="inline-block w-full text-center bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Detayları Gör
        </Link>
      </div>
    </div>
  );
}
