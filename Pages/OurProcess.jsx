import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../Components/ui/IntersectionObserver';
import { Search, Settings, TrendingUp, Headphones } from 'lucide-react';
import ProcessPreviewSection from '../Components/home/ProcessPreviewSection';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Assessment',
    description: 'We begin by understanding your current operations, challenges, and goals. Our team conducts a thorough assessment to identify opportunities for improvement and optimization.',
    details: [
      'On-site evaluation',
      'Data collection and analysis',
      'Goal setting and planning',
      'Custom solution design'
    ]
  },
  {
    number: '02',
    icon: Settings,
    title: 'Implementation',
    description: 'Our experienced team works closely with you to seamlessly integrate our technology into your existing workflow. We ensure minimal disruption while maximizing value.',
    details: [
      'System installation',
      'Data migration',
      'Staff training',
      'Workflow integration'
    ]
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Optimization',
    description: 'We continuously monitor your operations and make data-driven adjustments to ensure you\'re getting maximum value from our solutions. Regular reviews help identify new opportunities.',
    details: [
      'Performance monitoring',
      'Data analysis',
      'System tuning',
      'Continuous improvement'
    ]
  },
  {
    number: '04',
    icon: Headphones,
    title: 'Support',
    description: 'Our commitment doesn\'t end after implementation. We provide ongoing support, training, and updates to help you make the most of your investment and stay ahead of the curve.',
    details: [
      '24/7 technical support',
      'Regular updates',
      'Advanced training',
      'Strategic consulting'
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
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
                        src={[
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

      {/* Process Preview Section */}
      <ProcessPreviewSection />

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
