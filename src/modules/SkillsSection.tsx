'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          delay: index * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  const skills = [
    { name: 'JavaScript', icon: '/images/icons/js.png', category: 'Frontend' },
    { name: 'TypeScript', icon: '/images/icons/typescript.png', category: 'Frontend' },
    { name: 'React', icon: '/images/icons/react.png', category: 'Frontend' },
    { name: 'Next.js', icon: '/images/icons/nextjs.png', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '/images/icons/tailwind.png', category: 'Frontend' },
    { name: 'Three.js', icon: '/images/icons/threejs.png', category: 'Frontend' },
    { name: 'Node.js', icon: '/images/icons/nodejs.png', category: 'Backend' },
    { name: 'Express.js', icon: '/images/icons/express.png', category: 'Backend' },    
    { name: 'Bun', icon: '/images/icons/bun.png', category: 'Backend' },
    { name: 'Python', icon: '/images/icons/python.png', category: 'Data Science' },
    { name: 'Firebase', icon: '/images/icons/firebase.png', category: 'Database' },
    { name: 'MongoDB', icon: '/images/icons/mongodb.png', category: 'Database' },
    { name: 'Git', icon: '/images/icons/git.png', category: 'Tools' },
    { name: 'Docker', icon: '/images/icons/docker.png', category: 'Tools' },
    { name: 'Blender', icon: '/images/icons/blender.png', category: 'Tools' },
    { name: 'Figma', icon: '/images/icons/figma.png', category: 'Tools' },
    { name: 'Vercel', icon: '/images/icons/vercel.png', category: 'Cloud' },
  ];

  // const services = [
  //   {
  //     icon: '🌐',
  //     title: 'Web Development',
  //     description: 'Modern, responsive websites using latest technologies like React, Next.js, and Node.js.',
  //     features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Cross-browser Compatibility']
  //   },
  //   {
  //     icon: '📱',
  //     title: 'Mobile Development',
  //     description: 'Cross-platform mobile applications using React Native and modern mobile frameworks.',
  //     features: ['Cross-platform', 'Native Performance', 'Push Notifications', 'Offline Support']
  //   },
  //   {
  //     icon: '⚙️',
  //     title: 'Backend Development',
  //     description: 'Robust backend systems with APIs, databases, and cloud infrastructure.',
  //     features: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Deployment']
  //   }
  // ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are my technical skills and the services I can provide to help bring your ideas to life.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <Image 
                      src={skill.icon} 
                      alt={`${skill.name} icon`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{skill.name}</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        {/* <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
