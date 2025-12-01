import React from 'react';
import SectionWrapper from './ui/SectionWrapper';

const WhyExist: React.FC = () => {
  return (
    <SectionWrapper className="bg-white">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">Why We Exist</h2>
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-brand-black leading-tight">
            As business owners ourselves, we understand how overwhelming managing social media can be.
          </h3>
          <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
            You're busy running your business — not planning content calendars, designing posts, or trying to figure out what works.
          </p>
          <div className="w-12 h-1 bg-black mt-8 md:mx-0 mx-auto" />
          <p className="text-lg text-zinc-800 pt-4">
            That’s where we come in. We help transform your brand into a clear, consistent, and convincing online presence.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyExist;