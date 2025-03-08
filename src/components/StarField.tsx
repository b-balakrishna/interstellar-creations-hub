
import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleTime: number;
}

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const stars: Star[] = [];
    const STAR_COUNT = 200;
    
    // Create stars with random properties
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Randomize star size
      const sizeClass = Math.random() < 0.6 ? 'small' : (Math.random() < 0.9 ? 'medium' : 'large');
      star.classList.add(sizeClass);
      
      // Set random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      
      // Set random opacity
      const opacity = 0.2 + Math.random() * 0.8;
      star.style.opacity = opacity.toString();
      
      container.appendChild(star);
      
      // Add to stars array for animation
      stars.push({
        x,
        y,
        size: sizeClass === 'small' ? 1 : (sizeClass === 'medium' ? 2 : 3),
        opacity,
        speed: 0.05 + Math.random() * 0.1,
        twinkleSpeed: 0.003 + Math.random() * 0.005,
        twinkleTime: Math.random() * Math.PI * 2
      });
    }
    
    // Animate stars (twinkle effect)
    const animateStars = () => {
      const starElements = container.querySelectorAll('.star');
      
      stars.forEach((star, index) => {
        if (index < starElements.length) {
          // Update twinkle time
          star.twinkleTime += star.twinkleSpeed;
          
          // Calculate new opacity based on sine wave
          const newOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinkleTime));
          
          // Apply new opacity to the HTMLElement
          const element = starElements[index] as HTMLElement;
          element.style.opacity = newOpacity.toString();
        }
      });
      
      requestAnimationFrame(animateStars);
    };
    
    // Handle scroll events for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const starElements = container.querySelectorAll('.star');
      
      starElements.forEach((el, index) => {
        const element = el as HTMLElement;
        const star = stars[index];
        if (!star) return;
        
        // Calculate parallax effect based on star size (bigger stars move slower)
        const parallaxSpeed = star.size === 1 ? 0.3 : star.size === 2 ? 0.2 : 0.1;
        const initialY = star.y;
        
        // Move stars in relation to scroll (small stars move faster for depth effect)
        const newY = (initialY + (window.scrollY * parallaxSpeed * 0.1) % 100);
        element.style.top = `${newY}%`;
        
        // Adjust star brightness based on scroll speed
        const scrollDelta = Math.abs(window.scrollY - scrollY);
        const brightnessBoost = Math.min(scrollDelta * 0.01, 0.3);
        element.style.opacity = (newOpacity + brightnessBoost).toString();
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    const animationId = requestAnimationFrame(animateStars);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [scrollY]);
  
  return <div ref={containerRef} className="star-field"></div>;
};

export default StarField;
