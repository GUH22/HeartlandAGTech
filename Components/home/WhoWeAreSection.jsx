import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';

export default function WhoWeAreSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
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
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Heartland Ag Tech is a farmer-founded technology company dedicated to 
              revolutionizing how farmers manage their operations. We combine decades of 
              farming experience with machine vision, AI, storage-monitoring sensors, and 
              patented irrigation diagnostics to enhance potato quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Based in Hancock, Wisconsin, we understand the challenges farmers face 
              because we've lived them. Our solutions are built by farmers, for farmers, 
              ensuring they're practical, reliable, and truly make a difference.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/Images/Farmer%20with%20tablet.jpeg"
              alt="Farmer with tablet in farm field"
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
  );
}
