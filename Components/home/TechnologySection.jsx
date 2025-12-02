import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';
import { Cpu, Wifi, Cloud, Smartphone } from 'lucide-react';

const techFeatures = [
  {
    icon: Cpu,
    title: 'Advanced Processing',
    description: 'Powerful algorithms analyze your data in real-time for instant insights.'
  },
  {
    icon: Wifi,
    title: 'IoT Integration',
    description: 'Seamlessly connect with sensors and devices across your operation.'
  },
  {
    icon: Cloud,
    title: 'Cloud-Based',
    description: 'Access your data anywhere, anytime with secure cloud storage.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Manage your farm on-the-go with our mobile-optimized platform.'
  }
];

export default function TechnologySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              Innovation
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Cutting-Edge Technology
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our platform leverages the latest in agricultural technology, including 
              IoT sensors, cloud computing, and advanced analytics. We combine these 
              technologies with our deep farming knowledge to create solutions that 
              truly make a difference.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every feature is designed with farmers in mind—simple to use, reliable 
              in the field, and powerful enough to transform your operations.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              alt="Technology"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl bg-gray-200"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-[500px] bg-gray-200 rounded-lg shadow-xl flex items-center justify-center">
              <p className="text-gray-400">Image unavailable</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#7CB342]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#7CB342]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
