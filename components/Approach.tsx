import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Ear, Map, PenTool, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Listen',
    description: 'We take the time to understand your business, your pain points, and your specific goals.',
    icon: <Ear className="w-6 h-6" />,
  },
  {
    id: '02',
    title: 'Plan',
    description: 'We develop a customized, actionable strategy tailored for your social media success.',
    icon: <Map className="w-6 h-6" />,
  },
  {
    id: '03',
    title: 'Create',
    description: 'Our team produces tailored content—copy and visuals—that resonates with your audience.',
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    id: '04',
    title: 'Improve',
    description: 'We continuously refine our strategy based on real performance data and insights.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const Approach: React.FC = () => {
  return (
    <SectionWrapper id="approach" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">Our Approach</h2>
        <p className="text-xl text-zinc-500">Focused, Intentional, and Simple</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-zinc-200 -z-10" />

        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="group relative bg-white p-6 pt-0"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 bg-brand-light border border-zinc-100 rounded-full flex flex-col items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:border-black group-hover:scale-110 transition-all duration-300 z-10 relative shadow-sm">
                <span className="text-zinc-400 font-mono text-xs mb-1 group-hover:text-black">{step.id}</span>
                <div className="text-zinc-600 group-hover:text-black">{step.icon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center lg:text-left">{step.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed text-center lg:text-left">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Approach;