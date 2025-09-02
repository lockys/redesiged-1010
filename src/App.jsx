import React from 'react';
import Header from './components/Header.jsx';

// Main application component
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" className="container">
        <section className="hero">
          <h1>National Day Celebration</h1>
          <p>React and Vite starter template.</p>
        </section>
        <section>
          <p>Main content placeholder.</p>
        </section>
      </main>
      <footer className="footer">
        <small>© 2025 National Day Demo</small>
      </footer>
    </>
  );
}
