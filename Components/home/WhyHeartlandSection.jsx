import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Farmer-founded with real-world experience',
  'Field-tested solutions that actually work',
  'Patent-backed innovative technology',
  'Comprehensive support and training',
  'Developed on a real potato farm',
  'Reduced defects and protected quality',
  'Reliable, rugged, farm-tested solutions',
  'Continuous innovation and updates'
];

export default function WhyHeartlandSection() {
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
          <div className="relative">
            <img 
              src="/Images/Heartland Workers.jpg"
              alt="Heartland Workers"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl bg-gray-200"
              onError={(e) => {
                console.error('Failed to load image:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div>
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Why Heartland
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're not just another tech company. We're farmers who understand your 
              challenges and have built solutions that address real problems. Our 
              technology is backed by patents and proven in the field.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
