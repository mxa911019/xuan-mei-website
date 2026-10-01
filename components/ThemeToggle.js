import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedTheme;
    try { savedTheme = localStorage.getItem('theme'); } catch { /* Storage may be unavailable. */ }
    const isDark = savedTheme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;
    document.documentElement.classList.toggle('dark', nextDarkMode);
    try { localStorage.setItem('theme', nextDarkMode ? 'dark' : 'light'); } catch { /* Appearance still works without storage. */ }
    setDarkMode(nextDarkMode);
  };

  return (
    <button type="button" onClick={toggleTheme} className="theme-toggle"
      aria-label={darkMode ? 'Switch to light appearance' : 'Switch to dark appearance'}
      title={darkMode ? 'Switch to light appearance' : 'Switch to dark appearance'}>
      {darkMode ? <SunIcon aria-hidden="true" /> : <MoonIcon aria-hidden="true" />}
    </button>
  );
}
