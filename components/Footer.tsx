import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-black mb-2">SHD Creative Studio</h4>
            <p className="text-zinc-500 text-sm">Simplifying social media for modern brands.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-2 bg-zinc-50 rounded-full text-zinc-600 hover:text-black hover:scale-110 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-zinc-50 rounded-full text-zinc-600 hover:text-black hover:scale-110 transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-zinc-50 rounded-full text-zinc-600 hover:text-black hover:scale-110 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-zinc-50 rounded-full text-zinc-600 hover:text-black hover:scale-110 transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© 2025 SHD Creative Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;