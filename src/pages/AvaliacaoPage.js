import React from 'react';
import PageBanner from '../components/PageBanner';
import Section from '../components/Section';
import Footer from '../components/Footer';

const problemas = [
  {
    severidade: 'Pequena',
    nivel: 'aval-pequena',
    problema:
      'Links para os Termos de Uso e Política de Privacidade parecem clicáveis na interface, mas não executam nenhuma ação.',
    diretrizes: 'Visibilidade do estado do sistema (1) e Consistência e padronização (4).',
    sugestao: 'Tornar os links funcionais ou remover a aparência clicável.',
  },
  {
    severidade: 'Média',
    nivel: 'aval-media',
    problema:
      'O modal de recompensa aparece repetidamente sempre que o usuário retorna para a tela inicial (Home), interrompendo o fluxo do usuário.',
    diretrizes:
      'Visibilidade do estado do sistema (1), Controle e liberdade do usuário (3) e Projeto estético e minimalista (7).',
    sugestao: 'Exibir o modal apenas uma vez ou permitir a sua desativação.',
  },
  {
    severidade: 'Grande',
    nivel: 'aval-grande',
    problema:
      'Na tela de simulação, o controle deslizante (slider) monetário é impreciso e inadequado ao contexto financeiro.',
    diretrizes:
      'Correspondência entre o sistema e o mundo real (2), Controle e liberdade do usuário (3) e Flexibilidade e eficiência de uso (6).',
    sugestao: 'Substituir o slider por um campo numérico formatado.',
  },
  {
    severidade: 'Catastrófica',
    nivel: 'aval-catastrofica',
    problema:
      'O sistema informa que o salvamento ocorreu com sucesso, mas os dados da simulação não são salvos nem exibidos ao usuário.',
    diretrizes: 'Visibilidade do estado do sistema (1) e Consistência e padronização (4).',
    sugestao:
      'Garantir a persistência dos dados e a exibição das simulações salvas para o usuário.',
  },
];

const AvaliacaoPage = () => {
  return (
    <div className="page-container">
      <PageBanner
        eyebrow="Fase 3 · Avaliação da interação"
        title="Avaliação"
        description="Resultados da avaliação heurística do protótipo."
      />

      <main className="page-content">
        <Section title="Avaliação Heurística" id="avaliacao-heuristica">
          <p>
            O aplicativo InvesteJá tem como objetivo auxiliar jovens adultos a desenvolver hábitos de
            investimento de forma descomplicada, acessível e motivadora. Nossas metas de design estão
            relacionadas a critérios de qualidade de uso como usabilidade, em especial aspectos como
            facilidade de aprendizado, segurança no uso e satisfação no uso.
          </p>
          <p>
            Assim, para testar e melhorar a qualidade da interação com o aplicativo, foi aplicada a
            técnica de avaliação heurística, um método de avaliação por inspeção. Durante a avaliação,
            as telas do aplicativo foram analisadas com base nas heurísticas de design de usabilidade
            estabelecidas por Jakob Nielsen para identificar problemas e oportunidades de melhoria na interface.
          </p>
        </Section>

        <Section title="Inconsistências Encontradas" id="inconsistencias">
          <p>
            Abaixo, destacamos quatro exemplos de problemas de usabilidade encontrados no protótipo,
            categorizados por seu nível de gravidade, indicando as diretrizes violadas e as soluções propostas:
          </p>

          <div className="aval-grid">
            {problemas.map((p) => (
              <div key={p.severidade} className={`aval-card ${p.nivel}`}>
                <span className="aval-badge">
                  <span className="aval-badge-dot" />
                  Gravidade {p.severidade}
                </span>
                <p className="aval-field">
                  <strong>Problema:</strong> {p.problema}
                </p>
                <p className="aval-field">
                  <strong>Diretrizes violadas:</strong> {p.diretrizes}
                </p>
                <p className="aval-field aval-field--last">
                  <strong>Sugestão de redesign:</strong> {p.sugestao}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Conclusão" id="conclusao">
          <p>
            A avaliação heurística evidenciou que, apesar da proposta do aplicativo ser sólida, bem
            direcionada ao público-alvo e de possuir um design estético em estágio relativamente satisfatório,
            existem falhas críticas que comprometem a realização de tarefas fundamentais.
          </p>
          <p>
            Foram identificadas dificuldades na comunicação entre o sistema e o usuário (como a falta de
            feedbacks reais) e barreiras que reduzem significativamente a autonomia de navegação. A principal
            funcionalidade do app, a simulação de investimentos, foi a área mais afetada por esses problemas.
          </p>
          <p>
            Contudo, a identificação desses pontos fornece um direcionamento claro e estabelece prioridades
            de correção para as próximas iterações do protótipo, contribuindo diretamente para a construção
            de uma experiência financeira mais eficiente, segura e agradável para os jovens.
          </p>

          <div className="aval-cta-wrap">
            <a
              href="https://drive.google.com/file/d/1SRwAMQyTTBznlCmwYaX8Um_Ap_b8hfCu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="aval-cta"
            >
              Acessar Avaliação na Íntegra →
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default AvaliacaoPage;
