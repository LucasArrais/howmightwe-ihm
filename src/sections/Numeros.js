import CountUp from "../components/CountUp";

const stats = [
  { end: 50, suffix: "+", label: "Participantes no questionário" },
  { end: 10, suffix: "", label: "Entrevistas em profundidade" },
  { end: 3, suffix: "", label: "Personas mapeadas" },
  { end: 10, suffix: "", label: "Heurísticas de Nielsen avaliadas" },
];

function Numeros() {
  return (
    <section className="stats-strip" aria-label="O processo em números">
      <div className="stats-strip-inner">
        {stats.map((s) => (
          <div key={s.label} className="stat-item" data-reveal>
            <div className="stat-number">
              <CountUp end={s.end} suffix={s.suffix} />
            </div>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Numeros;
