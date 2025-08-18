'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
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
      title: 'PIONIR Gadjah Mada 2025',
      description: 'Website yang memberikan informasi tentang PIONIR Gadjah Mada 2025. Website ini dibangun dengan React, Next.js, dan Tailwind CSS. Terdapat fitur notifikasi yang menggunakan sistem Firebase',
      technologies: ['React', 'Next.js', 'Firebase', 'Docker', 'Tailwind CSS'],
      image: '/images/pionir25.png',
      demoUrl: 'https://pionirgadjahmada25.vercel.app/2025',
      featured: true,
      category: 'website',
    },
    {
      id: 2,
      title: 'Kembara Loka',
      description: 'Website yang berisi map virtual 3D Universitas Gadjah Mada. Fiturnya ada infografis, panorama, dan mode jelajah.',
      technologies: ['Three.js', 'Next.js', 'React', 'Blender'],
      image: '/images/kembaraloka.webp',
      demoUrl: 'https://kembaraloka-v3.vercel.app/kembaraloka/',
      featured: true,
      category: 'website',
    },
    {
      id: 3,
      title: 'Technocorner UGM 2025',
      description: 'Website pendaftaran event robotik di Universitas Gadjah Mada.',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
      image: '/images/tc25.png',
      demoUrl: 'https://technocorner25demo.vercel.app',
      featured: false,
      category: 'website',
    },
    {
      id: 4,
      title: 'FindIT UGM 2025',
      description: 'Website pendaftaran event IT di Universitas Gadjah Mada.',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'Midtrans'],
      image: '/images/fi25.png',
      demoUrl: 'https://find-it-demo.vercel.app/',
      featured: false,
      category: 'website',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Next.js, featuring smooth animations and responsive design.',
      technologies: ['Next.js', 'GSAP', 'Tailwind CSS', 'TypeScript'],
      image: '/images/porto.png',
      demoUrl: 'https://yusufwiamportfolio.vercel.app',
      featured: false,
      category: 'website',
    },
    {
      id: 6,
      title: 'KPU KMTETI 2024',
      description: 'Website pemilihan ketua KMTETI untuk periode 2025.',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'Firebase'],
      image: '/images/kpu24.png',
      demoUrl: 'https://kpu-kmteti-2024.vercel.app',
      githubUrl: 'https://github.com/aevryiam/KPU-KMTETI-2024',
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
    <section id="projects" ref={projectsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-2 flex gap-2">
            {['all', 'website', 'other'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as 'all' | 'website' | 'other')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  filter === filterType
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
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
              className={`project-card bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden">
                {project.image.startsWith('/images/') ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-white text-4xl font-bold">{project.title.charAt(0)}</div>
                )}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold z-10">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
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
