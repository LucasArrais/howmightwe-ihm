import SectionHeader from "../components/SectionHeader";

const pillars = [
  {
    icon: "🎯",
    title: "Metas Visuais",
    desc: "Objetivos com progresso visual e significado pessoal, para que o usuário veja seu avanço de forma clara e motivadora.",
    color: "#6366f1",
  },
  {
    icon: "🎮",
    title: "Gamificação",
    desc: "Sistema de recompensas, conquistas e evolução de nível que transforma hábitos financeiros em uma jornada engajante.",
    color: "#0ea5e9",
  },
  {
    icon: "⚡",
    title: "Micro Aprendizado",
    desc: "Conteúdo financeiro entregue em doses curtas e no momento certo, reduzindo a barreira de entrada para iniciantes.",
    color: "#8b5cf6",
  },
];

function Solucao() {
  return (
    <section id="solucao" className="solucao-section">
      <SectionHeader
        eyebrow="Nossa Proposta"
        title="Conceito de Solução"
        desc="O InvesteJá combina três pilares para transformar o aprendizado financeiro em uma experiência contínua e motivadora."
        accent="#a5b4fc"
        theme="dark"
      />

      <div className="solucao-grid">
        {pillars.map((p) => (
          <div key={p.title} className="solucao-card" data-reveal>
            <div
              className="solucao-icon"
              style={{ background: `${p.color}18`, color: p.color }}
            >
              {p.icon}
            </div>
            <h3 className="solucao-card-title" style={{ color: p.color }}>
              {p.title}
            </h3>
            <p className="solucao-card-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solucao;