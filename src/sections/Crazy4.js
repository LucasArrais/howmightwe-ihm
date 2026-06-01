import Section from "../components/Section";

function Crazy4() {
  return (
    <Section id="crazy-4" title="Crazy 4">
      <div 
        style={{ 
          textAlign: "center", 
          padding: "80px 40px", 
          background: "linear-gradient(135deg, #f8fafc, #f1f5f9)", 
          borderRadius: "24px", 
          boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)",
          border: "2px dashed #cbd5e1",
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{
          width: "80px",
          height: "80px",
          background: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          marginBottom: "24px"
        }}>
          <span style={{ fontSize: "40px" }}>✏️</span>
        </div>
        <h3 style={{ color: "#0f172a", fontSize: "28px", margin: "0 0 12px 0", fontWeight: "800" }}>Esboços do Crazy 4</h3>
        <p style={{ color: "#475569", fontSize: "18px", margin: 0, lineHeight: "1.6", maxWidth: "500px" }}>
          Os desenhos e ideias gerados na dinâmica de ideação rápida (Crazy 4) serão adicionados aqui em breve.
        </p>
      </div>
    </Section>
  );
}

export default Crazy4;