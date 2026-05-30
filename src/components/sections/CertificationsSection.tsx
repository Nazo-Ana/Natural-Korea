import { certifications } from '../../data/siteContent';

export default function CertificationsSection() {
  return (
    <section className="certifications reveal" aria-label="Trusted certifications">
      <p>Trusted Certifications</p>
      <span className="cert-divider" aria-hidden="true" />
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
