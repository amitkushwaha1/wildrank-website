'use client';

import { useEffect } from 'react';

const VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4';

export default function CinematicHero() {
  useEffect(() => {
    const stage = document.getElementById('stage');
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    if (!stage || !burger || !menu) return;

    function setOpen(open: boolean) {
      stage.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', String(!open));
    }

    const onBurger = () => setOpen(!stage.classList.contains('is-open'));
    const onClose = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth / window.innerHeight > 1.1) setOpen(false);
    };

    burger.addEventListener('click', onBurger);
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', onClose));
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);

    return () => {
      burger.removeEventListener('click', onBurger);
      menu.querySelectorAll('a').forEach((a) => a.removeEventListener('click', onClose));
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="stage" id="stage">
      <div className="plate">
        <video className="plate-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src={VIDEO} type="video/mp4" />
        </video>
      </div>

      <header className="topbar">
        <a className="brand" href="#" aria-label="Home">
          <svg viewBox="0 0 31.5 48.5" width="100%" height="100%" aria-hidden="true">
            <defs>
              <linearGradient id="bg1c" x1="8" y1="0" x2="34.1" y2="28.9" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#9e9e9e" />
                <stop offset=".28" stopColor="#a6a6a6" />
                <stop offset=".34" stopColor="#a3a3a3" />
                <stop offset=".40" stopColor="#3a3a3a" />
                <stop offset=".55" stopColor="#414141" />
                <stop offset=".60" stopColor="#7a7a7a" />
                <stop offset=".68" stopColor="#8e8e8e" />
                <stop offset=".80" stopColor="#a9a9a9" />
                <stop offset=".95" stopColor="#c4c4c4" />
                <stop offset="1" stopColor="#cccccc" />
              </linearGradient>
            </defs>
            <path d="M21.5 0 L21.5 19.5 L31.5 19.5 L31.5 29 L10 48.5 L10 28.5 L0.5 28.5 L0.5 18.5 Z" fill="url(#bg1c)" />
            <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
            <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
          </svg>
        </a>

        <nav className="links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="pill pill-nav" href="#get-started">
          <span>Get Started</span>
        </a>

        <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu">
          <i></i>
          <i></i>
        </button>
      </header>

      <nav className="menu" id="menu" aria-hidden="true">
        <div className="menu-inner">
          <p className="menu-eyebrow">Menu</p>
          <ul className="menu-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="menu-foot">
            <a className="pill" href="#get-started">
              Get Started
            </a>
            <a className="ghost" href="#architecture">
              View Architecture
            </a>
          </div>
        </div>
      </nav>

      <main className="hero">
        <h1 className="headline">
          <span>The Next Layer</span> <span>of Intelligence</span>
        </h1>
        <p className="sub">
          <span>A unified infrastructure platform to help teams build,</span> <span>ship, and scale AI systems with confidence.</span>
        </p>
        <div className="actions">
          <a className="pill pill-cta" href="#get-started">
            Get Started
          </a>
          <a className="ghost" href="#architecture">
            View Architecture
          </a>
        </div>
      </main>

      <div className="logos">
        <div className="lg lg1">
          <svg viewBox="0 0 30 31" aria-hidden="true">
            <path d="M4 4h22v23H4z" fill="none" stroke="currentColor" strokeWidth="2.4" />
            <circle cx="19.5" cy="10.5" r="5.1" fill="#050505" />
            <path d="M14.4 5.4a5.1 5.1 0 0 1 10.2 10.2" fill="none" stroke="currentColor" strokeWidth="2.4" />
          </svg>
          <span className="word">logoipsum</span>
        </div>
        <div className="lg lg2">
          <svg viewBox="0 0 25 30" aria-hidden="true">
            <rect x="3" y="3" width="6" height="24" fill="currentColor" />
            <circle cx="16" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="2.4" />
            <path d="M8 7a8 8 0 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="2.4" />
          </svg>
          <span className="word">logoipsum</span>
          <span className="dot"></span>
        </div>
        <div className="lg lg3">
          <svg viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="14" cy="14" r="12.35" fill="none" stroke="currentColor" strokeWidth="3.1" />
            <path d="M6 14c4-6 12-6 16 0" fill="none" stroke="currentColor" strokeWidth="2.2" />
            <path d="M6 18c4 6 12 6 16 0" fill="none" stroke="currentColor" strokeWidth="2.2" />
          </svg>
          <span className="word">logoipsum</span>
        </div>
        <div className="lg lg4">
          <svg viewBox="0 0 28 25.5" aria-hidden="true">
            <path d="M4 12c2-8 6-8 8 0s6 8 8 0 6 8 8 0" fill="currentColor" />
            <path d="M4 16c2 6 6 6 8 0s6-6 8 0 6 6 8 0" fill="none" stroke="currentColor" strokeWidth="3.05" strokeLinecap="round" />
            <path d="M4 20c2 6 6 6 8 0s6-6 8 0 6 6 8 0" fill="none" stroke="currentColor" strokeWidth="3.05" strokeLinecap="round" />
          </svg>
          <span className="word">logoipsum</span>
        </div>
      </div>
    </div>
  );
}
