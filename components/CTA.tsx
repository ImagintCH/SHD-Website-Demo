import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const CTA: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="bg-brand-black text-white py-24 md:py-32">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Let’s Build Your Brand, <span className="text-zinc-500">Simply.</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-xl">
          Ready to turn your social media into a strong marketing asset? We are ready when you are.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <a
            href="#"
            className="px-8 py-4 bg-white text-black font-semibold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-sm w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            Book a Free Discovery Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-zinc-700 text-white font-medium text-lg rounded-sm hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;