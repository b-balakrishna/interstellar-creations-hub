
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Create star field effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Star properties
    const stars: {x: number, y: number, size: number, speed: number}[] = [];
    const totalStars = 150;
    
    // Initialize stars
    for (let i = 0; i < totalStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: 0.1 + Math.random() * 0.3
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        
        // Move star
        star.y += star.speed;
        
        // Reset star if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></canvas>
      
      <div className="absolute top-0 left-0 w-full h-full bg-space-gradient opacity-40 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        <div className="rounded-full bg-space-purple/10 p-1 mb-6 backdrop-blur-sm">
          <div className="text-sm font-medium text-space-purple px-4 py-1">
            MERN Stack Developer
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text text-white">
          Exploring The <span className="text-space-purple">Digital Universe</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">
          A passionate full-stack developer with 2 years of experience crafting 
          stellar web applications and digital experiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button className="bg-space-purple hover:bg-space-purple/90 text-white px-6 py-6">
            View My Projects
          </Button>
          <Button variant="outline" className="border-space-purple text-space-purple hover:bg-space-purple/10 px-6 py-6">
            <Download className="mr-2 h-5 w-5" /> Download Resume
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/60 hover:text-white transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
      
      {/* Animated planet elements */}
      <div className="hidden lg:block absolute top-1/4 right-[10%] w-24 h-24 bg-space-blue/30 rounded-full animate-float blur-md"></div>
      <div className="hidden lg:block absolute bottom-1/4 left-[15%] w-40 h-40 bg-space-purple/20 rounded-full animate-pulse-slow blur-md"></div>
    </section>
  );
};

export default Hero;
