export function createPageUrl(pageName) {
  const pageMap = {
    'Home': '/',
    'About': '/about',
    'OurProcess': '/our-process',
    'Products': '/products',
    'Community': '/community',
    'Gallery': '/gallery',
    'Employment': '/employment',
    'Contact': '/contact',
  };
  
  return pageMap[pageName] || '/';
}

