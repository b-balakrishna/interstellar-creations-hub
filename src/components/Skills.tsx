
import React from 'react';
import { Globe, Database, Wrench, Layers, GitBranch, Brain } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Globe className="h-6 w-6 text-space-purple" />,
      skills: ["Angular", "RxJs", "React", "Redux", "Zustand", "Storybook", "Electron.js", "TypeScript", "HTML", "CSS", "Bootstrap", "React Native", "Tailwind CSS", "Material-UI", "EJS", "Angular Material"]
    },
    {
      name: "Backend Development",
      icon: <Database className="h-6 w-6 text-space-purple" />,
      skills: ["Node.js", "Express JS", "ASP.NET core", "C#", "OAuth", "RESTful APIs", "Microservices", "Web socket", "Java/Spring Boot", "Go", "MongoDB", "SQL"]
    },
    {
      name: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6 text-space-purple" />,
      skills: ["Git", "Vite", "Postman", "ESLint", "Prettier", "Swagger"]
    },
    {
      name: "Cloud & DevOps",
      icon: <Layers className="h-6 w-6 text-space-purple" />,
      skills: ["Jenkins", "Bash Scripting", "Docker", "AWS Basics(S3, EC2, ECS, Lambda, Cognito, RDS, IAM)"]
    },
    {
      name: "Version Control",
      icon: <GitBranch className="h-6 w-6 text-space-purple" />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
      name: "Soft Skills",
      icon: <Brain className="h-6 w-6 text-space-purple" />,
      skills: ["Critical thinking", "Problem-solving", "Time management", "Teamwork", "Creativity", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-space-purple/20 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full border border-space-blue/10 animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block relative">
            Technical Skills
            <div className="h-1 w-1/3 bg-space-purple/70 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <p className="text-white/60 mt-4 max-w-3xl mx-auto">
            My constellation of technologies, tools and abilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="space-card p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-space-purple/10 transition-all duration-300 animate-float"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${6 + index % 3}s`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 rounded-md bg-space-purple/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <TooltipProvider key={skillIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span 
                          className="skill-tag relative cursor-pointer transition-all duration-300 hover:bg-space-purple/40 hover:scale-105 hover:rotate-0 animate-float"
                          style={{ 
                            animationDelay: `${(skillIndex * 0.1) + (index * 0.3)}s`,
                            animationDuration: `${4 + (skillIndex % 5) + (index % 3)}s`,
                            transform: `rotate(${(skillIndex % 5) - 2}deg) translateX(${(skillIndex % 7) - 3}px) translateY(${(skillIndex % 5) - 2}px)`,
                            position: 'relative',
                            zIndex: 10
                          }}
                        >
                          {skill}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="bg-space-dark border border-space-purple/30 text-white p-3">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="bg-space-purple/20 p-3 rounded-full">
                            {category.icon}
                          </div>
                          <span className="font-medium text-white">{skill}</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
