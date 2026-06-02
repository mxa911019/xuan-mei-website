const selectedPublications = [
  {
    title: 'Minimally invasive snakebite-inspired microneedle delivery system for internal organs',
    journal: 'Bioactive Materials',
    note: 'A bioinspired microneedle platform for precise therapeutic delivery to internal organs.',
  },
  {
    title: '3D bioprinted cancer models and microengineered tissue platforms',
    journal: 'Selected work',
    note: 'Bioprinted disease models for drug screening and tumor microenvironment studies.',
  },
  {
    title: 'Biomaterial and cell-based therapeutic technologies',
    journal: 'Review and perspective articles',
    note: 'Perspectives on the convergence of biomaterials, cell therapy, and translational medicine.',
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
          Publications
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
          Selected publications
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          A complete publication list is available through Google Scholar. This page highlights representative work across bioprinting, biomaterials, organ models, and therapeutic delivery.
        </p>

        <div className="mt-10 space-y-5">
          {selectedPublications.map((publication) => (
            <article
              key={publication.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{publication.title}</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                {publication.journal}
              </p>
              <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">{publication.note}</p>
            </article>
          ))}
        </div>

        <a
          href="https://scholar.google.com/citations?user=anUzZQ0AAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          View Google Scholar
        </a>
      </section>
    </main>
  );
}
