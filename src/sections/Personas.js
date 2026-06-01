import { useState } from "react";
import Section from "../components/Section";

const personas = [
  {
    name: "Camila",
    image: "/images/personas/camila.png",
    description: ""
  },
  {
    name: "Juliana",
    image: "/images/personas/juliana.png",
    description: ""
  },
  {
    name: "Rafael",
    image: "/images/personas/rafael.jpg",
    description: ""
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
              backgroundColor: "transparent", padding: 0,
              maxWidth: "1000px", width: "95%", maxHeight: "95vh",
              position: "relative", display: "flex", flexDirection: "column",
              alignItems: "center", cursor: "default"
            }}
          >
            <button 
              onClick={() => setSelectedPersona(null)}
              style={{
                position: "absolute", top: "16px", right: "16px",
                background: "rgba(15, 23, 42, 0.6)", border: "none", width: "40px", height: "40px",
                borderRadius: "50%", fontSize: "24px", cursor: "pointer",
                color: "white", display: "flex", justifyContent: "center", alignItems: "center",
                transition: "background 0.2s", zIndex: 10, backdropFilter: "blur(4px)"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.9)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.6)'}
              title="Fechar"
            >
              &times;
            </button>
            <img 
              src={selectedPersona.image} 
              alt={selectedPersona.name} 
              style={{ 
                maxWidth: "100%", maxHeight: "90vh", width: "auto", height: "auto",
                objectFit: "contain", display: "block",
                borderRadius: "16px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }} 
            />
            {selectedPersona.description && (
              <div style={{ backgroundColor: "white", width: "100%", maxWidth: "900px", borderRadius: "16px", marginTop: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                <p style={{ textAlign: "center", color: "#334155", fontSize: "22px", padding: "32px", margin: 0, lineHeight: "1.6" }}>
                  {selectedPersona.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}

export default Personas;
