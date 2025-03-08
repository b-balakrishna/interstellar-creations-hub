
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-space-darker/80 backdrop-blur-lg border-b border-space-purple/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-space-purple animate-pulse-slow"></div>
          <span className="text-lg font-bold text-white">DevPortfolio</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="text-white/80 hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          
          <div className="flex items-center space-x-3 ml-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="text-white/70 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden h-screen bg-space-darker/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <a href="#about" className="text-xl text-white/80 hover:text-white transition-colors py-2 border-b border-space-purple/20" onClick={toggleMenu}>About</a>
            <a href="#skills" className="text-xl text-white/80 hover:text-white transition-colors py-2 border-b border-space-purple/20" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="text-xl text-white/80 hover:text-white transition-colors py-2 border-b border-space-purple/20" onClick={toggleMenu}>Projects</a>
            <a href="#experience" className="text-xl text-white/80 hover:text-white transition-colors py-2 border-b border-space-purple/20" onClick={toggleMenu}>Experience</a>
            <a href="#contact" className="text-xl text-white/80 hover:text-white transition-colors py-2 border-b border-space-purple/20" onClick={toggleMenu}>Contact</a>
            
            <div className="flex items-center space-x-6 pt-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-white/70 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
