export default function About() {
  return (
    <main id="main-content" className="page-shell about-page">
      <section className="content-width">
        <p className="eyebrow">
          About
        </p>
        <h1 className="page-title">
          Xuan Mei, PhD
        </h1>
        <p className="page-description">
          I am a biomedical engineer working at the interface of biofabrication, biomaterials, tissue engineering, and organ-on-a-chip technologies. My research focuses on building engineered tissue systems that can better model human physiology, disease progression, and therapeutic response.
        </p>
        <p className="page-description">
          My work spans light-based 3D bioprinting, cell-laden hydrogel systems, microphysiological platforms, translational biomaterials, and minimally invasive therapeutic delivery. I am particularly interested in developing dynamic, intelligent, and clinically relevant models that bridge fundamental bioengineering and translational medicine.
        </p>

        <div className="detail-grid">
          <div className="detail-card">
            <h2 className="card-title">Research identity</h2>
            <ul className="identity-list">
              <li>• Biofabrication and 3D bioprinting</li>
              <li>• Biomaterials for cell therapy and tissue engineering</li>
              <li>• Organ-on-a-chip and disease modeling</li>
              <li>• Translational therapeutic delivery systems</li>
            </ul>
          </div>
          <div className="detail-card">
            <h2 className="card-title">Current direction</h2>
            <p className="card-description">
              My long-term goal is to develop bioengineered platforms that enable more predictive human tissue modeling, personalized therapeutic testing, and reduced dependence on conventional animal models.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
