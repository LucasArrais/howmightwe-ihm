import Section from "../components/Section";
import Card from "../components/Card";

export default function Entrevistas() {
  return (
    <Section id="entrevistas" title="Entrevistas Realizadas">
      
      {/* Metodologia Qualitativa e TCLE */}
      <div style={{ marginBottom: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Metodologia da Pesquisa</h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <Card>
            <h3 style={{ marginBottom: "15px", color: "#0f172a" }}>Técnica utilizada: Entrevista qualitativa</h3>
            <p style={{ color: "#334155", lineHeight: "1.6", marginBottom: "15px" }}>
              A técnica escolhida foi a entrevista individual semiestruturada, por permitir uma
              compreensão profunda da relação pessoal dos jovens com o dinheiro,
              incluindo inseguranças, percepções e comportamentos em um ambiente seguro.
            </p>
            <div className="grid-2" style={{ marginTop: "20px", borderTop: "1px solid #e2e8f0", paddingTop: "20px" }}>
              <div>
                <h4 style={{ color: "#0f172a", marginBottom: "10px" }}>Objetivos:</h4>
                <ul style={{ color: "#334155", lineHeight: "1.6", paddingLeft: "20px" }}>
                  <li>Identificar barreiras que impedem o início dos investimentos</li>
                  <li>Entender motivações e gatilhos de interesse</li>
                  <li>Mapear como consomem conteúdo financeiro</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: "#0f172a", marginBottom: "10px" }}>Amostra (10 pessoas):</h4>
                <ul style={{ color: "#334155", lineHeight: "1.6", paddingLeft: "20px" }}>
                  <li>5 do Perfil A: 18–24 anos (universitários/estagiários)</li>
                  <li>5 do Perfil B: 25–30 anos (jovens profissionais)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 style={{ marginBottom: "15px", color: "#0f172a" }}>TCLE - Termo de Consentimento Livre e Esclarecido</h3>
            <p style={{ color: "#334155", lineHeight: "1.6", marginBottom: "15px" }}>
              O TCLE foi assinado e utilizado para garantir que todos os participantes estivessem cientes dos objetivos da pesquisa, bem como da coleta e uso anônimo de seus dados (gravação de áudio e anotações).
            </p>
            <iframe
              src="/images/tlce.pdf"
              title="Termo de Consentimento Livre e Esclarecido"
              className="pdf-viewer"
              style={{ width: "100%", height: "400px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "15px" }}
            />
            <a href="/images/tlce.pdf" target="_blank" rel="noreferrer" className="form-link" style={{ display: "block", textAlign: "center" }}>
              📄 Abrir TCLE completo (PDF)
            </a>
          </Card>
        </div>
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Compilado das Entrevistas</h2>
      <p style={{ textAlign: "center", color: "#64748b", marginBottom: "40px", fontSize: "16px" }}>
        Abaixo estão os documentos com a síntese das falas e padrões recorrentes das nossas entrevistas, divididos por perfil de idade.
      </p>

      <div className="grid-2">
        <Card>
          <h3 style={{ marginBottom: "15px" }}>Perfil A (18–24 anos)</h3>
          <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "15px" }}>Foco em universitários e estagiários.</p>
          <iframe
            src="/images/perfilA.pdf"
            title="Perfil A"
            className="pdf-viewer"
            style={{ width: "100%", height: "400px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "15px" }}
          />
          <a href="/images/perfilA.pdf" target="_blank" className="form-link" style={{ display: "block", textAlign: "center" }}>
            📄 Abrir PDF completo
          </a>
        </Card>

        <Card>
          <h3 style={{ marginBottom: "15px" }}>Perfil B (25–30 anos)</h3>
          <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "15px" }}>Foco em jovens profissionais recém-formados.</p>
          <iframe
            src="/images/perfilB.pdf"
            title="Perfil B"
            className="pdf-viewer"
            style={{ width: "100%", height: "400px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "15px" }}
          />
          <a href="/images/perfilB.pdf" target="_blank" className="form-link" style={{ display: "block", textAlign: "center" }}>
            📄 Abrir PDF completo
          </a>
        </Card>
      </div>
    </Section>
  );
}