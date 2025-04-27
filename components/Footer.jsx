export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400">
          © 2023 Xuan Mei
        </p>
        <div className="flex space-x-4">
        <a href="/about" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">About</a>
        <a href="/contact" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Contact</a>
          <a href="https://scholar.google.com/citations?user=anUzZQ0AAAAJ&hl=en" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white" target="_blank">Google Scholar</a>
          <a href="[Your-LinkedIn]" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}