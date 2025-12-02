import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../src/utils.js';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Assessment',
    description: 'We evaluate your current operations and identify opportunities for improvement.'
  },
  {
    number: '02',
    title: 'Implementation',
    description: 'Our team works with you to seamlessly integrate our technology into your workflow.'
  },
  {
    number: '03',
    title: 'Optimization',
    description: 'Continuous monitoring and adjustments ensure you get maximum value from our solutions.'
  },
  {
    number: '04',
    title: 'Support',
    description: 'Ongoing training and support help you make the most of your investment.'
  }
];

export default function ProcessPreviewSection() {
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
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Our Process
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            A proven approach to transforming your agricultural operations
          </p>
          <Link
            to={createPageUrl('OurProcess')}
            className="inline-flex items-center gap-2 text-[#7CB342] hover:gap-4 transition-all font-semibold text-lg"
          >
            Learn More About Our Process
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl font-light text-[#7CB342]/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
