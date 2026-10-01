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
    <main id="main-content" className="page-shell research-page">
      <section className="content-width">
        <p className="eyebrow">
          Research
        </p>
        <h1 className="page-title">
          Engineering human-relevant tissue systems through biofabrication and biomaterials
        </h1>
        <p className="page-description">
          My research integrates cells, biomaterials, microengineering, and biomanufacturing to create functional tissue models and translational therapeutic technologies.
        </p>

        <div className="detail-grid">
          {researchAreas.map((area) => (
            <article
              key={area.title}
              className="detail-card"
            >
              <h2 className="card-title">{area.title}</h2>
              <p className="card-description">{area.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
