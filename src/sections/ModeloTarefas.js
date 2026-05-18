import Section from "../components/Section";
import Mermaid from "../components/Mermaid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const htaChart = `
graph TD
    %% Estilos idênticos ao exemplo clássico de HTA
    classDef box fill:#ffffff,stroke:#000000,stroke-width:1.5px,color:#000000,font-size:14px;
    classDef plan fill:transparent,stroke:transparent,color:#000000,font-size:13px,font-style:italic;

    %% Nível 0
    T0["0. Gerenciar Aprendizado e Simulações"]:::box
    P0["Plano 0: Fazer 1 ou 4 livremente; ou 2 seguido de 3"]:::plan
    
    T0 --- P0

    %% Nível 1
    T1["1. Consultar Home"]:::box
    T2["2. Realizar Trilha"]:::box
    T3["3. Executar Simulação"]:::box
    T4["4. Consultar Perfil"]:::box

    P0 --- T1
    P0 --- T2
    P0 --- T3
    P0 --- T4

    %% Sub-árvore 1
    P1["Plano 1: Fazer 1.1 e 1.2. (1.3 opcional)"]:::plan
    T1 --- P1
    
    T1_1["1.1 Ver status"]:::box
    T1_2["1.2 Ler dica"]:::box
    T1_3["1.3 Atalho Simulação"]:::box
    
    P1 --- T1_1
    P1 --- T1_2
    P1 --- T1_3

    %% Sub-árvore 2
    P2["Plano 2: Fazer 2.1 >> 2.2 >> 2.3"]:::plan
    T2 --- P2
    
    T2_1["2.1 Selecionar módulo"]:::box
    T2_2["2.2 Consumir conteúdo"]:::box
    T2_3["2.3 Desbloquear ativos"]:::box
    
    P2 --- T2_1
    P2 --- T2_2
    P2 --- T2_3

    %% Sub-árvore 3
    P3["Plano 3: 3.1 >> 3.2(Opc) >> 3.3 >> 3.4. (3.5 livre). Fechar em 3.6"]:::plan
    T3 --- P3
    
    T3_1["3.1 Inserir montante"]:::box
    T3_2["3.2 Configurar aporte"]:::box
    T3_3["3.3 Selecionar objetivo"]:::box
    T3_4["3.4 Ver projeção"]:::box
    T3_5["3.5 Consultar Glossário"]:::box
    T3_6["3.6 Salvar ou Ajustar"]:::box

    P3 --- T3_1
    P3 --- T3_2
    P3 --- T3_3
    P3 --- T3_4
    P3 --- T3_5
    P3 --- T3_6

    %% Sub-árvore 4
    P4["Plano 4: Fazer 4.1 ou 4.2 livremente"]:::plan
    T4 --- P4
    
    T4_1["4.1 Histórico Salvo"]:::box
    T4_2["4.2 Perfil de Risco"]:::box
    
    P4 --- T4_1
    P4 --- T4_2
`;

function ModeloTarefas() {
  return (
    <Section id="modelo-tarefas" title="Análise Hierárquica de Tarefas (HTA)">
      <div 
        style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '20px', 
          boxShadow: '0 15px 40px rgba(0,0,0,0.06)', 
          marginTop: '20px'
        }}
      >
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: "20px" }}>
          Representação visual de como os usuários atingem seus objetivos no sistema. <br />
          <strong>Dica:</strong> Use o scroll do mouse ou pinça para dar zoom, e clique e arraste para mover.
        </p>

        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          centerOnInit={true}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Controles de Zoom */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                <button 
                  onClick={() => zoomIn()} 
                  style={{ padding: "8px 16px", backgroundColor: "#4f46e5", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
                >
                  Zoom +
                </button>
                <button 
                  onClick={() => zoomOut()} 
                  style={{ padding: "8px 16px", backgroundColor: "#4f46e5", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
                >
                  Zoom -
                </button>
                <button 
                  onClick={() => resetTransform()} 
                  style={{ padding: "8px 16px", backgroundColor: "#e2e8f0", color: "#334155", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
                >
                  Resetar
                </button>
              </div>

              {/* Área Interativa do Diagrama */}
              <div style={{ border: "2px dashed #cbd5e1", borderRadius: "12px", width: "100%", overflow: "hidden", backgroundColor: "#f8fafc", cursor: "grab" }}>
                <TransformComponent wrapperStyle={{ width: "100%", height: "600px" }}>
                  <div style={{ width: "100%", minWidth: "800px", padding: "40px" }}>
                    <Mermaid chart={htaChart} />
                  </div>
                </TransformComponent>
              </div>
            </div>
          )}
        </TransformWrapper>
      </div>
    </Section>
  );
}

export default ModeloTarefas;
