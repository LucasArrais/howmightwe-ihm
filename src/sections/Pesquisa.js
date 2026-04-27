import React from "react";

export default function Pesquisa() {
  return (
    <section id="pesquisa" className="section section-light">
      <h2>Pesquisa</h2>

      <p>
        Foi realizada uma pesquisa com jovens adultos com o objetivo de entender
        sua relação com educação financeira e investimentos, identificando
        comportamentos, barreiras e motivações.
      </p>
      <a 
    href="https://docs.google.com/forms/d/1IHvv8Ri42Gk6NMQ0YBAra_MwYvdrhwke-Q20W_BkN94/edit"
    target="_blank"
    rel="noreferrer"
    className="form-link"
    >
  🔗 Acessar formulário completo
</a>
      <div className="card">
        <h3>Contato com educação financeira</h3>

        <img
          src="/images/grafico1.png"
          alt="Contato com educação financeira"
          className="card-image"
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

      <div className="card-insight">
        <h3>Existe interesse, mas falta um caminho claro e seguro</h3>
        <p>
          Os dados mostram que há vontade de aprender e investir, mas a ausência
          de um fluxo guiado, simples e seguro impede que os usuários avancem
          para a prática. Isso revela uma oportunidade clara para soluções que
          combinem educação, simulação e uma experiência intuitiva.
        </p>
      </div>
    </section>
  );
}