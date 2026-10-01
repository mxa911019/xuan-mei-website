import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© 2026 Xuan Mei. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://scholar.google.com/citations?user=anUzZQ0AAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
          <a href="https://www.linkedin.com/in/xuan-mei-9a099021b" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
