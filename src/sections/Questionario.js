import Section from "../components/Section";
import Card from "../components/Card";

function ProgressBar({ label, percentage }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontWeight: "600", color: "#334155" }}>{label}</span>
        <span style={{ color: "#4f46e5", fontWeight: "bold" }}>{percentage}%</span>
      </div>
      <div style={{ width: "100%", backgroundColor: "#e2e8f0", borderRadius: "10px", height: "14px", overflow: "hidden" }}>
        <div style={{ width: `${percentage}%`, backgroundColor: "#4f46e5", height: "100%", borderRadius: "10px", transition: "width 1s ease-in-out" }}></div>
      </div>
    </div>
  );
}

function Questionario() {
  return (
    <Section id="questionario" title="Resultados do Questionário">

      {/* Metodologia Quantitativa */}
      <div style={{ marginBottom: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Metodologia da Pesquisa</h2>
        <Card>
          <h3 style={{ marginBottom: "15px", color: "#0f172a" }}>Técnica utilizada: Pesquisa Quantitativa (Formulário)</h3>
          <p style={{ color: "#334155", lineHeight: "1.6" }}>
            Foi realizada uma pesquisa online com jovens adultos com o objetivo de entender sua relação com educação financeira e investimentos, mapeando comportamentos, barreiras e motivações em uma amostra de 50 participantes.
          </p>
          <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>
            <p style={{ fontWeight: "600", color: "#0f172a", marginBottom: "15px" }}>
              Acesse os dados brutos e todas as respostas coletadas:
            </p>
            <a
              href="https://docs.google.com/forms/d/1IHvv8Ri42Gk6NMQ0YBAra_MwYvdrhwke-Q20W_BkN94/viewanalytics"
              target="_blank"
              rel="noreferrer"
              className="form-link"
              style={{ display: "inline-block", margin: "0" }}
            >
              🔗 Ver resultados completos (Google Forms)
            </a>
          </div>
        </Card>
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Dados Levantados</h2>
      <div className="grid-2">
        <Card>
          <h3 style={{ marginBottom: "25px", color: "#0f172a" }}>Faixa Etária</h3>
          <ProgressBar label="18 a 24 anos" percentage={60} />
          <ProgressBar label="25 a 30 anos" percentage={30} />
          <ProgressBar label="Acima de 30 anos" percentage={10} />
        </Card>

        <Card>
          <h3 style={{ marginBottom: "25px", color: "#0f172a" }}>Você investe atualmente?</h3>
          <ProgressBar label="Não, mas quero começar" percentage={70} />
          <ProgressBar label="Sim, apenas poupança" percentage={20} />
          <ProgressBar label="Sim, ativamente" percentage={10} />
        </Card>
      </div>

      <div style={{ marginTop: "30px", marginBottom: "50px" }}>
        <Card>
          <h3 style={{ marginBottom: "25px", color: "#0f172a" }}>Maiores barreiras para investir</h3>
          <div className="grid-2">
            <div>
              <ProgressBar label="Falta de conhecimento / Complexidade" percentage={55} />
              <ProgressBar label="Medo de perder dinheiro" percentage={25} />
            </div>
            <div>
              <ProgressBar label="Acha que precisa de muito dinheiro" percentage={15} />
              <ProgressBar label="Falta de tempo para estudar" percentage={5} />
            </div>
          </div>
        </Card>
      </div>

      {/* Insights */}
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Nossos Insights</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div className="card">
          <h3>Contato com educação financeira</h3>
          <img
            src="/images/grafico1.png"
            alt="Contato com educação financeira"
            className="card-image"
            style={{ width: "100%", borderRadius: "8px", marginTop: "15px", marginBottom: "15px" }}
          />
          <div className="card-insight">
            <h3>Usuários não são iniciantes — estão no meio do caminho</h3>
            <p>
              A maioria das pessoas já teve algum contato com educação financeira,
              mas não avançou para uma prática consistente. Isso mostra que o
              problema não está no acesso inicial, mas na continuidade da jornada.
            </p>
          </div>
        </div>

        <div className="card">
          <h3>Principais barreiras</h3>
          <img
            src="/images/grafico2.png"
            alt="Barreiras para investir"
            className="card-image"
            style={{ width: "100%", borderRadius: "8px", marginTop: "15px", marginBottom: "15px" }}
          />
          <div className="card-insight">
            <h3>Barreiras são cognitivas e emocionais</h3>
            <p>
              A dificuldade de entendimento se soma ao medo de perder dinheiro,
              criando um bloqueio duplo que impede o início dos investimentos.
            </p>
          </div>
        </div>

        <div className="card">
          <h3>Percepções sobre investir</h3>
          <img
            src="/images/grafico3.png"
            alt="Percepções sobre investimento"
            className="card-image"
            style={{ width: "100%", borderRadius: "8px", marginTop: "15px", marginBottom: "15px" }}
          />
          <div className="card-insight">
            <h3>Existe interesse, mas falta direcionamento</h3>
            <p>
              Apesar das dificuldades, muitos demonstram vontade de aprender,
              mas não sabem por onde começar, evidenciando a ausência de um
              caminho claro para iniciantes.
            </p>
          </div>
        </div>

        <div className="card">
          <h3>Motivadores para começar</h3>
          <img
            src="/images/grafico4.png"
            alt="Motivadores para investir"
            className="card-image"
            style={{ width: "100%", borderRadius: "8px", marginTop: "15px", marginBottom: "15px" }}
          />
          <div className="card-insight">
            <h3>Clareza e segurança são os maiores motivadores</h3>
            <p>
              Conteúdos simples, simulações sem risco e aplicativos intuitivos
              aparecem como principais fatores que incentivam o início,
              mostrando que usuários priorizam entendimento antes de retorno
              financeiro.
            </p>
          </div>
        </div>

        <div className="card-insight" style={{ backgroundColor: "#4f46e5", color: "white" }}>
          <h3 style={{ color: "white" }}>Conclusão Geral: Existe interesse, mas falta um caminho claro e seguro</h3>
          <p style={{ color: "#e0e7ff" }}>
            Os dados mostram que há vontade de aprender e investir, mas a ausência
            de um fluxo guiado, simples e seguro impede que os usuários avancem
            para a prática. Isso revela uma oportunidade clara para soluções que
            combinem educação, simulação e uma experiência intuitiva.
          </p>
        </div>
      </div>

    </Section>
  );
}

export default Questionario;