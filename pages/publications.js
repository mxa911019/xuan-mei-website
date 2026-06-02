export default function Publications() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
          Publications
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
          Publications
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          Please visit my Google Scholar profile for a complete and updated list of publications, citations, and research outputs.
        </p>

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
