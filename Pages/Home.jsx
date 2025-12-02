import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/Components/home/HeroSection';
import WhatWeBuildSection from '@/Components/home/WhatWeBuildSection';
import WhyHeartlandSection from '@/Components/home/WhyHeartlandSection';
import FeaturedSolutionsSection from '@/Components/home/FeaturedSolutionsSection';
import SustainabilitySection from '@/Components/home/SustainabilitySection';
import CommunitySection from '@/Components/home/CommunitySection';
import TechnologySection from '@/Components/home/TechnologySection';
import CTASection from '@/Components/home/CTASection';
import { useInView } from '../Components/ui/IntersectionObserver';

export default function Home() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main>
      <HeroSection />
      {/* Mission Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
                Empowering Farmers Through Technology
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Heartland Ag Tech, we believe that technology should serve farmers, 
                not complicate their work. Our mission is to provide innovative, 
                practical solutions that help farmers optimize their operations, 
                increase efficiency, and achieve better results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We combine deep agricultural knowledge with cutting-edge technology 
                to create tools that farmers actually want to use—tools that make 
                a real difference in their daily operations.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/Images/Deal.avif"
                alt="Our Mission"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl bg-gray-200"
                onError={(e) => {
                  console.error('Failed to load image:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      <WhatWeBuildSection />
      <WhyHeartlandSection />
      <FeaturedSolutionsSection />
      <SustainabilitySection />
      <TechnologySection />
      <CommunitySection />
      <CTASection />
    </main>
  );
}

