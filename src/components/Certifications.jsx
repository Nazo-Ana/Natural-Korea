import { certifications } from '../data/siteContent.js';

export default function Certifications() {
  return (
    <section className="certifications reveal" aria-label="Trusted certifications">
      <p>Trusted Certifications</p>
      <span className="cert-divider" />
      <div className="cert-list">
        {certifications.map((cert) => (
          <div className="cert-item" key={cert.label}>
            <span>{cert.icon}</span>
            <strong>{cert.label}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
