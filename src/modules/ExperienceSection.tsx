'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
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

  const experiences = [
    {
      period: 'March 2025 - August 2025',
      title: 'Frontend Developer',
      company: 'PIONIR Gadjah Mada',
      type: 'Seasonal',
      description: 'Mengembangkan website menggunakan React, Next.js, dan TailwindCSS. Bekerja dalam tim untuk menciptakan solusi digital yang inovatif.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Docker', 'Firebase', 'GSAP', 'Three.js'],
      achievements: [
        'Mengoptimalkan performa aplikasi',
        'Mengembangkan API notifikasi yang digunakan oleh 1000+ users'
      ]
    },
    {
      period: 'October 2024 - June 2025',
      title: 'Backend Developer',
      company: 'Technocorner',
      type: 'Seasonal',
      description: 'Mengembangkan sistem backend website menggunakan Node.js, Express, dan MongoDB. Bekerja dalam tim untuk menciptakan solusi digital yang inovatif.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      achievements: [
        'Mengoptimalkan performa aplikasi',
        'Mengembangkan sistem autentikasi pengguna'
      ]
    },
    {
      period: 'October 2024 - May 2025',
      title: 'Backend Developer',
      company: 'FindIT',
      type: 'Seasonal',
      description: 'Mengembangkan sistem backend website menggunakan Node.js, Express, MongoDB, dan Midtrans. Bekerja dalam tim untuk menciptakan solusi digital yang inovatif.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Midtrans'],
      achievements: [
        'Mengoptimalkan performa aplikasi',
        'Mengembangkan sistem autentikasi pengguna',
        'Mengintegrasikan Midtrans untuk pembayaran'
      ]
    },
    {
      period: 'September 2024 - November 2024',
      title: 'Project Manager',
      company: 'KPU KMTETI',
      type: 'Seasonal',
      description: 'Mengembangkan website voting menggunakan Next.js, TailwindCSS, dan Firebase. Bekerja dalam tim untuk menciptakan solusi digital yang inovatif.',
      technologies: ['React', 'Next.js', 'Firebase'],
      achievements: [
        'Mengoptimalkan performa aplikasi',
        'Mengembangkan sistem autentikasi pengguna',
        'Membuat sistem voting menggunakan Firebase'
      ]
    },
  ];

  const education = [
    {
      period: '2024 - Present',
      title: 'Electrical Engineering',
      institution: 'Universitas Gadjah Mada',
      gpa: '3.27/4.0',
      description: 'Fokus pada Power Systems dan Web Development. Aktif dalam berbagai project dan organisasi kampus.',
      courses: ['Data Structures and Algorithms', 'Linear Algebra', 'Physics']
    },
    {
      period: '2018 - 2021',
      title: 'SMA Jurusan IPA',
      institution: 'SMA Negeri 2 Kota Magelang',
      gpa: '89/100',
      description: 'Fokus pada matematika dan sains. Mulai belajar programming secara otodidak di tahun terakhir.',
      courses: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English']
    }
  ];

  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in technology and education, from learning fundamentals to building real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="experience-card bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="experience-card bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{edu.title}</h4>
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Relevant Courses:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
