import Hero from '../components/Hero';
import NewsUpdates from '../components/Projects';

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <Hero />
      <NewsUpdates />
    </main>
  );
}
