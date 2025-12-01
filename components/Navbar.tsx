import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Approach', href: '#approach' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-zinc-100' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-tighter text-black z-50">
          SHD <span className="font-light">Creative Studio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2.5 bg-black text-white hover:bg-zinc-800 transition-colors duration-300"
          >
            Book a Call
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-400 transition-all group"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-zinc-600 group-hover:text-black" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 p-2 text-black"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-zinc-800 hover:text-black"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-8 w-64">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-6 py-4 bg-black text-white text-lg font-medium"
              >
                Book a Call
              </a>
              <a
                href="https://wa.me/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-6 py-4 border border-zinc-200 text-zinc-800 text-lg font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;