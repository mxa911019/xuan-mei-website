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
    <section className="overview-section">
      <div className="content-width">
        <div className="section-intro">
          <p className="eyebrow">Research overview</p>
          <h2>Building technologies at the interface of cells, materials, and manufacturing</h2>
          <p className="section-description">
            My work integrates biomaterials, microphysiological systems, and biofabrication to engineer controllable biological models and therapeutic platforms.
          </p>
        </div>
        <div className="overview-grid">
          {updates.map((item) => (
            <article key={item.id} className="overview-card">
              <span className="card-number" aria-hidden="true">0{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
