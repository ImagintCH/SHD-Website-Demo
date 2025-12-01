import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { motion } from 'framer-motion';

const clients = [
  {
    category: 'Service-based businesses',
    image: 'https://picsum.photos/600/400?random=1',
  },
  {
    category: 'Restaurants & Cafés',
    image: 'https://picsum.photos/600/400?random=2',
  },
  {
    category: 'Beauty & Lifestyle',
    image: 'https://picsum.photos/600/400?random=3',
  },
  {
    category: 'Startups',
    image: 'https://picsum.photos/600/400?random=4',
  },
];

const WhoWeWorkWith: React.FC = () => {
  return (
    <SectionWrapper className="bg-brand-grey">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Who We Work With</h2>
        <p className="text-xl text-zinc-600 max-w-2xl">
          We proudly partner with businesses of all sizes and types, helping them find their voice in a crowded digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="group relative h-64 md:h-80 overflow-hidden bg-zinc-900 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={client.image}
              alt={client.category}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110 ease-out"
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="h-0.5 w-8 bg-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                  {client.category}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhoWeWorkWith;