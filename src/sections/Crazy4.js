import Section from "../components/Section";

function Crazy4() {
  return (
    <Section id="crazy-4" title="Crazy 4">
      <div 
        style={{ 
          textAlign: "center", 
          padding: "60px", 
          backgroundColor: "white", 
          borderRadius: "20px", 
          boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
          border: "2px dashed #cbd5e1"
        }}
      >
        <span style={{ fontSize: "40px" }}>✏️</span>
        <h3 style={{ color: "#0f172a", marginTop: "15px" }}>Esboços do Crazy 4</h3>
        <p style={{ color: "#64748b", fontSize: "16px", marginTop: "10px" }}>
          Os desenhos e ideias gerados na dinâmica do Crazy 4 serão adicionados aqui em breve.
        </p>
      </div>
    </Section>
  );
}

export default Crazy4;