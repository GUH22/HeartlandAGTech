import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    title: "Farm Landscape",
    category: "Farm"
  },
  {
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    title: "Planting Season",
    category: "Operations"
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    title: "Growing Fields",
    category: "Farm"
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    title: "Storage Facility",
    category: "Facilities"
  },
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    title: "Team at Work",
    category: "Team"
  },
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    title: "Aerial View",
    category: "Farm"
  },
  {
    src: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&q=80",
    title: "Sunset Fields",
    category: "Farm"
  },
  {
    src: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=800&q=80",
    title: "Harvest Time",
    category: "Operations"
  },
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    title: "Irrigation System",
    category: "Technology"
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    title: "Community Event",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    title: "Technology",
    category: "Technology"
  },
  {
    src: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    title: "Weather Station",
    category: "Technology"
  }
];

const categories = ["All", "Farm", "Operations", "Facilities", "Team", "Technology", "Community"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxImage(filteredImages[index]);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
            alt="Gallery"
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
              Life at Heartland
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A glimpse into our daily operations and community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#7CB342] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#7CB342]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-square overflow-hidden cursor-pointer group relative"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium">{image.title}</p>
                      <p className="text-white/70 text-sm">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.img
              key={lightboxImage.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-6 text-center text-white">
              <p className="text-lg font-medium">{lightboxImage.title}</p>
              <p className="text-white/70">{lightboxIndex + 1} / {filteredImages.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-[#7CB342]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Want to See More?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Follow us on social media for more photos and updates from the farm!
          </p>
          <a 
            href="https://www.facebook.com/HeartlandFarmsWI/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#7CB342] hover:bg-gray-100 px-10 py-4 text-base font-semibold transition-colors"
          >
            Follow Us on Facebook
          </a>
        </div>
      </section>
    </main>
  );
}
