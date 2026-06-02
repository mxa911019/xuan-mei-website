const researchAreas = [
  {
    title: 'Advanced 3D bioprinting and biofabrication',
    text: 'Engineering cell-laden hydrogel systems and light-based printing strategies to fabricate tissues with defined architecture, composition, and function.',
  },
  {
    title: 'Organ-on-a-chip and microphysiological systems',
    text: 'Developing controllable tissue models for cancer, aging, drug screening, and multi-organ interactions using microengineered platforms.',
  },
  {
    title: 'Biomaterial-enabled therapeutic platforms',
    text: 'Designing hydrogels, microneedles, and delivery systems that improve retention, localization, and function of therapeutic payloads and cells.',
  },
  {
    title: 'Dynamic and intelligent tissue models',
    text: 'Exploring responsive, personalized, and data-integrated tissue systems to better capture biological complexity over time.',
  },
];

export default function Research() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
          Research
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
          Engineering human-relevant tissue systems through biofabrication and biomaterials
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          My research integrates cells, biomaterials, microengineering, and biomanufacturing to create functional tissue models and translational therapeutic technologies.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {researchAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{area.title}</h2>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{area.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
