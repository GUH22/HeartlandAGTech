import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../Components/ui/IntersectionObserver';
import { Eye, Droplets, Settings, Database, CloudRain, LayoutDashboard, X, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    icon: Eye,
    title: 'Machine Vision & Artificial Intelligence',
    description: 'Advanced AI-powered vision systems for real-time quality assessment and automated equipment control.',
    features: [
      'Real-time defect detection, grading, sizing, shape recognition',
      'AI that reduces harvest-time damage by controlling or assisting equipment behavior',
      'Tools for processors and growers to quantify potato quality automatically'
    ],
    images: [
      '/Images/Potato Field.jpg',
      '/Images/Tablet.jpg',
      '/Images/Heartland Workers.jpg'
    ],
    detailDescription: 'N/A'
  },
  {
    icon: Droplets,
    title: 'Patented Irrigation Intelligence Platform',
    description: 'Comprehensive irrigation monitoring system with predictive maintenance capabilities.',
    features: [
      'Sensors that monitor irrigation pivot performance 24/7',
      'Detection of flow issues, drive motor anomalies, end-gun failures, pressure changes',
      'Based on U.S. patents covering predictive maintenance and fertigation integration'
    ],
    images: [
      '/Images/Potato Field.jpg',
      '/Images/Implement.jpg',
      '/Images/Monitor.jpg'
    ],
    detailDescription: 'N/A'
  },
  {
    icon: Settings,
    title: 'Fertigation & Equipment Control',
    description: 'Remote monitoring and control solutions for fertigation systems and field equipment.',
    features: [
      'Remote monitoring and control of fertigation tanks, pumps, valves, and field hardware',
      'Field-ready interface for automation across multiple equipment types'
    ],
    images: [
      '/Images/Implement.jpg',
      '/Images/Monitor.jpg',
      '/Images/Potato Field.jpg'
    ],
    detailDescription: 'N/A'
  },
  {
    icon: Database,
    title: 'Storage Insight Sensor Network',
    description: 'Advanced storage monitoring system for optimal potato storage conditions.',
    features: [
      'Advanced storage monitoring including CO₂, airflow, humidity, micro-climates, temperature',
      '"Digital potato" concepts for sensing inside potato piles',
      'Alerts for hotspots, respiration spikes, and quality risk events'
    ],
    images: [
      '/Images/Monitor.jpg',
      '/Images/Potato Field.jpg',
      '/Images/Farmer with tablet.jpeg'
    ],
    detailDescription: 'N/A'
  },
  {
    icon: CloudRain,
    title: 'Weather & Environmental Monitoring',
    description: 'Farm-ready weather stations providing comprehensive environmental data for decision-making.',
    features: [
      'Farm-ready remote weather stations',
      'Temperature, humidity, wind, freeze detection, micro-climates',
      'Integrates with irrigation and disease management decisions'
    ],
    images: [
      '/Images/Potato Field.jpg',
      '/Images/Potato Flowers.jpg',
      '/Images/Heartland Workers.jpg'
    ],
    detailDescription: 'N/A'
  },
  {
    icon: LayoutDashboard,
    title: 'Platform Integration',
    description: 'Unified platform bringing all your agricultural data together in one place.',
    features: [
      'Unified dashboards',
      'Real-time reporting',
      'Predictive analytics',
      'Cloud & on-premise options',
      'APIs for partners'
    ],
    images: [
      '/Images/Tablet.jpg',
      '/Images/Monitor.jpg',
      '/Images/Heartland Workers.jpg'
    ],
    detailDescription: 'N/A'
  }
];

export default function Products() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    if (!selectedProduct) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => 
          prev === 0 ? selectedProduct.images.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => 
          prev === selectedProduct.images.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProduct]);

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
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow flex flex-col h-full"
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
                  <ul className="space-y-2 mb-6 flex-grow">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#7CB342] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openModal(product)}
                    className="w-full bg-[#7CB342] hover:bg-[#689F38] text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-auto"
                  >
                    View
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <h2 className="text-3xl font-semibold text-gray-900">
                    {selectedProduct.title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  {/* Slideshow */}
                  <div className="relative mb-6">
                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={selectedProduct.images[currentImageIndex]}
                        alt={`${selectedProduct.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80';
                        }}
                      />
                      
                      {/* Navigation Arrows */}
                      {selectedProduct.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}

                      {/* Image Indicators */}
                      {selectedProduct.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProduct.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex
                                  ? 'bg-white'
                                  : 'bg-white/50'
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProduct.detailDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#7CB342] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
