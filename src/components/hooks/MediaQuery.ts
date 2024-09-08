// src/hooks/useMediaQuery.ts
'use client';

import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const [device, setDevice] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice('mobile');
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};

export default useMediaQuery;
