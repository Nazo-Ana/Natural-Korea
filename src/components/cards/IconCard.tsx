type IconCardProps = {
  className: string;
  icon: string;
  title: string;
  text: string;
  contentWrapper?: boolean;
};

export default function IconCard({ className, icon, title, text, contentWrapper = false }: IconCardProps) {
  const content = (
    <>
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );

  return (
    <article className={className}>
      <span>{icon}</span>
      {contentWrapper ? <div>{content}</div> : content}
    </article>
  );
}
