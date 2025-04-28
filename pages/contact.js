import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen p-8 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg max-w-2xl mb-4">
        Feel free to reach out via email or connect with me on LinkedIn!
      </p>
      <ul className="space-y-2">
        <li>Email: <a href="mxajim@gmail.com" className="text-blue-500 hover:underline">mxajim@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/xuan-mei-9a099021b" target="_blank" className="text-blue-500 hover:underline">https://www.linkedin.com/in/xuan-mei-9a099021b</a></li>
      </ul>
      <Link href="/" className="text-blue-500 hover:underline mt-8 inline-block">← Back to Home</Link>
    </div>
  );
}
