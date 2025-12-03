export function createPageUrl(pageName) {
  const pageMap = {
    'Home': '/',
    'About': '/about',
    'OurProcess': '/our-process',
    'Products': '/products',
    'Gallery': '/gallery',
    'Employment': '/employment',
    'Contact': '/contact',
  };
  
  return pageMap[pageName] || '/';
}

