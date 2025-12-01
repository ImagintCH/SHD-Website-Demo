import React from 'react';
import { PenTool, Layout, BarChart3, Fingerprint } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Social Media Management',
    description: 'We handle your accounts, schedule posts, and engage with your community so you don’t have to.',
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Content Creation',
    description: 'High-quality visuals and copywriting that tell your story and capture attention effortlessly.',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Ad Campaigns',
    description: 'Strategic paid advertising on Meta (Facebook & Instagram) to reach the right customers.',
  },
  {
    icon: <Fingerprint className="w-8 h-8" />,
    title: 'Brand Identity',
    description: 'Developing a cohesive visual language and voice that makes your brand instantly recognizable.',
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <SectionWrapper id="services" className="bg-brand-grey">
      <div className="mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">What We Do</h2>
        <p className="text-xl text-zinc-500">We Simplify Social Media Management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, backgroundColor: '#ffffff' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-8 border border-zinc-200/50 bg-white md:bg-transparent rounded-sm hover:shadow-xl hover:border-transparent transition-all duration-300 group cursor-default"
          >
            <div className="mb-6 text-zinc-800 group-hover:text-black transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-black">{service.title}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhatWeDo;