const mediaItems = [
  '3D bioprinting processes and printed tissue constructs',
  'Microfluidic and organ-on-a-chip platforms',
  'Biomaterial systems, hydrogels, and therapeutic delivery devices',
  'Representative microscopy, device, and experimental workflow images',
];

export default function PhotoVideo() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
          Photo & Video
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
          Visual portfolio
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          This page will host selected images and videos documenting research platforms, printed constructs, experimental workflows, and representative results.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {mediaItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl dark:bg-blue-950">
                ▧
              </div>
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Add images or videos here when ready.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
