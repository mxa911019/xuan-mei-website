const mediaItems = [
  '3D bioprinting processes and printed tissue constructs',
  'Microfluidic and organ-on-a-chip platforms',
  'Biomaterial systems, hydrogels, and therapeutic delivery devices',
  'Representative microscopy, device, and experimental workflow images',
];

export default function PhotoVideo() {
  return (
    <main id="main-content" className="page-shell photo-video-page">
      <section className="content-width">
        <p className="eyebrow">
          Photo & Video
        </p>
        <h1 className="page-title">
          Visual portfolio
        </h1>
        <p className="page-description">
          This page will host selected images and videos documenting research platforms, printed constructs, experimental workflows, and representative results.
        </p>

        <div className="detail-grid">
          {mediaItems.map((item) => (
            <div
              key={item}
              className="detail-card"
            >
              <div className="media-placeholder" aria-hidden="true">
                ▧
              </div>
              <h2 className="card-title">{item}</h2>
              <p className="placeholder-description">
                Add images or videos here when ready.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
