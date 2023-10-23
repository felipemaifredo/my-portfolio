//Imports
import './observer.css';
import React, { useEffect, useRef } from 'react';

const Observer = ({ threshold, children }) => {
  const observer = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('init-hidden-off');
        } else {
          entry.target.classList.remove('init-hidden-off');
        }
      });
    };
    observer.current = new IntersectionObserver(callback, { threshold });
    Array.from(document.querySelectorAll('.init-hidden')).forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [threshold]);

  return <>{children}</>;
};

export default Observer;     