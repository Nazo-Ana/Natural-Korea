export default function SectionHeading({ eyebrow, children, light = false, center = false }) {
  return (
    <div className={center ? 'section-heading center' : 'section-heading'}>
      {eyebrow && <p className={light ? 'section-label light reveal' : 'section-label reveal'}>{eyebrow}</p>}
      <h2 className={light ? 'section-title light reveal reveal-delay-1' : 'section-title reveal reveal-delay-1'}>
        {children}
      </h2>
    </div>
  );
}
