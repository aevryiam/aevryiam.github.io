'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components';

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
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

  const articles = [
    {
      id: 1,
      title: 'Getting Started with Next.js 15',
      excerpt: 'Learn how to build modern web applications with the latest features in Next.js 15, including App Router and Server Components.',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Web Development',
      image: '/api/placeholder/300/200',
      tags: ['Next.js', 'React', 'JavaScript'],
      featured: true
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'Deep dive into Tailwind CSS utility classes and learn how to create beautiful, responsive designs efficiently.',
      date: '2024-12-10',
      readTime: '7 min read',
      category: 'CSS',
      image: '/api/placeholder/300/200',
      tags: ['Tailwind CSS', 'CSS', 'Design'],
      featured: false
    },
    {
      id: 3,
      title: 'GSAP Animations for Beginners',
      excerpt: 'Create stunning web animations with GSAP (GreenSock Animation Platform) and enhance user experience.',
      date: '2024-12-05',
      readTime: '6 min read',
      category: 'Animation',
      image: '/api/placeholder/300/200',
      tags: ['GSAP', 'Animation', 'JavaScript'],
      featured: false
    },
    {
      id: 4,
      title: 'Building RESTful APIs with Node.js',
      excerpt: 'Learn to create scalable and efficient APIs using Node.js, Express, and best practices for backend development.',
      date: '2024-11-28',
      readTime: '8 min read',
      category: 'Backend',
      image: '/api/placeholder/300/200',
      tags: ['Node.js', 'Express', 'API'],
      featured: false
    }
  ];

  return (
    <section id="blog" ref={blogRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge and experiences about web development, programming tips, and technology insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`blog-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                article.featured && index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Article Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">{article.title.charAt(0)}</div>
                {/* Replace with actual image */}
                {/* <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                /> */}
                {article.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{new Date(article.date).toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // In a real app, this would navigate to the full article
                    window.open(`/blog/${article.id}`, '_blank');
                  }}
                  className="w-full"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Articles */}
        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              // In a real app, this would navigate to the blog page
              window.open('/blog', '_blank');
            }}
          >
            View All Articles
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 opacity-90">
            Subscribe to my newsletter for the latest articles, tips, and insights about web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              variant="secondary"
              size="md"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
