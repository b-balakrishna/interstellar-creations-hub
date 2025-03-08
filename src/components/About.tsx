
import React from 'react';
import { Rocket, Star, Code, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="space-card p-8 relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-space-purple/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-space-blue/20 rounded-full blur-xl"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block relative">
              About Me
              <div className="h-1 w-1/4 bg-space-purple/70 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
            </h2>
            <p className="text-white/60 mt-4 max-w-3xl mx-auto">
              A brief journey through my cosmic development path
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-space-purple">Mission Statement</h3>
              <p className="text-white/80 mb-4">
                I'm a passionate MERN stack developer with 2 years of experience building dynamic and responsive 
                applications. My journey in the digital universe has equipped me with the skills to create 
                efficient, scalable, and user-friendly web experiences.
              </p>
              <p className="text-white/80 mb-4">
                With a background in both frontend and backend technologies, I enjoy creating 
                full-stack applications that provide real value to users. I'm constantly exploring 
                new technologies and approaches to stay at the forefront of web development.
              </p>
              <p className="text-white/80">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
                or expanding my knowledge through continuous learning.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-card p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-space-purple/20 flex items-center justify-center mb-4">
                  <Rocket className="text-space-purple h-7 w-7" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Fast Learner</h4>
                <p className="text-white/70 text-sm">Quickly adapt to new technologies and frameworks</p>
              </div>
              
              <div className="space-card p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-space-purple/20 flex items-center justify-center mb-4">
                  <Star className="text-space-purple h-7 w-7" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Problem Solver</h4>
                <p className="text-white/70 text-sm">Analytical approach to complex challenges</p>
              </div>
              
              <div className="space-card p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-space-purple/20 flex items-center justify-center mb-4">
                  <Code className="text-space-purple h-7 w-7" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Clean Code</h4>
                <p className="text-white/70 text-sm">Focus on maintainability and best practices</p>
              </div>
              
              <div className="space-card p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-space-purple/20 flex items-center justify-center mb-4">
                  <Server className="text-space-purple h-7 w-7" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Full Stack</h4>
                <p className="text-white/70 text-sm">End-to-end development capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
