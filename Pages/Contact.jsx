import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../Components/ui/IntersectionObserver';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            alt="Contact"
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
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We'd love to hear from you and answer any questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-light mb-6 text-gray-900">Send us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-[#7CB342] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-[#7CB342] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-[#7CB342] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-[#7CB342] focus:border-transparent outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#7CB342] text-white hover:bg-[#689F38] px-8 py-4 text-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-light mb-6 text-gray-900">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#7CB342]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Address</h3>
                    <p className="text-gray-700">
                      907 3rd Avenue<br />
                      Hancock, WI 54943
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#7CB342]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Phone</h3>
                    <a href="tel:+17152495555" className="text-gray-700 hover:text-[#7CB342] transition-colors">
                      715-249-5555
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#7CB342]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Email</h3>
                    <a href="mailto:info@heartlandagtech.com" className="text-gray-700 hover:text-[#7CB342] transition-colors">
                      info@heartlandagtech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7CB342]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#7CB342]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
