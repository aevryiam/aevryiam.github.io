'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'website' | 'other';
}

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<'all' | 'website' | 'other'>('all');

  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      image: '/api/placeholder/400/250',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/project',
      featured: true,
      category: 'website',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with Next.js and Firebase. Real-time updates and team collaboration features.',
      technologies: ['Next.js', 'Firebase', 'TypeScript', 'Chakra UI'],
      image: '/api/placeholder/400/250',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/project',
      featured: true,
      category: 'website',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps. Built with React and OpenWeather API.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      image: '/api/placeholder/400/250',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/project',
      featured: false,
      category: 'other',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Next.js, featuring smooth animations and responsive design.',
      technologies: ['Next.js', 'GSAP', 'Tailwind CSS', 'TypeScript'],
      image: '/api/placeholder/400/250',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/project',
      featured: false,
      category: 'website',
    },
  ];

  useEffect(() => {
    const projectElements = document.querySelectorAll('.project-card');
    
    projectElements.forEach((element, index) => {
      gsap.fromTo(element,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => {
    return project.category === filter;
  });

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-2 flex gap-2">
            {['all', 'website', 'other'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as 'all' | 'website' | 'other')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  filter === filterType
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">{project.title.charAt(0)}</div>
                {/* Replace with actual image */}
                {/* <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                /> */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
