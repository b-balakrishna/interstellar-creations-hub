
import React, { useEffect, useRef } from 'react';

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
          
          // Apply new opacity
          starElements[index].style.opacity = newOpacity.toString();
        }
      });
      
      requestAnimationFrame(animateStars);
    };
    
    const animationId = requestAnimationFrame(animateStars);
    
    return () => {
      cancelAnimationFrame(animationId);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return <div ref={containerRef} className="star-field"></div>;
};

export default StarField;
