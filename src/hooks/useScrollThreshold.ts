import { useEffect, useState } from 'react';

export function useScrollThreshold(threshold = 60) {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsPastThreshold(window.scrollY > threshold);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPastThreshold;
}
