export default function About() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
          About
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
          Xuan Mei, PhD
        </h1>
        <p className="mt-6 text-xl leading-8 text-slate-700 dark:text-slate-300">
          I am a biomedical engineer working at the interface of biofabrication, biomaterials, tissue engineering, and organ-on-a-chip technologies. My research focuses on building engineered tissue systems that can better model human physiology, disease progression, and therapeutic response.
        </p>
        <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
          My work spans light-based 3D bioprinting, cell-laden hydrogel systems, microphysiological platforms, translational biomaterials, and minimally invasive therapeutic delivery. I am particularly interested in developing dynamic, intelligent, and clinically relevant models that bridge fundamental bioengineering and translational medicine.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Research identity</h2>
            <ul className="mt-4 space-y-3 leading-7 text-slate-700 dark:text-slate-300">
              <li>• Biofabrication and 3D bioprinting</li>
              <li>• Biomaterials for cell therapy and tissue engineering</li>
              <li>• Organ-on-a-chip and disease modeling</li>
              <li>• Translational therapeutic delivery systems</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Current direction</h2>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
              My long-term goal is to develop bioengineered platforms that enable more predictive human tissue modeling, personalized therapeutic testing, and reduced dependence on conventional animal models.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
