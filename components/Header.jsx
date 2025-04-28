import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">Xuan Mei</Link>
        <nav className="space-x-6 flex items-center">
  <Link href="/" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Home</Link>
  <Link href="/about" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">About</Link>
  <Link href="/research" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Research</Link>
  <Link href="/publications" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Publications</Link>
  <Link href="/photo-video" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Photo & Video</Link>
  <Link href="/contact" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Contact</Link>
</nav>

      </div>
    </header>
  );
}
