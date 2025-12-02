import React from 'react';
import { motion } from 'framer-motion';
import HistoryTimeline from '../Components/about/HistoryTimeline';
import FamilySection from '../Components/home/FamilySection';
import WhoWeAreSection from '../Components/home/WhoWeAreSection';

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
            alt="About Us"
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
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              About Heartland
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Farmer-founded, field-tested, patent-backed technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Family Legacy Section */}
      <FamilySection />

      {/* History Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Our History
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A timeline of our growth and innovation
            </p>
          </div>
          <HistoryTimeline />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Continuously pushing the boundaries of what\'s possible in agricultural technology.'
              },
              {
                title: 'Integrity',
                description: 'Building trust through honest communication and reliable solutions.'
              },
              {
                title: 'Community',
                description: 'Supporting and strengthening the agricultural community we serve.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
