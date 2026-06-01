import Section from "../components/Section";

function UsoIA() {
  return (
    <Section id="uso-ia" title="Como utilizamos IA">
      <div 
        style={{ 
          backgroundColor: "white", 
          padding: "40px", 
          borderRadius: "24px", 
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <div style={{
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px"
        }}>
          <span style={{ fontSize: "40px" }}>🤖</span>
        </div>
        
        <h3 style={{ color: "#0f172a", fontSize: "28px", margin: "0 0 16px 0", fontWeight: "800" }}>
          Inteligência Artificial no Processo
        </h3>
        
        <p style={{ color: "#475569", fontSize: "18px", margin: "0 0 32px 0", lineHeight: "1.7", maxWidth: "700px" }}>
            Durante o desenvolvimento do projeto, notamos que poderíamos utilizar de IA para auxiliar no desenvolvimento do nosso protótipo e tirar nossas ideias do papel, aqui estão os prompts utilizados.
        </p>

        <a 
          href="https://docs.google.com/document/d/1Ho7qoTNhRUbQc2ZEX82ZHqjC_im5545JgTK2NpPEFVg/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: "inline-block",
            padding: "16px 32px", 
            backgroundColor: "#4f46e5", 
            color: "white", 
            textDecoration: "none",
            borderRadius: "100px", 
            fontWeight: "600", 
            fontSize: "16px", 
            transition: "all 0.2s", 
            boxShadow: "0 10px 25px rgba(79,70,229,0.3)" 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(79,70,229,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(79,70,229,0.3)';
          }}
        >
          📄 Ler Documentação de IA
        </a>
      </div>
    </Section>
  );
}

export default UsoIA;
