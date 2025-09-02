import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { SummitSection, NewsSection } from './components/Cards.jsx';
import Gallery from './components/Gallery.jsx';
import Videos from './components/Videos.jsx';
import BackToTop from './components/BackToTop.jsx';

// Compose sections and handle intersection reveal
export default function App() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('[data-reveal]');
    if (reduce) {
      elements.forEach(el => el.classList.add('reveal'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <SummitSection />
        <NewsSection />
        <Gallery />
        <Videos />
      </main>
      <footer className="site-footer">
        <p>© 2025 國慶籌備單位｜示意版面（靜態樣板）</p>
      </footer>
      <BackToTop />
    </>
  );
}
