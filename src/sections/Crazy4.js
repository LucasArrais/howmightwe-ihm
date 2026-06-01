import Section from "../components/Section";

function Crazy4() {
  return (
    <Section id="crazy-4" title="Dinâmica: Crazy 4">
      <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center", marginTop: "20px" }}>
        
        {/* Texto descritivo */}
        <div style={{ maxWidth: "800px", textAlign: "left", color: "#334155", fontSize: "18px", lineHeight: "1.7" }}>
          <p style={{ marginBottom: "20px" }}>
            Para estimular a criatividade e explorar diferentes ângulos do problema, aplicamos a dinâmica do <strong>Crazy 4</strong> em sala de aula. O objetivo dessa técnica é forçar a ideação rápida, gerando quatro esboços distintos em tempo recorde para fugir do óbvio e buscar soluções inovadoras.
          </p>
          <p style={{ marginBottom: "16px", fontWeight: "600", color: "#0f172a" }}>
            O nosso desafio foi criar soluções sob quatro perspectivas extremas:
          </p>
          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px", margin: 0 }}>
            <li><span style={{ fontWeight: "600", color: "#6366f1" }}>1. Solução de alto custo:</span> O que faríamos se o orçamento fosse ilimitado?</li>
            <li><span style={{ fontWeight: "600", color: "#0ea5e9" }}>2. Acessível e ágil:</span> Como resolver o problema gastando o mínimo possível?</li>
            <li><span style={{ fontWeight: "600", color: "#8b5cf6" }}>3. Inspirada em jogos:</span> Como transformar a jornada em uma experiência gamificada e engajante?</li>
            <li><span style={{ fontWeight: "600", color: "#14b8a6" }}>4. Robótica e IoT:</span> Como a automação de hardware e sensores poderiam intervir na rotina?</li>
          </ul>
        </div>

        {/* Imagem do esboço */}
        <div style={{ 
          width: "100%", 
          maxWidth: "1000px", 
          backgroundColor: "white", 
          padding: "20px", 
          borderRadius: "24px", 
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)"
        }}>
          <img 
            src="/images/crazy4-sketch.jpg" 
            alt="Esboços do Crazy 4 mostrando as quatro soluções" 
            style={{ 
              width: "100%", 
              height: "auto", 
              borderRadius: "16px",
              display: "block"
            }} 
          />
        </div>

      </div>
    </Section>
  );
}

export default Crazy4;