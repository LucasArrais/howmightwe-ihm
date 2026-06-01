import Section from "../components/Section";

const items = [
  {
    icon: "🚧",
    title: "Barreiras",
    desc: "Medo de perder dinheiro, linguagem complexa e falta de conhecimento.",
    color: "#ef4444",
    bg: "linear-gradient(135deg, #fff1f2, #ffe4e6)",
    border: "#fecdd3",
  },
  {
    icon: "💪",
    title: "Motivações",
    desc: "Independência financeira, objetivos de vida e conquistas pessoais.",
    color: "#10b981",
    bg: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
    border: "#bbf7d0",
  },
  {
    icon: "🎯",
    title: "Oportunidade",
    desc: "Gamificação pode transformar aprendizado financeiro em hábito.",
    color: "#6366f1",
    bg: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
    border: "#c7d2fe",
  },
];

function Insights() {
  return (
    <Section id="insights" title="Principais Insights">
      <div className="insights-grid">
        {items.map((item) => (
          <div
            key={item.title}
            className="insight-card"
            style={{ background: item.bg, borderColor: item.border }}
          >
            <div className="insight-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <h3 className="insight-title" style={{ color: item.color }}>
              {item.title}
            </h3>
            <p className="insight-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Insights;