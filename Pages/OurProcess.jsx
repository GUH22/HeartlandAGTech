import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../Components/ui/IntersectionObserver';
import { Search, Settings, TrendingUp, Headphones } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Assessment – Grounded in Lean & Six Sigma',
    description: 'We start by treating your farm or facility like a system. Using Lean and Six Sigma methods, we map how work actually happens today, where time is being wasted, and where breakdowns or inconsistencies cost you money. The goal is simple: only pursue technology that clearly pays its way in your operation.',
    details: [
      'On-site walkthroughs with your team and equipment',
      'Data collection on downtime, variability, and pinch points',
      'Clear targets for consistency, uptime, and time savings',
      'Custom solution design focused on measurable ROI'
    ]
  },
  {
    number: '02',
    icon: Settings,
    title: 'Implementation – Built Around Your Operation',
    description: 'Our team works side-by-side with you to plug new tools into the way you already farm, not the other way around. Using Lean thinking, we keep the rollout simple, standard, and repeatable so your people can run it confidently day-to-day.',
    details: [
      'System and sensor installation with minimal disruption',
      'Clean data setup and migration from existing systems',
      'Practical, hands-on staff training in plain language',
      'Workflow integration that keeps jobs consistent and efficient'
    ]
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Optimization – Continuous Improvement, Not One-and-Done',
    description: 'Once the technology is in place, we don\'t just walk away. Using Six Sigma discipline, we monitor performance, look for variation, and make targeted adjustments that keep things running smoothly and predictably season after season.',
    details: [
      'Ongoing performance monitoring for uptime and consistency',
      'Data analysis to spot early warning signs and failure patterns',
      'System tuning to reduce unscheduled maintenance and surprises',
      'Continuous improvement cycles to lock in better, repeatable results'
    ]
  },
  {
    number: '04',
    icon: Headphones,
    title: 'Support – Long-Term Partnership, Lean Mindset',
    description: 'Our commitment is long-term. We support your team with the same Lean and Six Sigma approach we use internally: clear standards, fast problem-solving, and a focus on making your time more valuable, not more complicated.',
    details: [
      '24/7 technical support when something isn\'t behaving',
      'Regular software and firmware updates to stay ahead of issues',
      'Advanced training to help your team use data, not just collect it',
      'Strategic reviews to align tech decisions with your farm\'s goals'
    ]
  }
];

export default function OurProcess() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/Images/OurProcess.jpg"
            alt="Our Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#7CB342]/70" />
        </div>
        
        <div className="relative text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/80 text-sm tracking-widest uppercase mb-4 block">
              How We Work
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Our Process
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A proven approach to transforming your agricultural operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              Step by Step
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From initial assessment to ongoing support, we're with you every step of the way
            </p>
          </motion.div>

          <div className="space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'md:order-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-[#7CB342]/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#7CB342]" />
                      </div>
                      <div>
                        <div className="text-4xl font-light text-[#7CB342]/30 mb-2">
                          {step.number}
                        </div>
                        <h3 className="text-3xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <span className="text-[#7CB342] mt-1">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? '' : 'md:order-1'}>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-200">
                      <img 
                        src={index === 1 ? '/Images/Implement.jpg' : index === 2 ? '/Images/Monitor.jpg' : [
                          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
                          'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
                          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                          'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80'
                        ][index] || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80'}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80';
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#7CB342] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how our process can help transform your agricultural operations.
          </p>
          <a
            href="mailto:info@heartlandagtech.com"
            className="inline-block bg-white text-[#7CB342] hover:bg-gray-100 px-10 py-4 text-lg font-semibold transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
