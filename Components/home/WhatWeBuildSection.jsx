import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';
import { Eye, Droplets, Radio, Cloud } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'AI & Machine Vision Systems',
    description: 'Advanced artificial intelligence and machine vision technology for precise crop monitoring and analysis.'
  },
  {
    icon: Droplets,
    title: 'Patented Irrigation Performance Sensors',
    description: 'Innovative sensor technology to optimize irrigation efficiency and water usage.'
  },
  {
    icon: Radio,
    title: 'Remote Fertigation and Equipment Control',
    description: 'Control and manage your fertigation systems and equipment remotely for maximum efficiency.'
  },
  {
    icon: Cloud,
    title: 'Remote Weather Stations',
    description: 'Real-time weather monitoring and data collection to inform your farming decisions.'
  }
];

export default function WhatWeBuildSection() {
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
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            What We Build
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="text-[#7CB342] font-semibold">Real-world, field-tested technology developed on a functioning potato farm</span>
          </p>
        </motion.div>

        <div>
          {/* First 3 items in a 3-column grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#7CB342]" />
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
          
          {/* Last item centered */}
          <div className="flex flex-wrap justify-center gap-8">
            {features.slice(3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-md"
                >
                  <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#7CB342]" />
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
      </div>
    </section>
  );
}
