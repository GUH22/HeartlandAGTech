import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../src/utils.js';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-gray-300">
        <img 
          src="/Images/Potato Field.jpg"
          alt="Potato Field"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-[#7CB342]/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <span className="text-white/80 text-sm tracking-widest uppercase mb-4 block relative z-10">
            Technology Built by Farmers
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight relative z-10">
            <span className="font-bold">HEARTLAND</span>
            <br />
            <span className="flex items-center justify-center gap-4">
              <div className="h-px bg-white flex-1 max-w-16"></div>
              <span>AG TECH</span>
              <div className="h-px bg-white flex-1 max-w-16"></div>
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight relative z-10 flex items-center justify-center gap-4">
            <div className="h-px bg-white flex-1 max-w-16"></div>
            <span>Data Driven Results Produces Better Potatoes</span>
            <div className="h-px bg-white flex-1 max-w-16"></div>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-2 leading-relaxed relative z-10">
            Unforeseen insights from field to storage
          </p>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed relative z-10">
            We Are Farmer Founded, Field Tested, And Patent Backed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              to={createPageUrl('Products')}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#7CB342] hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-colors"
            >
              Explore Our Technology
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
