import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';

const timelineEvents = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'Heartland Ag Tech was founded by a family of farmers in Hancock, Wisconsin, with a vision to bring technology to agriculture.'
  },
  {
    year: '2012',
    title: 'First Patent',
    description: 'Received our first patent for innovative field monitoring technology, marking a major milestone in our innovation journey.'
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Expanded operations and began serving farmers across the Midwest, building a reputation for reliable, farmer-focused solutions.'
  },
  {
    year: '2018',
    title: 'Technology Platform Launch',
    description: 'Launched our comprehensive technology platform, integrating field management, storage solutions, and analytics.'
  },
  {
    year: '2020',
    title: 'Community Impact',
    description: 'Strengthened our commitment to the agricultural community through partnerships and local initiatives.'
  },
  {
    year: '2024',
    title: 'Innovation Continues',
    description: 'Continuing to innovate and expand, helping more farmers optimize their operations with cutting-edge technology.'
  }
];

export default function HistoryTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#7CB342]/20" />
          
          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-[#7CB342] rounded-full border-4 border-white shadow-lg" />
                
                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-[#7CB342] font-bold text-lg mb-2">
                    {event.year}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

