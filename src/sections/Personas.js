import { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

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
      <div className="grid-3">
        {personas.map((persona, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedPersona(persona)} 
            style={{ cursor: "pointer", height: "100%" }}
            title="Clique para ampliar"
          >
            <Card>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <img 
                  src={persona.image} 
                  alt={persona.name} 
                  style={{ 
                    width: "100%", 
                    height: "auto", 
                    maxHeight: "300px",
                    objectFit: "contain",
                    borderRadius: "12px",
                    backgroundColor: "#f1f5f9",
                    transition: "transform 0.3s ease"
                  }} 
                />
              </div>
              <h3 style={{ textAlign: "center", color: "#0f172a", marginBottom: "10px" }}>{persona.name}</h3>
              <p style={{ textAlign: "center", color: "#475569", lineHeight: "1.6" }}>{persona.description}</p>
              <p style={{ textAlign: "center", color: "#6366f1", fontSize: "14px", marginTop: "15px", fontWeight: "bold" }}>
                Ver persona em tela cheia ⤢
              </p>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox para mostrar a Persona Ampliada */}
      {selectedPersona && (
        <div 
          onClick={() => setSelectedPersona(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
            boxSizing: "border-box"
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} // Previne fechar ao clicar dentro do modal
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "20px",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
          >
            <button 
              onClick={() => setSelectedPersona(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                background: "none",
                border: "none",
                fontSize: "32px",
                cursor: "pointer",
                color: "#64748b",
                lineHeight: "1"
              }}
              title="Fechar"
            >
              &times;
            </button>
            <h2 style={{ color: "#0f172a", marginBottom: "20px" }}>{selectedPersona.name}</h2>
            <img 
              src={selectedPersona.image} 
              alt={selectedPersona.name} 
              style={{ 
                maxWidth: "100%", 
                maxHeight: "65vh", 
                objectFit: "contain", 
                borderRadius: "12px",
                backgroundColor: "#f8fafc"
              }} 
            />
            <p style={{ textAlign: "center", color: "#334155", fontSize: "18px", marginTop: "20px", maxWidth: "600px" }}>
              {selectedPersona.description}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
}

export default Personas;