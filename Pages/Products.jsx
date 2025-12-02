import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../Components/ui/IntersectionObserver';
import { BarChart3, Database, TrendingUp, Shield, Wifi, Cloud } from 'lucide-react';

const products = [
  {
    icon: BarChart3,
    title: 'Field Management System',
    description: 'Comprehensive field monitoring and management tools with real-time data collection and analysis.',
    features: ['Real-time monitoring', 'Weather integration', 'Crop health tracking', 'Yield prediction']
  },
  {
    icon: Database,
    title: 'Storage Solutions',
    description: 'Advanced storage management systems to optimize your grain storage operations.',
    features: ['Inventory tracking', 'Temperature monitoring', 'Moisture control', 'Automated alerts']
  },
  {
    icon: TrendingUp,
    title: 'Analytics Platform',
    description: 'Powerful analytics and reporting tools to turn your data into actionable insights.',
    features: ['Custom reports', 'Data visualization', 'Trend analysis', 'Performance metrics']
  },
  {
    icon: Shield,
    title: 'IoT Integration',
    description: 'Seamlessly connect sensors and devices across your operation for unified monitoring.',
    features: ['Sensor integration', 'Device management', 'Data aggregation', 'Remote access']
  },
  {
    icon: Cloud,
    title: 'Cloud Platform',
    description: 'Secure cloud-based platform accessible from anywhere, anytime.',
    features: ['Cloud storage', 'Mobile access', 'Data backup', 'Multi-user support']
  },
  {
    icon: Wifi,
    title: 'Mobile App',
    description: 'Manage your farm operations on-the-go with our mobile-optimized application.',
    features: ['Mobile dashboard', 'Push notifications', 'Offline mode', 'Quick actions']
  }
];

export default function Products() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
            alt="Products"
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
              Our Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Products & Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive technology solutions for modern agriculture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#7CB342] text-sm tracking-widest uppercase mb-4 block">
              Technology Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Integrated solutions designed to optimize every aspect of your agricultural operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#7CB342]/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#7CB342]" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#7CB342] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            Contact us to learn more about our products and how they can benefit your operation.
          </p>
          <a
            href="mailto:info@heartlandagtech.com"
            className="inline-block bg-white text-[#7CB342] hover:bg-gray-100 px-10 py-4 text-lg font-semibold transition-colors"
          >
            Request a Demo
          </a>
        </div>
      </section>
    </main>
  );
}
