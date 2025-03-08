
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product catalog, user authentication, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      image: "https://via.placeholder.com/600x400?text=E-Commerce+App",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
      technologies: ["Angular", "TypeScript", "Express", "MongoDB", "Socket.io"],
      image: "https://via.placeholder.com/600x400?text=Task+Manager",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Real-time Chat Application",
      description: "A messaging platform with real-time communication, user presence, and message persistence.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
      image: "https://via.placeholder.com/600x400?text=Chat+App",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application displaying current conditions and forecasts with location-based services.",
      technologies: ["React", "TypeScript", "Weather API", "Tailwind CSS"],
      image: "https://via.placeholder.com/600x400?text=Weather+App",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Content Management System",
      description: "A custom CMS for managing digital content with role-based access control and workflow management.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
      image: "https://via.placeholder.com/600x400?text=CMS+System",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Personal Finance Tracker",
      description: "An application for tracking income, expenses, and budgeting with data visualization.",
      technologies: ["React", "TypeScript", "Chart.js", "Express", "MongoDB"],
      image: "https://via.placeholder.com/600x400?text=Finance+Tracker",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block relative">
            Featured Projects
            <div className="h-1 w-1/3 bg-space-purple/70 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <p className="text-white/60 mt-4 max-w-3xl mx-auto">
            Explore my digital creations across the development universe
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`space-card overflow-hidden group hover:shadow-lg hover:shadow-space-purple/20 transition-all duration-500 animate-float ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${8 + index % 4}s`,
                transform: `rotate(${(index % 3) - 1}deg)`
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-space-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 bg-space-purple/90 rounded-full hover:bg-space-purple transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 bg-space-purple/90 rounded-full hover:bg-space-purple transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-space-purple/10 text-space-purple/90 px-2 py-1 rounded-full"
                      style={{ 
                        animationDelay: `${(techIndex * 0.1) + (index * 0.2)}s`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="link" 
                    className="p-0 text-space-purple hover:text-space-accent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="mr-1 h-4 w-4" /> Code
                    </a>
                  </Button>
                  
                  <Button 
                    variant="link" 
                    className="p-0 text-space-purple hover:text-space-accent"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
