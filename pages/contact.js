export default function Contact() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
          Get in touch
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          I welcome conversations about biofabrication, organ-on-a-chip systems, biomaterials, tissue engineering, translational research, and academic collaboration.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:mxajim@gmail.com"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-600 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Email</p>
            <p className="mt-3 text-lg font-semibold text-blue-700 dark:text-blue-300">mxajim@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/xuan-mei-9a099021b"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-600 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">LinkedIn</p>
            <p className="mt-3 text-lg font-semibold text-blue-700 dark:text-blue-300">Connect with me</p>
          </a>
          <a
            href="https://scholar.google.com/citations?user=anUzZQ0AAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-600 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 md:col-span-2"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Google Scholar</p>
            <p className="mt-3 text-lg font-semibold text-blue-700 dark:text-blue-300">View publication profile</p>
          </a>
        </div>
      </section>
    </main>
  );
}
