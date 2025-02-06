import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center text-center"
    >
      <div>
        <h1 className="text-5xl font-bold mb-4 dark:text-white">
          Hello, I'm Xuan Mei
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Researcher 
        </p>
      </div>
    </motion.section>
  );
}