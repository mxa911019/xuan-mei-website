export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Xuan Mei. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/about" className="transition hover:text-blue-700 dark:hover:text-blue-300">About</a>
          <a href="/contact" className="transition hover:text-blue-700 dark:hover:text-blue-300">Contact</a>
          <a
            href="https://scholar.google.com/citations?user=anUzZQ0AAAAJ&hl=en"
            className="transition hover:text-blue-700 dark:hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar
          </a>
          <a
            href="https://www.linkedin.com/in/xuan-mei-9a099021b"
            className="transition hover:text-blue-700 dark:hover:text-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
