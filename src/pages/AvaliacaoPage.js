import React from 'react';
import PageBanner from '../components/PageBanner';
import Section from '../components/Section';
import Footer from '../components/Footer';

const AvaliacaoPage = () => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  };

  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  };

  const buttonContainerStyle = {
    textAlign: 'center',
    marginTop: '40px'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '14px 28px',
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div className="page-container">
      <PageBanner title="Avaliação" description="Resultados da avaliação heurística do protótipo." />
      
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
          
          <div style={gridStyle}>
            {/* Exemplo 1: Gravidade Pequena */}
            <div style={cardStyle}>
              <h3 style={{ color: '#17a2b8', marginBottom: '15px' }}>Gravidade Pequena</h3>
              <p style={{ marginBottom: '10px' }}><strong>Problema:</strong> Links para os Termos de Uso e Política de Privacidade parecem clicáveis na interface, mas não executam nenhuma ação.</p>
              <p style={{ marginBottom: '10px' }}><strong>Diretrizes Violadas:</strong> Visibilidade do estado do sistema (1) e Consistência e padronização (4).</p>
              <p><strong>Sugestão de Redesign:</strong> Tornar os links funcionais ou remover a aparência clicável.</p>
            </div>

            {/* Exemplo 2: Gravidade Média */}
            <div style={cardStyle}>
              <h3 style={{ color: '#ffc107', marginBottom: '15px' }}>Gravidade Média</h3>
              <p style={{ marginBottom: '10px' }}><strong>Problema:</strong> O modal de recompensa aparece repetidamente sempre que o usuário retorna para a tela inicial (Home), interrompendo o fluxo do usuário.</p>
              <p style={{ marginBottom: '10px' }}><strong>Diretrizes Violadas:</strong> Visibilidade do estado do sistema (1), Controle e liberdade do usuário (3) e Projeto estético e minimalista (7).</p>
              <p><strong>Sugestão de Redesign:</strong> Exibir o modal apenas uma vez ou permitir a sua desativação.</p>
            </div>

            {/* Exemplo 3: Gravidade Grande */}
            <div style={cardStyle}>
              <h3 style={{ color: '#fd7e14', marginBottom: '15px' }}>Gravidade Grande</h3>
              <p style={{ marginBottom: '10px' }}><strong>Problema:</strong> Na tela de simulação, o controle deslizante (slider) monetário é impreciso e inadequado ao contexto financeiro.</p>
              <p style={{ marginBottom: '10px' }}><strong>Diretrizes Violadas:</strong> Correspondência entre o sistema e o mundo real (2), Controle e liberdade do usuário (3) e Flexibilidade e eficiência de uso (6).</p>
              <p><strong>Sugestão de Redesign:</strong> Substituir o slider por um campo numérico formatado.</p>
            </div>

            {/* Exemplo 4: Gravidade Catastrófica */}
            <div style={cardStyle}>
              <h3 style={{ color: '#dc3545', marginBottom: '15px' }}>Gravidade Catastrófica</h3>
              <p style={{ marginBottom: '10px' }}><strong>Problema:</strong> O sistema informa que o salvamento ocorreu com sucesso, mas os dados da simulação não são salvos nem exibidos ao usuário.</p>
              <p style={{ marginBottom: '10px' }}><strong>Diretrizes Violadas:</strong> Visibilidade do estado do sistema (1) e Consistência e padronização (4).</p>
              <p><strong>Sugestão de Redesign:</strong> Garantir a persistência dos dados e a exibição das simulações salvas para o usuário.</p>
            </div>
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
          
          <div style={buttonContainerStyle}>
            <a 
              href="https://drive.google.com/file/d/1SRwAMQyTTBznlCmwYaX8Um_Ap_b8hfCu/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={buttonStyle}
            >
              Acessar Avaliação na Íntegra
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default AvaliacaoPage;