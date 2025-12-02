import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx'
import Products from '../Pages/Products.jsx'
import Contact from '../Pages/Contact.jsx'
import Employment from '../Pages/Employment.jsx'
import OurProcess from '../Pages/OurProcess.jsx'
import Community from '../Pages/Community.jsx'
import Gallery from '../Pages/Gallery.jsx'

console.log('App.jsx: Loading...');

function App() {
  console.log('App.jsx: Component rendering...');
  const location = useLocation()
  console.log('App.jsx: Location:', location.pathname);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const getPageName = (pathname) => {
    if (pathname === '/') return 'Home'
    if (pathname === '/about') return 'About'
    if (pathname === '/our-process') return 'OurProcess'
    if (pathname === '/products') return 'Products'
    if (pathname === '/community') return 'Community'
    if (pathname === '/gallery') return 'Gallery'
    if (pathname === '/employment') return 'Employment'
    if (pathname === '/contact') return 'Contact'
    return 'Home'
  }

  try {
    const pageName = getPageName(location.pathname);
    console.log('App.jsx: Rendering page:', pageName);
    
    return (
      <Layout currentPageName={pageName}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/products" element={<Products />} />
          <Route path="/community" element={<Community />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    )
  } catch (error) {
    console.error('App.jsx: Error in render:', error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error in App</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </div>
    )
  }
}

console.log('App.jsx: Module loaded');

export default App
