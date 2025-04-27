import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">Xuan Mei</Link>
        <nav className="space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Contact</Link>
          <a href="https://scholar.google.com/citations?user=anUzZQ0AAAAJ&hl=en" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white" target="_blank">Google Scholar</a>
          <a href="[Your-LinkedIn]" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white" target="_blank">LinkedIn</a>
        </nav>
      </div>
    </header>
  );
}
