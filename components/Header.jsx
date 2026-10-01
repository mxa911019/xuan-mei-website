import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/photo-video', label: 'Photo & Video' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const navigation = useRef(null);

  useEffect(() => {
    if (menuOpen) navigation.current?.querySelector('a')?.focus();
  }, [menuOpen]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    router.events.on('routeChangeStart', closeMenu);
    return () => router.events.off('routeChangeStart', closeMenu);
  }, [router.events]);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 767) setMenuOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onEscape);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header${menuOpen ? ' menu-open' : ''}`}>
        <div className="header-inner">
          <Link href="/" className="wordmark" onClick={() => setMenuOpen(false)}>Xuan Mei</Link>
          <nav ref={navigation} id="primary-navigation" className="primary-navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                aria-current={router.pathname === item.href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-controls">
            <ThemeToggle />
            <button ref={menuButton} type="button" className="menu-toggle"
              aria-expanded={menuOpen} aria-controls="primary-navigation"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
