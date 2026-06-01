import { Link } from "react-router-dom";

const steps = [
  {
    emoji: "🔍",
    label: "Imersão",
    description:
      "Entrevistas qualitativas, questionário com 50 participantes, mapa de empatia e descobertas sobre a relação dos jovens com o dinheiro.",
    links: [
      { to: "/imersao/how-might-we", label: "How Might We" },
      { to: "/imersao/questionario", label: "Questionário" },
      { to: "/imersao/entrevistas", label: "Entrevistas" },
      { to: "/imersao/mapa-empatia", label: "Mapa de Empatia" },
    ],
    color: "#6366f1",
    bg: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
  },
  {
    emoji: "💡",
    label: "Ideação",
    description:
      "Personas, cenários-problema, modelo de tarefas (HTA), esboços Crazy 4 e protótipo funcional em alta fidelidade.",
    links: [{ to: "/ideacao", label: "Ver Ideação" }],
    color: "#0ea5e9",
    bg: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
  },
  {
    emoji: "🎯",
    label: "How Might We",
    description:
      "O desafio central do projeto, matriz CSD, análise de mercado, referências visuais e oportunidades identificadas.",
    links: [{ to: "/imersao/how-might-we", label: "Ver Desafio" }],
    color: "#8b5cf6",
    bg: "linear-gradient(135deg, #faf5ff, #ede9fe)",
  },
];

function Overview() {
  return (
    <section id="overview" className="overview-section">
      <div className="overview-header">
        <p className="overview-eyebrow">O Processo</p>
        <h2 className="overview-title">Etapas do Projeto</h2>
        <p className="overview-desc">
          Este portfólio documenta todo o processo de UX/UI Design do{" "}
          <strong>InvesteJá</strong> — da compreensão do problema até a
          ideação do protótipo final.
        </p>
      </div>

      <div className="overview-grid">
        {steps.map((step) => (
          <div
            key={step.label}
            className="overview-card"
            style={{ background: step.bg }}
          >
            <div className="overview-card-emoji">{step.emoji}</div>
            <h3 className="overview-card-title" style={{ color: step.color }}>
              {step.label}
            </h3>
            <p className="overview-card-desc">{step.description}</p>
            <div className="overview-card-links">
              {step.links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="overview-card-link"
                  style={{ color: step.color, borderColor: step.color }}
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Overview;