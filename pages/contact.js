export default function Contact() {
  return (
    <main id="main-content" className="page-shell contact-page">
      <section className="content-width">
        <p className="eyebrow">
          Contact
        </p>
        <h1 className="page-title">
          Get in touch
        </h1>
        <p className="page-description">
          I welcome conversations about biofabrication, organ-on-a-chip systems, biomaterials, tissue engineering, translational research, and academic collaboration.
        </p>

        <div className="detail-grid">
          <article className="detail-card">
            <p className="contact-label">Email</p>
            <div className="contact-email-links">
              <a href="mailto:mxajim@gmail.com" className="contact-link">mxajim@gmail.com</a>
              <a href="mailto:xmei2@bwh.harvard.edu" className="contact-link">xmei2@bwh.harvard.edu</a>
            </div>
          </article>
          <a
            href="https://www.linkedin.com/in/xuan-mei-9a099021b"
            target="_blank"
            rel="noreferrer"
            className="detail-card"
          >
            <p className="contact-label">LinkedIn</p>
            <p className="contact-link">Connect with me</p>
          </a>
          <a
            href="https://scholar.google.com/citations?user=anUzZQ0AAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="detail-card"
          >
            <p className="contact-label">Google Scholar</p>
            <p className="contact-link">View publication profile</p>
          </a>
        </div>
      </section>
    </main>
  );
}
