type ContactInfoItemProps = {
  label: string;
  value: string | string[];
  href?: string;
  external?: boolean;
};

export default function ContactInfoItem({ label, value, href, external = false }: ContactInfoItemProps) {
  const content = Array.isArray(value) ? value.map((line) => <span key={line}>{line}</span>) : value;

  return (
    <div className="contact-item">
      <span>{label.slice(0, 2).toUpperCase()}</span>
      <div>
        <p>{label}</p>
        {href ? (
          <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
            {content}
          </a>
        ) : (
          <strong>{content}</strong>
        )}
      </div>
    </div>
  );
}
