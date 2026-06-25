/**
 * Cabeçalho de seção unificado (eyebrow + título + descrição).
 * Substitui os padrões repetidos overview-eyebrow / solucao-label / problema-eyebrow.
 *
 * Props:
 * - eyebrow: texto pequeno em destaque acima do título
 * - title: título principal
 * - desc: descrição opcional (string ou JSX)
 * - accent: cor do eyebrow (default índigo)
 * - align: "center" (default) | "left"
 * - theme: "light" (default) | "dark"
 */
function SectionHeader({
  eyebrow,
  title,
  desc,
  accent = "#6366f1",
  align = "center",
  theme = "light",
}) {
  return (
    <div
      className={`section-header section-header--${align} section-header--${theme}`}
      data-reveal
    >
      {eyebrow && (
        <p className="section-header-eyebrow" style={{ color: accent }}>
          {eyebrow}
        </p>
      )}
      {title && <h2 className="section-header-title">{title}</h2>}
      {desc && <p className="section-header-desc">{desc}</p>}
    </div>
  );
}

export default SectionHeader;
