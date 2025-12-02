import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../ui/IntersectionObserver';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/Images/Old%20heartland.jpeg', alt: 'Old Heartland' },
  { src: '/Images/Old%20heartland2.jpeg', alt: 'Old Heartland 2' },
  { src: '/Images/Old%20Heartland3.jpeg', alt: 'Old Heartland 3' },
  { src: '/Images/New%20Heartland.jpg', alt: 'New Heartland' }
];

export default function FamilySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const directionRef = useRef(1);

  const goToPrevious = () => {
    directionRef.current = -1;
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      // Handle wrap-around: if going from 0 to last, it's actually backward
      if (prevIndex === 0 && newIndex === images.length - 1) {
        directionRef.current = -1;
      }
      return newIndex;
    });
  };

  const goToNext = () => {
    directionRef.current = 1;
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      // Handle wrap-around: if going from last to 0, it's actually forward
      if (prevIndex === images.length - 1 && newIndex === 0) {
        directionRef.current = 1;
      }
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex((prevIndex) => {
      directionRef.current = index > prevIndex ? 1 : -1;
      // Handle wrap-around
      if (prevIndex === images.length - 1 && index === 0) {
        directionRef.current = 1;
      } else if (prevIndex === 0 && index === images.length - 1) {
        directionRef.current = -1;
      }
      return index;
    });
  };

  return (
    <section ref={ref} className="py-24 bg-[#7CB342] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="text-white/80 text-sm tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              A Family Legacy
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Heartland Ag Tech is built on generations of farming experience. 
              We understand the land, the crops, and the challenges because 
              agriculture is in our blood.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Our family has been farming in Wisconsin for decades, and we've 
              seen firsthand how technology can transform operations. That's why 
              we've dedicated ourselves to creating solutions that work for real 
              farmers, in real conditions.
            </p>
          </div>
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-lg shadow-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${currentIndex}-${directionRef.current}`}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  initial={{ opacity: 0, x: directionRef.current > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: directionRef.current > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Left Arrow */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Right Arrow */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
