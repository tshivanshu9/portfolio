import { useCallback } from 'react';
import { scroller } from 'react-scroll';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId, speed = 1200) => {
    scroller.scrollTo(sectionId, {
      duration: speed,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
  }, []);

  return scrollToSection;
};
