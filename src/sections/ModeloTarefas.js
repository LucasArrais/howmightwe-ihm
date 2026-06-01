import Section from "../components/Section";
import Mermaid from "../components/Mermaid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const htaChart = `
graph TD
    %% Ajuste de paleta baseado no Quick Reference Guide para consistência visual e acessibilidade
    classDef system fill:#E0F2FE,stroke:#0284C7,stroke-width:2px,color:#0F172A;
    classDef user fill:#DCFCE7,stroke:#10B981,stroke-width:2px,color:#064E3B;
    classDef decision fill:#F3E8FF,stroke:#A855F7,stroke-width:2px,color:#4C1D95;
    classDef error fill:#FEE2E2,stroke:#EF4444,stroke-width:2px,color:#7F1D1D;

    Start((Início: Abrir App)) --> AuthCheck{Usuário logado?}:::decision

    AuthCheck -- Não --> Login[Realizar Login / Cadastro]:::user --> OnboardingCheck
    AuthCheck -- Sim --> OnboardingCheck{Concluiu Onboarding?}:::decision

    %% Fluxo de Onboarding (Obrigatório no 1º acesso)
    OnboardingCheck -- Não --> OB1[Informar Renda Atual]:::user
    OB1 --> OB2[Definir Objetivo Principal]:::user
    OB2 --> OB3[Informar Nível de Conhecimento]:::user
    OB3 --> SysSaveProfile[Sistema: Salvar Perfil e Sinalizar Onboarding Completo]:::system
    SysSaveProfile --> Dashboard[Acessar Dashboard Principal]:::user

    OnboardingCheck -- Sim --> Dashboard

    %% Decisão Principal de Navegação
    Dashboard --> MenuDecision{Qual funcionalidade acessar?}:::decision

    %% ==========================================
    %% MÓDULO LEARNING (Aprendizado)
    %% ==========================================
    MenuDecision -- Aprender --> LearnList[Visualizar Lista de Lições]:::user
    LearnList --> SelectLesson{Escolher Lição}:::decision
    
    SelectLesson -- Lição Bloqueada --> SysBlock[Sistema: Bloquear Acesso e Exibir Aviso]:::system
    SysBlock --> LearnList
    
    SelectLesson -- Lição Desbloqueada --> ReadLesson[Ler Conteúdo da Lição]:::user
    ReadLesson --> QuizOpt{Realizar Quiz de Fixação?}:::decision
    
    QuizOpt -- Não (Opcional) --> LearnList
    QuizOpt -- Sim --> AnswerQuiz[Responder Pergunta do Quiz]:::user
    AnswerQuiz --> SysEvalQuiz{Sistema: Resposta Correta?}:::decision

    SysEvalQuiz -- Não --> SysToastErr[Sistema: Exibir Toast de Erro]:::error
    SysToastErr --> RetryQuiz{Tentar Novamente?}:::decision
    RetryQuiz -- Sim --> AnswerQuiz
    RetryQuiz -- Não --> LearnList

    SysEvalQuiz -- Sim --> SysRewardQuiz[Sistema: +10 XP, Confetti, Desbloquear Próxima Lição]:::system
    SysRewardQuiz --> LearnList

    %% ==========================================
    %% MÓDULO SIMULATOR (Simulador)
    %% ==========================================
    MenuDecision -- Simular --> SimMain[Acessar Menu do Simulador]:::user
    SimMain --> SimType{Escolher Tipo de Simulação}:::decision

    SimType -- Baseada em Objetivo --> SimGoalParams[Inserir: Valor Alvo e Prazo em Meses]:::user
    SimGoalParams --> SysValidateGoal{Sistema: Parâmetros Válidos?}:::decision
    SysValidateGoal -- Não --> SysErrGoal[Sistema: Alerta de Limites do Slider]:::error --> SimGoalParams
    SysValidateGoal -- Sim --> SysCalcGoal[Sistema: Calcular Aporte Mensal Necessário]:::system

    SimType -- Investimento Específico --> SimInvParams[Inserir: Valor Inicial, Aporte Mensal, Prazo, Tipo de Ativo]:::user
    SimInvParams --> SysValidateInv{Sistema: Parâmetros Válidos?}:::decision
    SysValidateInv -- Não --> SysErrInv[Sistema: Alerta de Limites do Slider]:::error --> SimInvParams
    SysValidateInv -- Sim --> SysCalcInv[Sistema: Calcular Rendimento e Montante Final]:::system

    SysCalcGoal --> SimResults[Visualizar Resultados e Gráficos]:::user
    SysCalcInv --> SimResults

    SimResults --> SaveSimDec{Deseja Salvar Simulação?}:::decision
    SaveSimDec -- Não (Opcional) --> Dashboard
    SaveSimDec -- Sim --> SysSaveSim[Sistema: +30 XP, Confetti, Salvar Perfil do Usuário]:::system
    SysSaveSim --> Dashboard

    %% ==========================================
    %% MÓDULO PROFILE (Perfil e Acompanhamento)
    %% ==========================================
    MenuDecision -- Perfil --> ProfileMain[Acessar Tela de Perfil]:::user
    ProfileMain --> ProfileAction{Escolher Ação}:::decision

    ProfileAction -- Ver Configurações --> Settings[Alterar Preferências]:::user --> ProfileMain

    ProfileAction -- Acompanhar Metas --> ViewSims[Visualizar Simulações Salvas]:::user
    ViewSims --> UpdateSimDec{Atualizar Progresso de uma Meta?}:::decision
    
    UpdateSimDec -- Não --> ProfileMain
    UpdateSimDec -- Sim --> InputProgress[Inserir Valor do Novo Aporte]:::user
    InputProgress --> SysValidateAporte{Sistema: Valor Válido e Positivo?}:::decision
    
    SysValidateAporte -- Não --> SysErrAporte[Sistema: Exibir Erro de Validação]:::error --> InputProgress
    SysValidateAporte -- Sim --> SysUpdateCalc[Sistema: Recalcular Progresso Geral]:::system
    SysUpdateCalc --> SysCheckGoal{Sistema: Atingiu 100% da Meta?}:::decision

    SysCheckGoal -- Não --> SysUpdateNormal[Sistema: Atualizar Barra de Progresso + Toast de Sucesso]:::system
    SysUpdateNormal --> ProfileMain

    SysCheckGoal -- Sim --> SysUpdateWin[Sistema: Confetti Especial + Conceder Badge de Conquista]:::system
    SysUpdateWin --> ProfileMain

    %% Legenda do Modelo
    subgraph Legenda
        L1[Ação do Usuário]:::user
        L2[Ação do Sistema]:::system
        L3{Decisão / Validação}:::decision
        L4[Fluxo de Exceção / Erro]:::error
    end
`;

function ModeloTarefas() {
  return (
    <Section id="modelo-tarefas" title="Análise Hierárquica de Tarefas (HTA)">
      <div 
        style={{ 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '24px', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.05)',
          marginTop: '20px'
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px", padding: "20px", background: "#f8fafc", borderRadius: "16px" }}>
          <p style={{ color: "#334155", margin: 0, fontSize: "16px", lineHeight: "1.6" }}>
            Representação visual de como os usuários atingem seus objetivos no sistema.<br />
            <span style={{ color: "#4f46e5", fontWeight: "600" }}>💡 Dica:</span> Use o scroll do mouse ou pinça para dar zoom, e clique e arraste para mover o diagrama.
          </p>
        </div>

        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          centerOnInit={true}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
                <button 
                  onClick={() => zoomIn()} 
                  style={{ padding: "10px 20px", backgroundColor: "#4f46e5", color: "white", border: "none", borderRadius: "100px", cursor: "pointer", fontWeight: "600", fontSize: "14px", transition: "transform 0.2s", boxShadow: "0 4px 12px rgba(79,70,229,0.3)" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                >
                  ➕ Zoom
                </button>
                <button 
                  onClick={() => zoomOut()} 
                  style={{ padding: "10px 20px", backgroundColor: "#4f46e5", color: "white", border: "none", borderRadius: "100px", cursor: "pointer", fontWeight: "600", fontSize: "14px", transition: "transform 0.2s", boxShadow: "0 4px 12px rgba(79,70,229,0.3)" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                >
                  ➖ Reduzir
                </button>
                <button 
                  onClick={() => resetTransform()} 
                  style={{ padding: "10px 20px", backgroundColor: "#f1f5f9", color: "#334155", border: "1px solid #e2e8f0", borderRadius: "100px", cursor: "pointer", fontWeight: "600", fontSize: "14px", transition: "background 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
                >
                  🔄 Resetar
                </button>
              </div>

              <div className="zoom-container">
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
