'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aboutElement = aboutRef.current;
    const imageElement = imageRef.current;
    const contentElement = contentRef.current;

    if (aboutElement && imageElement && contentElement) {
      gsap.fromTo(imageElement,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: aboutElement,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(contentElement,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: aboutElement,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const skills = [
    'JavaScript & TypeScript',
    'React & Next.js',
    'Express and Bun',
    'Python',
    'Supabase & MongoDB',
    'Docker',
    'Git & GitHub',
    'Tailwind CSS',
    'Arduino & ESP32'
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and my skills in programming and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div ref={imageRef} className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                YN
              </div>
              {/* You can replace this with an actual image */}
              {/* <img 
                src="/path-to-your-photo.jpg" 
                alt="Your Name" 
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
              /> */}
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hello! I&apos;m a passionate engineer
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Saya adalah seorang mahasiswa yang passionate dalam dunia teknologi dan pengembangan software. 
                Dengan latar belakang pendidikan di bidang informatika, saya terus belajar dan mengembangkan 
                kemampuan dalam berbagai teknologi modern.
              </p>
              
              <p>
                Saya memiliki pengalaman dalam mengembangkan aplikasi web menggunakan teknologi terkini seperti 
                React, Next.js, dan Node.js. Selain itu, saya juga tertarik dengan pengembangan mobile dan 
                teknologi cloud computing.
              </p>
              
              <p>
                Selain coding, saya juga aktif dalam berbagai kegiatan organisasi kampus dan senang berbagi 
                ilmu dengan sesama mahasiswa. Saya percaya bahwa belajar adalah proses yang tidak pernah berhenti.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">My Skills</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 px-4 py-2 rounded-lg text-center text-gray-700 font-medium hover:bg-blue-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">1+</div>
                <div className="text-sm text-gray-600">Years Learning</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">∞</div>
                <div className="text-sm text-gray-600">Curiosity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
