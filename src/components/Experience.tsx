
import React from 'react';
import { CalendarDays, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      period: "January 2023 - Present",
      description: [
        "Lead the development of a React-based dashboard with real-time data visualization",
        "Implemented state management using Redux and optimized application performance",
        "Collaborated with UX designers to improve user interface and experience",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Redux", "TypeScript", "Tailwind CSS", "Chart.js"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      location: "Austin, TX",
      period: "June 2021 - December 2022",
      description: [
        "Developed and maintained multiple web applications using the MERN stack",
        "Created RESTful APIs with Node.js and Express for client-server communication",
        "Implemented authentication and authorization using JWT and OAuth",
        "Optimized database queries and improved application performance"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Docker"]
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Solutions",
      location: "Remote",
      period: "January 2021 - May 2021",
      description: [
        "Assisted in developing responsive web applications using React and Bootstrap",
        "Contributed to backend development with Node.js and Express",
        "Fixed bugs and implemented new features in existing applications",
        "Participated in daily stand-up meetings and sprint planning"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block relative">
            Work Experience
            <div className="h-1 w-1/3 bg-space-purple/70 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <p className="text-white/60 mt-4 max-w-3xl mx-auto">
            My professional journey through the tech galaxy
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-space-purple/30 transform md:translate-x-[-50%] hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-space-purple transform md:translate-x-[-50%] z-10 shadow-glow-sm hidden md:block"></div>
              
              <div className={`md:w-1/2 space-card p-6 md:p-8 relative ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                {/* Timeline Connector */}
                <div className={`absolute top-6 w-8 h-1 bg-space-purple/30 hidden md:block ${
                  index % 2 === 0 ? 'right-0' : 'left-0'
                }`}></div>
                
                <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">{exp.title}</h3>
                  <div className="bg-space-purple/10 px-3 py-1 rounded-full text-space-purple text-sm font-medium">
                    <Briefcase className="inline-block mr-1 h-4 w-4" />
                    {exp.company}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-white/70 text-sm">
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 text-space-purple" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-space-purple" />
                    {exp.location}
                  </div>
                </div>
                
                <ul className="mb-4 list-disc pl-5 text-white/80 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-space-purple/10 text-space-purple/90 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
