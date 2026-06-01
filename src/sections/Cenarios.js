import Section from "../components/Section";

const cenarios = [
  {
    id: 1,
    title: "Cenário 1: Início e Sobrecarga",
    actor: "Camila Fontes (estagiária, iniciante em investimentos)",
    image: "/images/personas/camila_perfil.jpg",
    story: [
      "Após receber seu salário de estágio, Camila decide que quer começar a investir uma pequena parte do seu dinheiro. À noite, deitada na cama, ela abre um aplicativo de banco digital que já utiliza para gerenciar seus gastos.",
      "Ao acessar a área de investimentos, ela se depara com diversas opções e termos que não entende completamente. A interface apresenta gráficos, nomes técnicos e diferentes tipos de aplicação, sem um direcionamento claro para iniciantes.",
      "Camila tenta clicar em algumas opções, mas não encontra explicações simples ou guias visuais que a ajudem a entender o que está fazendo. Após alguns minutos tentando navegar, ela se sente confusa e insegura.",
      "Frustrada, decide sair da área de investimentos e volta para redes sociais, adiando novamente a decisão de investir."
    ],
    painPoints: [
      "Alta carga cognitiva na interface",
      "Falta de orientação passo a passo",
      "Uso excessivo de termos técnicos",
      "Ausência de affordances claras"
    ]
  },
  {
    id: 2,
    title: "Cenário 2: Conhecimento sem Ação",
    actor: "Rafael Nogueira (estudante, conhecimento teórico)",
    image: "/images/personas/rafael_perfil.jpg",
    story: [
      "Rafael já estudou conceitos de investimento através de sites especializados e conversas com amigos. Ele entende termos como renda fixa, variável e diversificação, e acredita estar preparado para começar.",
      "Em um momento livre na universidade, ele acessa uma plataforma de investimentos pelo celular com a intenção de aplicar seu dinheiro.",
      "Ao visualizar as opções disponíveis, ele percebe que, apesar de conhecer os conceitos, não se sente seguro para tomar decisões reais. A interface não oferece um ambiente de simulação ou validação das suas escolhas.",
      "Rafael começa a questionar suas decisões e imaginar possíveis perdas financeiras. Mesmo tendo conhecimento teórico, ele não encontra um espaço seguro para testar ou validar suas estratégias.",
      "Diante disso, decide não investir naquele momento, mantendo seu dinheiro parado."
    ],
    painPoints: [
      "Falta de ambiente seguro para prática (simulação)",
      "Insegurança na tomada de decisão",
      "Falta de ponte entre teoria e prática",
      "Medo de perda financeira"
    ]
  },
  {
    id: 3,
    title: "Cenário 3: Falta de Tempo + Complexidade",
    actor: "Juliana Barros (profissional, nível intermediário)",
    image: "/images/personas/juliana_perfil.jpg",
    story: [
      "Juliana trabalha como analista de dados e possui uma rotina intensa. Mesmo entendendo a importância de investir, ela tem pouco tempo disponível para estudar o assunto em profundidade.",
      "Durante uma pausa no trabalho, ela acessa uma plataforma de investimentos com o objetivo de aplicar parte do seu salário.",
      "Ao navegar pelo sistema, encontra gráficos detalhados, diversas opções e explicações longas e complexas. Apesar de compreender parte das informações, sente que o processo exige mais tempo e esforço do que ela pode dedicar naquele momento.",
      "Ela gostaria de visualizar simulações simples e diretas, que a ajudassem a tomar decisões rápidas e seguras, mas não encontra esse tipo de funcionalidade.",
      "Diante da complexidade, Juliana decide adiar a decisão para outro momento."
    ],
    painPoints: [
      "Falta de objetividade nas informações",
      "Excesso de complexidade nas interfaces",
      "Ausência de simulações rápidas e diretas",
      "Falta de suporte para decisões ágeis"
    ]
  }
];

function Cenarios() {
  return (
    <Section id="cenarios" title="Cenários de Problema">
      <div style={{ display: "flex", flexDirection: "column", gap: "60px", marginTop: "20px" }}>
        {cenarios.map((cenario) => (
          <div 
            key={cenario.id} 
            style={{ 
              display: "flex", 
              flexDirection: "column",
              backgroundColor: "white", 
              borderRadius: "24px", 
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)"
            }}
          >
            {/* Header do Cenário */}
            <div style={{ 
              background: "linear-gradient(135deg, #0f172a, #1e1b4b)", 
              color: "white", 
              padding: "30px 40px",
              display: "flex",
              alignItems: "center",
              gap: "24px"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#f8fafc",
                overflow: "hidden",
                border: "4px solid #6366f1",
                flexShrink: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 0 20px rgba(99,102,241,0.4)"
              }}>
                <img 
                  src={cenario.image} 
                  alt={cenario.actor} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "28px", color: "white", fontWeight: "800" }}>{cenario.title}</h3>
                <p style={{ margin: "8px 0 0 0", color: "#a5b4fc", fontSize: "16px", fontWeight: "500" }}><strong>Ator:</strong> {cenario.actor}</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", padding: "40px" }}>
              <div style={{ background: "#f8fafc", padding: "30px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ color: "#4f46e5", marginBottom: "20px", fontSize: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "24px" }}>🗺️</span> A Jornada
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {cenario.story.map((paragraph, idx) => (
                    <p key={idx} style={{ color: "#334155", lineHeight: "1.7", margin: 0, fontSize: "16px" }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ color: "#e11d48", marginBottom: "20px", fontSize: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "24px" }}>⚠️</span> Pontos Problemáticos
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {cenario.painPoints.map((point, idx) => (
                    <li 
                      key={idx} 
                      style={{ 
                        backgroundColor: "#fff1f2", 
                        color: "#be123c", 
                        padding: "16px", 
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        border: "1px solid #fecdd3"
                      }}
                    >
                      <span style={{ display: "inline-block", width: "8px", height: "8px", backgroundColor: "#f43f5e", borderRadius: "50%" }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Cenarios;
