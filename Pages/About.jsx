import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HistoryTimeline from '../Components/about/HistoryTimeline';
import FamilySection from '../Components/home/FamilySection';
import WhoWeAreSection from '../Components/home/WhoWeAreSection';
import OurTeamSection from '../Components/about/OurTeamSection';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Preload the image aggressively before rendering
    const img = new Image();
    const imageUrl = "/Images/Potato%20Flowers.jpg";
    
    // Start loading immediately
    img.src = imageUrl;
    
    img.onload = () => {
      // Image is loaded, set source and mark as loaded
      setImageSrc(imageUrl);
      // Use requestAnimationFrame for smoother transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setImageLoaded(true);
        });
      });
    };
    
    img.onerror = () => {
      // Fallback if image fails - still show something
      setImageSrc(imageUrl);
      setImageLoaded(true);
    };
    
    // Also ensure preload link exists
    if (!document.querySelector(`link[href="${imageUrl}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageUrl;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Container - Always has a solid color to prevent white flash */}
        <div 
          ref={containerRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: '#5a7a2a',
            backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: imageLoaded ? 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            opacity: imageLoaded ? 1 : 0.5,
            willChange: imageLoaded ? 'auto' : 'opacity',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        
        <div className="relative z-10 text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/80 text-sm tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              About Heartland Ag Tech
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Farmer-founded, field-tested, patent-backed technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Family Legacy Section */}
      <FamilySection />

      {/* Our Team Section */}
      <OurTeamSection />

      {/* History Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Our History
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A timeline of our growth and innovation
            </p>
          </div>
          <HistoryTimeline />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Continuously pushing the boundaries of what\'s possible in agricultural technology.'
              },
              {
                title: 'Integrity',
                description: 'Building trust through honest communication and reliable solutions.'
              },
              {
                title: 'Community',
                description: 'Supporting and strengthening the agricultural community we serve.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
