import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: "Project 1", description: "A stunning web app..." },
  { id: 2, title: "Project 2", description: "Mobile-first design..." },
  // Add your projects here
];

export default function NewsUpdates() {
  return (
    <section className="py-20 px-4 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 dark:text-white">News & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}