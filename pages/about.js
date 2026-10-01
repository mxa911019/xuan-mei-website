const experience = [
  {
    role: 'Postdoctoral Research Fellow',
    institution: 'Harvard Medical School',
    dates: 'Jan 2022 – Present',
  },
  {
    role: 'Postdoctoral Research Fellow',
    institution: "Brigham and Women's Hospital",
    dates: 'Jan 2022 – Present',
  },
  {
    role: 'Postdoctoral Researcher',
    institution: 'North Carolina State University',
    dates: 'Sep 2019 – Feb 2022',
  },
  {
    role: 'Postdoctoral Researcher',
    institution: 'University of North Carolina at Chapel Hill',
    dates: 'Sep 2019 – Feb 2022',
  },
];

const education = [
  {
    institution: 'Beijing University of Chemical Technology',
    degree: 'PhD, Chemical Engineering',
    dates: 'Sep 2014 – Jun 2019',
  },
  {
    institution: 'Zhengzhou University',
    degree: 'Bachelor, Pharmaceutical Engineering',
    dates: 'Sep 2010 – Jun 2014',
  },
];

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

        <section className="career-section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="career-heading">Experience</h2>
          <ol className="career-timeline">
            {experience.map((entry) => (
              <li className="career-entry" key={entry.institution}>
                <p className="career-dates">{entry.dates}</p>
                <div className="career-details">
                  <h3 className="career-title">{entry.role}</h3>
                  <p className="career-institution">{entry.institution}</p>
                  <p className="career-meta">Full-time</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="career-section" aria-labelledby="education-heading">
          <h2 id="education-heading" className="career-heading">Education</h2>
          <ol className="career-timeline">
            {education.map((entry) => (
              <li className="career-entry" key={entry.institution}>
                <p className="career-dates">{entry.dates}</p>
                <div className="career-details">
                  <h3 className="career-title">{entry.institution}</h3>
                  <p className="career-institution">{entry.degree}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

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
