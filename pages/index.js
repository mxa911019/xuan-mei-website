import Hero from '../components/Hero';
import NewsUpdates from '../components/Projects';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <ThemeToggle />
      <Hero />
      <NewsUpdates />
      <Footer />
    </div>
  );
}