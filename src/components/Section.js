import SectionHeader from "./SectionHeader";

function Section({ id, title, eyebrow, accent, children }) {
  return (
    <section id={id} className="section" data-reveal>
      {eyebrow ? (
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          accent={accent}
          align="left"
        />
      ) : (
        <h2>{title}</h2>
      )}
      {children}
    </section>
  );
}

export default Section;
