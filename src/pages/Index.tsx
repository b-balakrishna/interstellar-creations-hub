
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

// Add type definition for window.scrollTimer at the top level
declare global {
  interface Window {
    scrollTimer: ReturnType<typeof setTimeout> | undefined;
  }
}

const Index = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  
  useEffect(() => {
    // Update document title
    document.title = "Interstellar Portfolio | MERN Developer";
    
    // Scroll effect handlers
    const handleScroll = () => {
      const st = window.scrollY;
      const scrollSpeed = Math.abs(st - lastScrollTop);
      
      // Add warp speed effect when scrolling fast
      if (scrollSpeed > 15) {
        setIsScrolling(true);
        document.body.classList.add('warp-speed');
        
        // Apply parallax effect to sections
        const sections = document.querySelectorAll('.scroll-parallax');
        const direction = st > lastScrollTop ? 1 : -1;
        
        sections.forEach((section, index) => {
          const element = section as HTMLElement;
          const depth = 0.05; // How much the elements move relative to scroll
          const skew = Math.min(scrollSpeed * 0.02, 3) * direction;
          const translateY = scrollSpeed * depth * direction;
          
          element.style.transform = `translateY(${translateY}px) skewY(${skew * 0.1}deg)`;
        });
        
        // Clear timeout to reset
        if (window.scrollTimer) {
          clearTimeout(window.scrollTimer);
        }
        
        // Reset effects after scrolling stops
        window.scrollTimer = setTimeout(() => {
          setIsScrolling(false);
          document.body.classList.remove('warp-speed');
          
          const sections = document.querySelectorAll('.scroll-parallax');
          sections.forEach((section) => {
            const element = section as HTMLElement;
            element.style.transform = '';
          });
        }, 150);
      }
      
      setLastScrollTop(st <= 0 ? 0 : st);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.scrollTimer) clearTimeout(window.scrollTimer);
    };
  }, [lastScrollTop]);
  
  return (
    <div className="min-h-screen">
      <StarField />
      
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
