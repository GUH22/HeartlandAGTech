import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './src/utils.js';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Facebook } from 'lucide-react';
import { Button } from "./Components/ui/button";
import Logo from "./Components/ui/Logo";

console.log('Layout.jsx: Loading...');

const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'About', page: 'About' },
  { name: 'Our Process', page: 'OurProcess' },
  { name: 'Products', page: 'Products' },
  { name: 'Gallery', page: 'Gallery' },
  { name: 'Employment', page: 'Employment' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children, currentPageName }) {
  console.log('Layout.jsx: Component rendering, currentPageName:', currentPageName);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  console.log('Layout.jsx: About to return JSX');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black shadow-md`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center h-20 relative">
            {/* Logo - Absolute positioned on left */}
            <Link to={createPageUrl('Home')} className="absolute left-6 md:left-12 flex items-center py-2">
              <Logo isScrolled={false} />
            </Link>

            {/* Desktop Navigation - Centered with right offset */}
            <div className="hidden md:flex items-center gap-8 ml-32">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${
                    link.page === 'Contact' 
                      ? 'text-white font-semibold bg-[#7CB342] px-4 py-2 rounded' 
                      : currentPageName === link.page 
                        ? 'text-[#7CB342]' 
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {currentPageName === link.page && link.page !== 'Contact' && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7CB342]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Absolute positioned on right */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden absolute right-6 p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`block text-lg font-medium ${
                      link.page === 'Contact'
                        ? 'text-white font-semibold bg-[#7CB342] px-4 py-2 rounded text-center'
                        : currentPageName === link.page 
                          ? 'text-[#7CB342]' 
                          : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      <footer className="bg-[#7CB342] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to={createPageUrl('Home')} className="mb-6">
                <Logo isScrolled={false} isFooter={true} />
              </Link>
              <p className="text-white/70 max-w-md leading-relaxed mb-6">
                Technology built by farmers to deliver never-before-seen insights 
                from field to storage. Farmer-founded, field-tested, patent-backed.
              </p>
              <a 
                href="https://www.facebook.com/HeartlandFarmsWI/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
                Follow us on Facebook!
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link 
                      to={createPageUrl(link.page)}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-wide">Contact</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>907 3rd Avenue</li>
                <li>Hancock, WI 54943</li>
                <li className="pt-2">
                  <a href="tel:+17152495555" className="hover:text-white transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    715-249-5555
                  </a>
                </li>
                <li>
                  <a href="mailto:info@heartlandag.tech" className="hover:text-white transition-colors">
                    info@heartlandag.tech
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Heartland Ag Tech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

console.log('Layout.jsx: Module loaded');
