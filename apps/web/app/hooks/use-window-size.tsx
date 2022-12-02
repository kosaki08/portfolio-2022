import { debounce } from '@portfolio-2022/utils';
import { useState, useEffect } from 'react';

interface WindowSize {
  windowWidth: number;
  windowHeight: number;
}

const initialSize: WindowSize = {
  windowWidth: 0,
  windowHeight: 0,
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>(initialSize);

  useEffect(() => {
    const checkWindowSize = () => {
      const { innerWidth, innerHeight } = window;
      setWindowSize({
        windowWidth: innerWidth,
        windowHeight: innerHeight,
      });
    };
    const debounced = debounce(checkWindowSize, 300);

    checkWindowSize();
    window.addEventListener('resize', debounced, { passive: true });

    return function cleanUp() {
      window.removeEventListener('resize', debounced);
    };
  }, []);

  return {
    ...windowSize,
  };
}
