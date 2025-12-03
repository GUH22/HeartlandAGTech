import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';

const timelineEvents = [
  {
    year: '1873',
    title: 'Pavelski Family Emigrates from Poland',
    description: 'The Pavelski family begins their journey in America, bringing generations of agricultural knowledge and tradition.'
  },
  {
    year: '1985',
    title: 'Pavelski Enterprises develops Variable Rate Technology',
    description: 'Pavelski Enterprises pioneers Variable Rate Technology, marking an early innovation in precision agriculture.'
  },
  {
    year: '1990',
    title: 'Heartland Farms, Inc. is born',
    description: 'Heartland Farms, Inc. is established, continuing the family legacy in agriculture.'
  },
  {
    year: '2018',
    title: 'Reunion',
    description: 'After a couple decades of developing independently, Russ and Jeremie reunite to tackle some field data collection challenges.'
  },
  {
    year: '2019',
    title: 'Improving Work/Life Balance for the team',
    description: 'Connecting our Fertigation tanks to an iPad App so the team can stay connected during critical growing stages while at home with families.'
  },
  {
    year: '2020',
    title: 'Heartland Ag Tech, Inc Formed',
    description: 'Heartland Ag Tech, Inc. becomes an official entity, formalizing our commitment to agricultural technology innovation.'
  },
  {
    year: '2020',
    title: 'Bruise Study',
    description: 'Use of Lean Six Sigma tools to identify harvest practices leading to excess degradation of original quality.'
  },
  {
    year: '2021',
    title: 'AI Pivot Prognostics',
    description: 'Developed and patented advanced irrigation diagnostics through digital twins and novel instrumentation.'
  },
  {
    year: '2022',
    title: 'HAT Reimagines Dehydration Controls',
    description: 'Revolutionary approach to dehydration control systems, improving efficiency and quality.'
  },
  {
    year: '2022',
    title: 'AI Irrigation Modelling',
    description: 'Deployed Machine Learning tools to better tune irrigation specifications to real world performance.'
  },
  {
    year: '2023',
    title: 'Dehydration Drum Automation',
    description: 'Developed and patented machine vision methods for control of a dehydration drum.'
  },
  {
    year: '2024',
    title: 'AI Potato Sorter',
    description: 'Developed and deployed an AI based optical sorting system to more accurately detect tuber defects specific to a bin/field/variety.'
  }
];

const patentTimelineEvents = [
  {
    year: '2020',
    title: 'Condition based monitoring of irrigation',
    description: 'Patent for condition-based monitoring systems for irrigation equipment.',
    url: 'https://patents.google.com/patent/ZA202306605B/en?assignee=heartland+ag+tech&num=100&oq=heartland+ag+tech'
  },
  {
    year: '2020',
    title: 'Predictive maintenance systems and methods to determine endgun health',
    description: 'Patent for predictive maintenance systems and methods to determine endgun health in irrigation systems.',
    url: 'https://patents.google.com/patent/ZA202212651B/en?assignee=heartland+ag+tech&num=100&oq=heartland+ag+tech'
  },
  {
    year: '2020',
    title: 'Modular kinematic and telemetry system for an irrigation system',
    description: 'Patent for modular kinematic and telemetry systems for irrigation system monitoring and control.',
    url: 'https://patents.google.com/patent/US11490576B2/en?assignee=heartland+ag+tech&num=100&oq=heartland+ag+tech'
  },
  {
    year: '2020',
    title: 'Systems and methods for predictive irrigation system maintenance',
    description: 'Patent for systems and methods enabling predictive maintenance of irrigation systems.',
    url: 'https://patents.google.com/patent/ZA202210527B/en?assignee=heartland+ag+tech&num=100&oq=heartland+ag+tech'
  },
  {
    year: '2021',
    title: 'Determining drive system anomalies based on power and/or current changes in an irrigation system',
    description: 'Patent for detecting drive system anomalies through power and current monitoring in irrigation systems.',
    url: 'https://patents.google.com/patent/ZA202306908B/en?assignee=heartland+ag+tech&num=100&oq=heartland+ag+tech'
  },
  {
    year: '2022',
    title: 'Irrigation system including independent observer integration with fertigation system',
    description: 'Patent for irrigation systems with independent observer integration for fertigation control.',
    url: 'https://patents.google.com/patent/US11889796B2/en?assignee=heartland+ag+tech&num=100&oq=heartland+ag+tech'
  },
  {
    year: '2022',
    title: 'An irrigation maintenance system for determining irrigation valve and booster pump health',
    description: 'Patent for maintenance systems that determine the health of irrigation valves and booster pumps.',
    url: 'https://patents.google.com/patent/WO2024050071A1/en?assignee=heartland+ag+tech&num=100&oq=heartland+ag+tech'
  },
  {
    year: '2023',
    title: 'Non-contact, closed loop feedback for dehydrator control',
    description: 'Patent for non-contact, closed loop feedback systems for dehydrator control.',
    url: 'https://patents.google.com/patent/US20240373898A1/en?assignee=heartland+ag+tech&num=100&oq=heartland+ag+tech'
  }
];

export default function HistoryTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showPatents, setShowPatents] = useState(false);
  const currentEvents = showPatents ? patentTimelineEvents : timelineEvents;

  return (
    <div ref={ref} className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Toggle Buttons */}
        <div className="mb-8 flex justify-center gap-4">
          <button
            onClick={() => setShowPatents(false)}
            className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
              !showPatents
                ? 'bg-[#7CB342] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Farm History
          </button>
          <button
            onClick={() => setShowPatents(true)}
            className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
              showPatents
                ? 'bg-[#7CB342] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Patent History
          </button>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#7CB342]/20" />
          
          {/* Timeline Events */}
          <AnimatePresence mode="wait">
            <motion.div
              key={showPatents ? 'patents' : 'history'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {currentEvents.length > 0 ? (
                currentEvents.map((event, index) => (
                  <motion.div
                    key={`${showPatents ? 'patent' : 'history'}-${index}`}
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
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {event.description}
                      </p>
                      {event.url && (
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[#7CB342] underline hover:text-[#689F38] transition-colors font-medium"
                        >
                          View Patent
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>Patent history timeline coming soon...</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

