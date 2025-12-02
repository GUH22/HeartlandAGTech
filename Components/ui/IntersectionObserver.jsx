import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const threshold = options?.threshold ?? 0.1;
    const rootMargin = options?.rootMargin ?? '0px';
    const triggerOnce = options?.triggerOnce ?? false;

    let observer;
    try {
      observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          setInView(true);
          if (triggerOnce && observer) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      }, {
        threshold,
        rootMargin
      });

      observer.observe(currentRef);
    } catch (error) {
      console.error('IntersectionObserver error:', error);
      setInView(true); // Fallback to showing content
    }

    return () => {
      if (observer) {
        try {
          observer.disconnect();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []); // Empty deps - options are typically static

  return [ref, inView];
}

export default useInView;

