import { motion } from 'framer-motion';

const updates = [
  {
    id: 1,
    title: 'Biofabrication and advanced bioprinting',
    description:
      'Developing light-based and extrusion bioprinting strategies to build functional, cell-laden tissue constructs with controllable architecture.',
  },
  {
    id: 2,
    title: 'Organ-on-a-chip and disease modeling',
    description:
      'Creating engineered tissue systems for cancer modeling, aging research, drug screening, and multi-organ interactions.',
  },
  {
    id: 3,
    title: 'Translational biomaterials',
    description:
      'Designing biomaterial-enabled therapeutic delivery platforms, including minimally invasive microneedle systems and cell-based technologies.',
  },
];

export default function NewsUpdates() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Research overview
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
            Building technologies at the interface of cells, materials, and manufacturing
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
            My work integrates biomaterials, microphysiological systems, and biofabrication to engineer controllable biological models and therapeutic platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {updates.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-800/70"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                {item.id}
              </div>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
