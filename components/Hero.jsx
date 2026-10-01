import Link from 'next/link';

const researchKeywords = [
  '3D Bioprinting',
  'Organ-on-a-Chip',
  'Biomaterials',
  'Tissue Engineering',
];

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-tagline">Biomedical Engineering · Biofabrication · Translational Biomaterials</p>
          <h1>Xuan Mei, PhD</h1>
          <p className="hero-description">
            I develop advanced bioprinting, biomaterial, and organ-on-a-chip technologies to engineer physiologically relevant tissue models and translational therapeutic platforms.
          </p>
          <div className="hero-actions">
            <Link href="/research" className="button button-primary">View Research</Link>
            <Link href="/publications" className="button button-outline">Publications</Link>
          </div>
          <div className="research-keywords">
            {researchKeywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
          </div>
        </div>
      </section>
      <section className="focus-section" aria-labelledby="focus-heading">
        <div className="focus-inner">
          <div className="focus-heading">
            <p className="eyebrow">Current focus</p>
            <h2 id="focus-heading">Engineering dynamic and clinically relevant tissue systems</h2>
          </div>
          <ul className="focus-list">
            <li>Light-based and extrusion bioprinting for complex tissue architectures</li>
            <li>Bioengineered organ models for disease modeling and drug screening</li>
            <li>Biomaterial-enabled cell therapy and minimally invasive delivery systems</li>
          </ul>
        </div>
      </section>
    </>
  );
}
