
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-space-purple/20 bg-space-darker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-space-purple"></div>
              <span className="text-lg font-bold text-white">DevPortfolio</span>
            </div>
            <p className="text-white/60 text-sm mt-2">
              Exploring the digital universe since 2022
            </p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-space-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-space-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-space-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="text-white/70 hover:text-space-purple transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-white/60 text-sm">
            &copy; {currentYear} Your Name. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 text-center text-white/40 text-xs">
          <p>
            Crafted with ❤️ and cosmic inspiration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
