import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';
import { Leaf, Droplets, Recycle } from 'lucide-react';

const practices = [
  {
    icon: Leaf,
    title: 'Sustainable Farming',
    description: 'Promoting practices that protect the environment while maintaining productivity.'
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Optimizing water usage through smart irrigation and monitoring systems.'
  },
  {
    icon: Recycle,
    title: 'Resource Efficiency',
    description: 'Reducing waste and maximizing the efficiency of all farm resources.'
  }
];

export default function SustainabilitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Sustainability
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Building a sustainable future for agriculture through innovative technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#7CB342]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#7CB342]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {practice.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {practice.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
