import Section from "../components/Section";
import Card from "../components/Card";

function HowMightWeSection() {
  return (
    <Section id="hmw" title="O Desafio">
      <Card>
        <div style={{ textAlign: "center", padding: "40px 20px" }}>
          <span style={{ fontSize: "50px", display: "block", marginBottom: "20px" }}>🎯</span>
          <h3 style={{ fontSize: "28px", color: "#4f46e5", marginBottom: "20px" }}>
            How Might We... (Como poderíamos...)
          </h3>
          <p style={{ fontSize: "22px", color: "#334155", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto", fontWeight: "500" }}>
            "...ajudar jovens adultos sem conhecimento financeiro a desenvolver interesse e hábitos de investimento de forma descomplicada, acessível e motivadora?"
          </p>
        </div>
      </Card>
    </Section>
  );
}

export default HowMightWeSection;