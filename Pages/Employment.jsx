import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../Components/ui/IntersectionObserver';
import { useLocation } from 'react-router-dom';
import { Briefcase, Users, Heart, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Opportunities for professional development and advancement in a growing company.'
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Work with passionate, dedicated professionals who share your commitment to agriculture.'
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We value your time and offer flexible schedules to support work-life balance.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Be part of cutting-edge technology development in the agricultural industry.'
  }
];

const positions = [
  {
    title: 'Software Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hancock, WI / Remote'
  },
  {
    title: 'Agricultural Technology Specialist',
    department: 'Field Operations',
    type: 'Full-time',
    location: 'Hancock, WI'
  },
  {
    title: 'Customer Success Manager',
    department: 'Sales & Support',
    type: 'Full-time',
    location: 'Hancock, WI / Remote'
  }
];

export default function Employment() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [heroImageSrc, setHeroImageSrc] = useState(null);
  const heroContainerRef = useRef(null);
  const location = useLocation();

  // Preload hero image and reset on route change
  useEffect(() => {
    setHeroImageLoaded(false);
    const img = new Image();
    const imageUrl = "/Images/Employment.jpg";
    
    img.src = imageUrl;
    
    img.onload = () => {
      setHeroImageSrc(imageUrl);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setHeroImageLoaded(true);
        });
      });
    };
    
    img.onerror = () => {
      setHeroImageSrc(imageUrl);
      setHeroImageLoaded(true);
    };
    
    if (!document.querySelector(`link[href="${imageUrl}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageUrl;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  }, [location.pathname]);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div 
          ref={heroContainerRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: '#5a7a2a',
            backgroundImage: heroImageSrc ? `url(${heroImageSrc})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: heroImageLoaded ? 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            opacity: heroImageLoaded ? 1 : 0.5,
            willChange: heroImageLoaded ? 'auto' : 'opacity',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        />
        <div className="absolute inset-0 bg-[#7CB342]/70 z-[1]" />
        
        <div className="relative z-10 text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: heroImageLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: heroImageLoaded ? 0.2 : 0 }}
          >
            <span className="text-white/80 text-sm tracking-widest uppercase mb-4 block">
              Join Our Team
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Employment
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Be part of a team that's transforming agriculture through technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work Here */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              Why Heartland
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join a team that's passionate about agriculture and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#7CB342]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#7CB342]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              Open Positions
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our current job openings and find your next opportunity
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                  <a
                    href="mailto:careers@heartlandagtech.com?subject=Application for {position.title}"
                    className="bg-[#7CB342] text-white hover:bg-[#689F38] px-6 py-3 font-semibold transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <a
              href="mailto:careers@heartlandagtech.com"
              className="inline-block bg-[#7CB342] text-white hover:bg-[#689F38] px-8 py-4 text-lg font-semibold transition-colors"
            >
              Send Us Your Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
