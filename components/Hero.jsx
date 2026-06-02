import { motion } from 'framer-motion';

const researchKeywords = [
  '3D Bioprinting',
  'Organ-on-a-Chip',
  'Biomaterials',
  'Tissue Engineering',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 py-24 dark:from-slate-950 dark:to-slate-900 md:py-32">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200 blur-3xl dark:bg-blue-900" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700 dark:text-blue-300">
            Biomedical Engineering · Biofabrication · Translational Biomaterials
          </p>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 dark:text-white md:text-7xl">
            Xuan Mei, PhD
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700 dark:text-slate-300">
            I develop advanced bioprinting, biomaterial, and organ-on-a-chip technologies to engineer physiologically relevant tissue models and translational therapeutic platforms.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {researchKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/research"
              className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800"
            >
              View Research
            </a>
            <a
              href="/publications"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-700 hover:text-blue-700 dark:border-slate-700 dark:text-slate-100 dark:hover:border-blue-300 dark:hover:text-blue-300"
            >
              Publications
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Current focus
          </p>
          <h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">
            Engineering dynamic and clinically relevant tissue systems
          </h2>
          <ul className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
            <li>• Light-based and extrusion bioprinting for complex tissue architectures</li>
            <li>• Bioengineered organ models for disease modeling and drug screening</li>
            <li>• Biomaterial-enabled cell therapy and minimally invasive delivery systems</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
