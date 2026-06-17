'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    setIsNavOpen(false);
    document.body.classList.remove('nav-active');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('revealed');
      });
    });
  }, [pathname]);

  // Tutup menu ketika window resize (dari mobile ke desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header" data-header>
      <div className="container">
        <Link href="/" className="logo" aria-label="Ario Veisa - Home">
          <img
            src="/assets/images/logo-dark.svg"
            width="64"
            height="24"
            alt="Ario Veisa - Software Architect & Business Development"
            loading="eager"
          />
        </Link>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <Link href="/" className="logo" aria-label="Ario Veisa - Home">
              <img
                src="/assets/images/logo-light.svg"
                width="64"
                height="24"
                alt="Ario Veisa - Software Architect & Business Development"
                loading="eager"
              />
            </Link>

            <button
              className="nav-close-btn"
              aria-label="close menu"
              onClick={closeNav}
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list" role="menubar">
            <li role="none">
              <Link href="/" className="navbar-link" onClick={closeNav} role="menuitem" aria-label="Beranda">
                <ion-icon name="home-outline" aria-hidden="true"></ion-icon>
                <span>Home</span>
              </Link>
            </li>

            <li role="none">
              <Link href="/#working" className="navbar-link" onClick={closeNav} role="menuitem" aria-label="Tentang Saya">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                <span>About</span>
              </Link>
            </li>

            <li role="none">
              <Link href="/projects" className="navbar-link" onClick={closeNav} role="menuitem" aria-label="Proyek">
                <ion-icon name="briefcase-outline" aria-hidden="true"></ion-icon>
                <span>Projects</span>
              </Link>
            </li>

            <li role="none">
              <Link href="/#contact" className="navbar-link" onClick={closeNav} role="menuitem" aria-label="Kontak">
                <ion-icon name="chatbubble-ellipses-outline" aria-hidden="true"></ion-icon>
                <span>Contact</span>
              </Link>
            </li>

            <li role="none">
              <Link href="/blog" className="navbar-link" onClick={closeNav} role="menuitem" aria-label="Blog">
                <ion-icon name="newspaper-outline" aria-hidden="true"></ion-icon>
                <span>Blog</span>
              </Link>
            </li>
          </ul>

          <div className="wrapper">
            <a href="mailto:arioveisa@gmail.com" className="contact-link" aria-label="Email Ario Veisa">
              arioveisa@gmail.com
            </a>

            <a href="tel:+6285182302209" className="contact-link" aria-label="Telepon Ario Veisa">(+62)85182302209</a>
          </div>

          <ul className="social-list" role="list">
            <li>
              <a href="https://twitter.com/arioveisa" className="social-link" aria-label="Twitter Ario Veisa" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-twitter" aria-hidden="true"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://facebook.com/arioveisa" className="social-link" aria-label="Facebook Ario Veisa" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-facebook" aria-hidden="true"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://dribbble.com/arioveisa" className="social-link" aria-label="Dribbble Ario Veisa" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-dribbble" aria-hidden="true"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://instagram.com/arioveisa" className="social-link" aria-label="Instagram Ario Veisa" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://youtube.com/@arioveisa" className="social-link" aria-label="YouTube Ario Veisa" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-youtube" aria-hidden="true"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={toggleNav}
        >
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

        <div
          className={`overlay ${isNavOpen ? 'active' : ''}`}
          data-nav-toggler
          data-overlay
          onClick={closeNav}
        ></div>
      </div>
    </header>
  );
}
