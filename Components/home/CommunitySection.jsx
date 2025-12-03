import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';
import { Users, Heart, UserCheck } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe in supporting and strengthening the agricultural community.'
  },
  {
    icon: Heart,
    title: 'Local Impact',
    description: 'Making a positive difference in our local communities and beyond.'
  },
  {
    icon: UserCheck,
    title: 'Partnership',
    description: 'Building lasting relationships with farmers and agricultural organizations.'
  }
];

export default function CommunitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
            Our Values
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Community
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're more than a technology company—we're part of the agricultural community, 
            committed to supporting farmers and strengthening our industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 bg-[#7CB342]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#7CB342]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
