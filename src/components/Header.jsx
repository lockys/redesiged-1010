import React from 'react';

// Sticky site header with simple navigation
export default function Header() {
  return (
    <header className="site-header">
      <div className="inner">
        <span className="logo">National Day Site</span>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
