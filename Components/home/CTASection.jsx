import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../src/utils.js';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-[#7CB342] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join farmers who are already seeing results with Heartland Ag Tech. 
            Get in touch to learn how we can help optimize your agricultural operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#7CB342] hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+17152495555"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/80">
            <a 
              href="tel:+17152495555"
              className="inline-flex items-center justify-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              715-249-5555
            </a>
            <a 
              href="mailto:info@heartlandag.tech"
              className="inline-flex items-center justify-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@heartlandag.tech
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
