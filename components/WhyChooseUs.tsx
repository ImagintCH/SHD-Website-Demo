import React from 'react';
import { CheckCircle2, TrendingUp, Briefcase, DollarSign, Instagram } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Minimalistic Style That Converts',
    text: 'Clean design isn’t just aesthetic; it cuts through the noise and drives action.',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'We Think Like Business Owners',
    text: 'We prioritize ROI and sustainable growth over vanity metrics.',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Affordable, Transparent Packages',
    text: 'No hidden fees. Just clear deliverables that fit Malaysian business budgets.',
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: 'Focused on Facebook & Instagram',
    text: 'We specialize in the platforms where your customers actually spend their time.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <SectionWrapper id="why-us" className="bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Malaysian Businesses Choose Us</h2>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="shrink-0 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 group-hover:text-zinc-200 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-full min-h-[400px] hidden lg:block">
             <img
              src="https://picsum.photos/600/800?grayscale"
              alt="Team working"
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
             <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;