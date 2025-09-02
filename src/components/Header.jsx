import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';

// Sticky header with glassy backdrop and mobile menu
export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Lock body scroll when menu is open
    document.body.classList.toggle('nav-open', open);
  }, [open]);

  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a href="#top" className="logo" aria-label="National Day logo">
        <img src={logo} alt="National Day logo" width="120" height="40" />
      </a>
      <button
        className="nav-toggle"
        aria-label="Main menu"
        aria-controls="siteNav"
        aria-expanded={open}
        onClick={toggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav id="siteNav" className="site-nav" aria-label="Main menu">
        <ul onClick={close}>
          <li><a href="#summit">國慶大會</a></li>
          <li><a href="#news">最新消息</a></li>
          <li><a href="#gallery">相片錦集</a></li>
          <li><a href="#videos">活動影音</a></li>
        </ul>
      </nav>
    </header>
  );
}
