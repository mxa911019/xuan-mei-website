import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen p-8 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-2xl">
        Hi, I'm Xuan Mei.
      </p>
      <p className="text-lg max-w-2xl mt-4">
        This site showcases my projects, research, and other creative work.
      </p>
      <Link href="/" className="text-blue-500 hover:underline mt-8 inline-block">← Back to Home</Link>
    </div>
  );
}
