export default function TLCE() {
  return (
    <section id="tlce" className="section section-light">
      <h2>TLCE</h2>
      <p>
        O Termo de Livre Consentimento Esclarecido (TLCE) foi utilizado para
        garantir que todos os participantes estivessem cientes dos objetivos da
        pesquisa, bem como da coleta e uso de seus dados.
      </p>

      <div className="card">
        <iframe
          src="/images/tlce.pdf"
          title="TLCE"
          className="pdf-viewer"
        />
      </div>

      <a href="/images/tlce.pdf" target="_blank" className="form-link">
        📄 Abrir PDF em tela cheia
      </a>
    </section>
  );
}