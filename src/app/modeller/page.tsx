import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { models } from '@/lib/data/models';
import ModellerClient from '@/components/ui/ModellerClient';

export const metadata: Metadata = {
  title: "Gergi Tavan Modelleri - Daylight Gergi Tavan",
  description: "Lake, baskılı, duvar kağıdı, lineer aydınlatma ve lightbox gergi tavan modellerimizi inceleyin. Her mekana uygun çözümler.",
  keywords: "gergi tavan modelleri, lake gergi tavan, baskılı gergi tavan, duvar kağıdı, lineer aydınlatma, lightbox",
};

export default function ModellerPage() {
  return (
    <main className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gergi Tavan Modellerimiz
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Her mekana uygun, farklı ihtiyaçlara cevap veren gergi tavan modellerimizi keşfedin. 
              Kaliteli malzeme ve uzman montaj ile mükemmel sonuçlar.
            </p>
          </div>
        </div>
      </section>

      {/* Client Component */}
      <ModellerClient />
    </main>
  );
}
