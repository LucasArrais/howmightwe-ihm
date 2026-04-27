export default function Entrevistas() {
  return (
    <section id="entrevistas" className="section section-light">
      <h2>Entrevistas</h2>

      <p>
        As entrevistas foram realizadas com dois perfis distintos de jovens adultos,
        com o objetivo de compreender suas percepções, dificuldades e comportamentos
        em relação ao dinheiro e aos investimentos.
      </p>

      <div className="card">
        <h3>Perfil A (18–24 anos)</h3>

        <iframe
          src="/images/perfilA.pdf"
          title="Perfil A"
          className="pdf-viewer"
        />

        <a href="/images/perfilA.pdf" target="_blank" className="form-link">
          📄 Abrir PDF completo
        </a>
      </div>

      <div className="card">
        <h3>Perfil B (25–30 anos)</h3>

        <iframe
          src="/images/perfilB.pdf"
          title="Perfil B"
          className="pdf-viewer"
        />

        <a href="/images/perfilB.pdf" target="_blank" className="form-link">
          📄 Abrir PDF completo
        </a>
      </div>
    </section>
  );
}