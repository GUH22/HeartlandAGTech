import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../Components/ui/IntersectionObserver';
import { Users, Heart, UserCheck, Award } from 'lucide-react';

const initiatives = [
  {
    icon: Users,
    title: 'Local Partnerships',
    description: 'We partner with local agricultural organizations and educational institutions to support the farming community.'
  },
  {
    icon: Heart,
    title: 'Community Events',
    description: 'We sponsor and participate in community events, fairs, and agricultural shows throughout the region.'
  },
  {
    icon: UserCheck,
    title: 'Farmer Support',
    description: 'We provide resources, training, and support to help farmers succeed and grow their operations.'
  },
  {
    icon: Award,
    title: 'Education',
    description: 'We offer educational programs and workshops to share knowledge and best practices with the agricultural community.'
  }
];

export default function Community() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
            alt="Community"
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
              Our Commitment
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Community
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Supporting and strengthening the agricultural community we serve
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              Giving Back
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Community Initiatives
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're committed to making a positive impact in our community and the agricultural industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#7CB342]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#7CB342]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {initiative.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
                Our Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
                Making a Difference
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Heartland Ag Tech, we believe that our success is measured not just by 
                our business achievements, but by the positive impact we make in our community. 
                We're proud to support local farmers, agricultural education, and community 
                initiatives that strengthen the agricultural industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From sponsoring local events to providing educational resources, we're 
                committed to giving back to the community that has supported us throughout 
                our journey.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                alt="Community Impact"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#7CB342] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Interested in partnering with us or learning more about our community initiatives? 
            We'd love to hear from you.
          </p>
          <a
            href="mailto:info@heartlandagtech.com"
            className="inline-block bg-white text-[#7CB342] hover:bg-gray-100 px-10 py-4 text-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
