import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-brand-light"
    >
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-zinc-200 to-transparent rounded-full opacity-30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-black leading-[1.1]">
              Social Media Marketing for <span className="text-zinc-500">Malaysian Brands</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Where strategy meets simple, effective creativity. We help transform your brand into a clear, consistent, and convincing online presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-base font-medium overflow-hidden transition-all hover:pr-10"
            >
              <span className="relative z-10">Book a Call</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-zinc-800 text-base font-medium hover:bg-zinc-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 w-full max-w-lg md:max-w-none relative"
        >
          {/* Minimalistic Visual/Image Placeholder */}
          <div className="aspect-[4/5] md:aspect-square bg-zinc-200 relative overflow-hidden group">
            <img
              src="https://picsum.photos/800/800?grayscale"
              alt="Minimalist Architecture"
              className="object-cover w-full h-full opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Floating Buttons Bottom Right (as requested in Prompt) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
         <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
            >
            <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;