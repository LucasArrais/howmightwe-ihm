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

    %% Fluxos Automáticos do Dashboard
    Dashboard --> SysCheckStreak{Sistema: Atingiu marco de dias seguidos?}:::decision
    SysCheckStreak -- Sim --> SysStreakModal[Sistema: Exibir Modal de Fogo, +50 XP e Badge de Sequência]:::system --> MenuDecision
    SysCheckStreak -- Não --> MenuDecision{Qual funcionalidade acessar?}:::decision

    %% ==========================================
    %% MÓDULO LEARNING (Aprendizado)
    %% ==========================================
    MenuDecision -- Aprender --> LearnList[Visualizar Lista de Lições]:::user
    LearnList --> SelectLesson{Escolher Lição}:::decision
    
    SelectLesson -- Lição Bloqueada --> SysBlock[Sistema: Bloquear Acesso e Exibir Aviso]:::system
    SysBlock --> LearnList
    
    SelectLesson -- Lição Desbloqueada --> ReadLesson[Ler Conteúdo da Lição em Slides]:::user
    ReadLesson --> QuizOpt{Realizar Quiz de Fixação?}:::decision
    
    QuizOpt -- Não (Opcional) --> LearnList
    QuizOpt -- Sim --> AnswerQuiz[Responder Pergunta do Quiz]:::user
    AnswerQuiz --> SysEvalQuiz{Sistema: Resposta Correta?}:::decision

    SysEvalQuiz -- Não --> SysToastErr[Sistema: Exibir Feedback Visual e Toast de Erro]:::error
    SysToastErr --> RetryQuiz{Tentar Novamente?}:::decision
    RetryQuiz -- Sim --> AnswerQuiz
    RetryQuiz -- Não --> LearnList

    %% Correção de XP e Adição de Missões/Badges
    SysEvalQuiz -- Sim --> SysRewardQuiz[Sistema: +50 XP, Confetti, Marcar Missão Diária e Desbloquear Próxima Lição]:::system
    SysRewardQuiz --> SysFirstLesson{Sistema: É a primeira lição concluída?}:::decision
    SysFirstLesson -- Sim --> SysAddBadgeLesson[Sistema: Conceder Badge Estudioso]:::system --> LearnList
    SysFirstLesson -- Não --> LearnList

    %% ==========================================
    %% MÓDULO SIMULATOR (Simulador)
    %% ==========================================
    MenuDecision -- Simular --> SimMain[Acessar Menu do Simulador]:::user
    SimMain --> SimType{Escolher Tipo de Simulação}:::decision

    %% Detalhamento de Passos Baseados em Objetivo
    SimType -- Baseada em Objetivo --> SimGoalCat[Escolher Categoria Existente ou Objetivo Personalizado]:::user
    SimGoalCat --> SimGoalParams[Definir via Sliders: Valor Alvo e Prazo em Meses]:::user
    SimGoalParams --> SysValidateGoal{Sistema: Parâmetros Válidos?}:::decision
    SysValidateGoal -- Não --> SysErrGoal[Sistema: Alerta de Limites do Slider]:::error --> SimGoalParams
    SysValidateGoal -- Sim --> SysCalcGoal[Sistema: Calcular Aporte Mensal Necessário PMT]:::system
    SysCalcGoal --> SimGoalStrategy[Selecionar Estratégia: Conservador, Moderado ou Arrojado]:::user
    SimGoalStrategy --> SimResults

    %% Detalhamento de Passos de Investimento Específico
    SimType -- Investimento Específico --> SimInvAsset[Selecionar Ativo: Poupança, CDB, Ações ou Criptomoedas]:::user
    SimInvAsset --> SimInvParams[Definir via Sliders: Valor Inicial, Aporte Mensal e Prazo]:::user
    SimInvParams --> SysValidateInv{Sistema: Ambos os valores são Zero?}:::decision
    SysValidateInv -- Sim --> SysErrInv[Sistema: Alerta para preencher pelo menos um valor]:::error --> SimInvParams
    SysValidateInv -- Não --> SysCalcInv[Sistema: Calcular Rendimento com ou sem Volatilidade]:::system
    SysCalcInv --> SimResults

    SimResults[Visualizar Gráficos de Evolução, Prós/Contras e Comparação]:::user --> SaveSimDec{Deseja Salvar Simulação?}:::decision
    SaveSimDec -- Não (Opcional) --> Dashboard
    
    %% Correção de Missões e Badges
    SaveSimDec -- Sim --> SysSaveSim[Sistema: +30 XP, Confetti, Marcar Missão Diária e Salvar]:::system
    SysSaveSim --> SysFirstSim{Sistema: É a primeira simulação salva?}:::decision
    SysFirstSim -- Sim --> SysAddBadgeSim[Sistema: Conceder Badge Primeira Simulação]:::system --> Dashboard
    SysFirstSim -- Não --> Dashboard

    %% ==========================================
    %% MÓDULO PROFILE (Perfil e Acompanhamento)
    %% ==========================================
    MenuDecision -- Perfil --> ProfileMain[Acessar Tela de Perfil: Ver Stats, Nível, Streak e Badges]:::user
    ProfileMain --> ProfileAction{Escolher Ação}:::decision

    %% Detalhamento das Configurações
    ProfileAction -- Ver Configurações --> Settings[Acessar Menu de Configurações]:::user
    Settings --> SettingsOpt{Escolher Categoria de Configuração}:::decision
    
    SettingsOpt -- Editar Perfil --> EditProf[Atualizar Dados Cadastrais e Avatar]:::user --> Settings
    
    %% ==========================================
    %% SUB-MÓDULO CENTRAL DE AJUDA (Inclusão Nova)
    %% ==========================================
    SettingsOpt -- Central de Ajuda --> HelpCenter[Acessar Central de Ajuda]:::user
    HelpCenter --> HelpAction{Qual seção da Ajuda?}:::decision
    
    HelpAction -- Barra de Busca --> HelpSearch[Digitar Dúvida na Busca]:::user
    HelpSearch --> SysHelpFilter[Sistema: Filtrar FAQ Dinamicamente]:::system --> HelpCenter
    
    HelpAction -- Categorias de FAQ --> HelpFAQ[Explorar: Primeiros Passos, Simulações, Investimentos, Conta]:::user
    HelpFAQ --> SysHelpToggle[Sistema: Expandir/Colapsar Resposta do FAQ]:::system --> HelpCenter
    
    HelpAction -- Guia Rápido --> HelpGuide[Abrir Modal: Guia Rápido Multi-passos]:::user
    HelpGuide --> HelpGuideNav[Navegar pelos Passos Educacionais do Guia]:::user --> HelpCenter
    
    HelpAction -- Fale Conosco --> HelpContact[Abrir Modal: Formulário de Contato]:::user
    HelpContact --> HelpContactInput[Preencher E-mail e Mensagem]:::user
    HelpContactInput --> SysHelpValidate{Sistema: Dados Obrigatórios Preenchidos?}:::decision
    SysHelpValidate -- Não --> SysHelpErr[Sistema: Exibir Alerta de Campo Vazio]:::error --> HelpContactInput
    SysHelpValidate -- Sim --> SysHelpSend[Sistema: Simular Envio e Toast de Sucesso]:::system --> HelpCenter
    
    HelpAction -- Voltar --> Settings
    
    SettingsOpt -- Preferências/Notificações --> DataPref[Alternar preferências de risco e de Notificações]:::user --> Settings
    SettingsOpt -- Sobre o App --> AboutApp[Visualizar Versão, Stack e Termos Legais]:::user --> Settings
    SettingsOpt -- Voltar --> ProfileMain

    ProfileAction -- Acompanhar Metas --> ViewSims[Visualizar Simulações Salvas]:::user
    ViewSims --> UpdateSimDec{Atualizar Progresso de uma Meta?}:::decision
    
    UpdateSimDec -- Não --> ProfileMain
    
    %% Atualização com Limites de Meses e Aporte
    UpdateSimDec -- Sim --> InputProgress[Abrir Modal: Informar Meses Decorridos e Valor Investido]:::user
    InputProgress --> SysValidateAporte{Sistema: Valores respeitam o prazo e meta limite?}:::decision
    
    SysValidateAporte -- Não --> SysErrAporte[Sistema: Impedir Entrada Inválida / Travar Slider]:::error --> InputProgress
    SysValidateAporte -- Sim --> SysUpdateCalc[Sistema: Recalcular Progresso e Sugestão Inteligente]:::system
    SysUpdateCalc --> SysCheckGoal{Sistema: Valor Investido atingiu 100% da Meta?}:::decision

    SysCheckGoal -- Não --> SysUpdateNormal[Sistema: Atualizar Gráfico Real x Projetado + Toast Normal]:::system
    SysUpdateNormal --> ProfileMain

    %% Adição de Badge
    SysCheckGoal -- Sim --> SysUpdateWin[Sistema: Confetti Especial de 150 Partículas + Toast de Meta Alcançada]:::system
    SysUpdateWin --> SysBadgeGoal[Sistema: Conceder Badge Realizador de Metas]:::system --> ProfileMain

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
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
            padding: "20px",
            background: "#f8fafc",
            borderRadius: "16px",
          }}
        >
          <p
            style={{
              color: "#334155",
              margin: 0,
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            Representação visual de como os usuários atingem seus objetivos no
            sistema.
            <br />
            <span style={{ color: "#4f46e5", fontWeight: "600" }}>
              💡 Dica:
            </span>{" "}
            Use o scroll do mouse ou pinça para dar zoom, e clique e arraste
            para mover o diagrama.
          </p>
        </div>

        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          centerOnInit={true}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", gap: "12px", marginBottom: "20px" }}
              >
                <button
                  onClick={() => zoomIn()}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4f46e5",
                    color: "white",
                    border: "none",
                    borderRadius: "100px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "14px",
                    transition: "transform 0.2s",
                    boxShadow: "0 4px 12px rgba(79,70,229,0.3)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                >
                  ➕ Zoom
                </button>
                <button
                  onClick={() => zoomOut()}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4f46e5",
                    color: "white",
                    border: "none",
                    borderRadius: "100px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "14px",
                    transition: "transform 0.2s",
                    boxShadow: "0 4px 12px rgba(79,70,229,0.3)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                >
                  ➖ Reduzir
                </button>
                <button
                  onClick={() => resetTransform()}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#f1f5f9",
                    color: "#334155",
                    border: "1px solid #e2e8f0",
                    borderRadius: "100px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "14px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#e2e8f0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#f1f5f9")
                  }
                >
                  🔄 Resetar
                </button>
              </div>

              <div className="zoom-container">
                <TransformComponent
                  wrapperStyle={{ width: "100%", height: "600px" }}
                >
                  <div
                    style={{
                      width: "100%",
                      minWidth: "800px",
                      padding: "40px",
                    }}
                  >
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
