import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../src/utils.js';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'Machine Vision & Artificial Intelligence',
    description: 'Advanced AI-powered vision systems for real-time quality assessment and automated equipment control.',
    image: '/Images/Machine.jpg'
  },
  {
    title: 'Patented Irrigation Intelligence Platform',
    description: 'Comprehensive irrigation monitoring system with predictive maintenance capabilities.',
    image: '/Images/IrrigationHome.jpg'
  },
  {
    title: 'Weather & Environmental Monitoring',
    description: 'Farm-ready weather stations providing comprehensive environmental data for decision-making.',
    image: '/Images/WeatherHome.jpg'
  }
];

export default function FeaturedSolutionsSection() {
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
            Featured Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Our Technology Platform
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions designed to optimize every aspect of your operation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img 
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {solution.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <Link
                  to={createPageUrl('Products')}
                  className="inline-flex items-center gap-2 text-[#7CB342] hover:gap-4 transition-all font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
