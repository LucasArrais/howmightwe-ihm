import { useState } from "react";
import Section from "../components/Section";

const personas = [
  {
    name: "Camila",
    image: "/images/personas/camila.png",
    description: "Jovem recém-formada que deseja organizar suas finanças mas acha o tema muito complexo."
  },
  {
    name: "Juliana",
    image: "/images/personas/juliana.png",
    description: "Trabalhadora autônoma que busca formas de poupar dinheiro para emergências."
  },
  {
    name: "Rafael",
    image: "/images/personas/rafael.jpg",
    description: "Estudante universitário que quer começar a investir com pouco dinheiro."
  }
];

function Personas() {
  const [selectedPersona, setSelectedPersona] = useState(null);

  return (
    <Section id="personas" title="Personas">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "20px" }}>
        {personas.map((persona, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedPersona(persona)} 
            style={{ 
              cursor: "pointer", 
              backgroundColor: "white", 
              borderRadius: "24px", 
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            }}
            title="Clique para ampliar"
          >
            <div style={{ 
              width: "100%", 
              height: "240px", 
              backgroundColor: "#f8fafc", 
              borderRadius: "16px",
              marginBottom: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden"
            }}>
              <img 
                src={persona.image} 
                alt={persona.name} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            <h3 style={{ fontSize: "24px", color: "#0f172a", margin: "0 0 12px 0", textAlign: "center" }}>{persona.name}</h3>
            <p style={{ color: "#475569", lineHeight: "1.6", margin: "0 0 20px 0", textAlign: "center", flex: 1 }}>{persona.description}</p>
            
            <div style={{ 
              background: "#e0e7ff", 
              color: "#4f46e5", 
              padding: "10px", 
              borderRadius: "10px", 
              textAlign: "center", 
              fontWeight: "600",
              fontSize: "14px"
            }}>
              Ver perfil completo ⤢
            </div>
          </div>
        ))}
      </div>

      {selectedPersona && (
        <div 
          onClick={() => setSelectedPersona(null)}
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            backgroundColor: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(8px)",
            display: "flex", justifyContent: "center", alignItems: "center",
            zIndex: 9999, padding: "20px", boxSizing: "border-box",
            cursor: "pointer"
          }}
          title="Clique fora para fechar"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{
              backgroundColor: "white", padding: "40px", borderRadius: "24px",
              maxWidth: "800px", width: "100%", maxHeight: "90vh", overflowY: "auto",
              position: "relative", display: "flex", flexDirection: "column",
              alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              cursor: "default"
            }}
          >
            <button 
              onClick={() => setSelectedPersona(null)}
              style={{
                position: "absolute", top: "20px", right: "20px",
                background: "#f1f5f9", border: "none", width: "40px", height: "40px",
                borderRadius: "50%", fontSize: "24px", cursor: "pointer",
                color: "#64748b", display: "flex", justifyContent: "center", alignItems: "center",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
              title="Fechar"
            >
              &times;
            </button>
            <h2 style={{ color: "#0f172a", fontSize: "32px", marginBottom: "30px" }}>{selectedPersona.name}</h2>
            <img 
              src={selectedPersona.image} 
              alt={selectedPersona.name} 
              style={{ 
                maxWidth: "100%", maxHeight: "50vh", objectFit: "contain", 
                borderRadius: "16px", backgroundColor: "#f8fafc"
              }} 
            />
            <p style={{ textAlign: "center", color: "#334155", fontSize: "20px", marginTop: "30px", maxWidth: "600px", lineHeight: "1.6" }}>
              {selectedPersona.description}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
}

export default Personas;