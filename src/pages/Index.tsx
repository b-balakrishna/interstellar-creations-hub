
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Interstellar Portfolio | MERN Developer";
  }, []);
  
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
