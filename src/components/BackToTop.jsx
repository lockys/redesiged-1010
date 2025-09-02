import React, { useState, useEffect } from 'react';

// Scroll back-to-top round button
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      id="backToTop"
      className={`back-to-top${show ? ' show' : ''}`}
      aria-label="Back to top"
      onClick={scrollTop}
    >
      ↑
    </button>
  );
}
