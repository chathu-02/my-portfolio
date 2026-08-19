import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks which section is currently visible in the viewport.
 * Uses IntersectionObserver with rootMargin to detect the active section early.
 */
export function useActiveSection(sectionIds = ['home', 'about', 'projects', 'skills', 'contact']) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Trigger when 30% of the section is visible, with a negative top margin
          // so it activates slightly before fully scrolling into view
          rootMargin: '-20% 0px -50% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
