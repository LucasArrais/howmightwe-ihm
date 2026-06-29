import Section from "../components/Section";

const testesAplicados = [
  { nome: "Alex", url: "https://app.useberry.com/t/E7Z1cSdH4HbUPd/" },
  { nome: "Lucas", url: "https://app.useberry.com/t/MP98NE34BIm1fh/" },
  { nome: "Miguel", url: "https://app.useberry.com/t/z6EcbFAxtBUWov/" },
];

const tarefas = [
  {
    nome: "Realizar uma simulação",
    enunciado: "“Imagine que você queira realizar uma simulação. Onde clicaria?”",
    n: 17,
    tempo: "11,9s",
    confianca: "6,5/7",
    acerto: "82%",
    rodadas: [
      { img: "realizar-simulacao-a.png", cliques: 6 },
      { img: "realizar-simulacao-b.png", cliques: 6 },
      { img: "realizar-simulacao-c.png", cliques: 5 },
    ],
    leitura:
      "A maioria foi direto à aba Simular, com confiança alta (6,5/7). A variação entre rodadas chama atenção: em duas delas o acerto foi de 100%, mas numa terceira metade dos participantes clicou em Aprender, puxando o acerto consolidado para 82%. O tempo relativamente alto (11,9s) sugere alguma deliberação antes de decidir.",
    implicacao:
      "Reforçar o rótulo e o ícone de Simular como ação primária reduziria a hesitação que ainda aparece em parte dos casos.",
  },
  {
    nome: "Visualizar simulações salvas",
    enunciado:
      "“Imagine que você queira visualizar suas simulações salvas. Onde clicaria?”",
    n: 9,
    tempo: "11,4s",
    confianca: "4,2/7",
    acerto: "44%",
    rodadas: [
      { img: "visualizar-simulacoes-a.png", cliques: 4 },
      { img: "visualizar-simulacoes-b.png", cliques: 5 },
    ],
    leitura:
      "A tarefa mais problemática do teste: o menor acerto (44%) e a menor confiança (4,2/7), com respostas polarizadas. Os cliques se dividiram quase igualmente entre Perfil (o destino esperado) e Simular, revelando um modelo mental em que o usuário procura as simulações salvas no mesmo lugar onde as cria. O tempo alto (11,4s) reforça a hesitação.",
    implicacao:
      "Expor as simulações salvas dentro de Simular, ou criar um atalho visível para elas, alinharia a interface a essa expectativa.",
  },
  {
    nome: "Aprender / ver aulas",
    enunciado:
      "“Imagine que você gostaria de ver aulas / aprender mais. Onde clicaria?”",
    n: 17,
    tempo: "5,8s",
    confianca: "6,1/7",
    acerto: "94%",
    rodadas: [
      { img: "aprender-a.png", cliques: 5 },
      { img: "aprender-b.png", cliques: 6 },
      { img: "aprender-c.png", cliques: 6 },
    ],
    leitura:
      "Acesso ao aprendizado bem resolvido (94% de acerto, confiança 6,1/7). Surgiram dois caminhos naturais: o card de destaque “Continue sua jornada” e a aba Aprender. Os participantes se dividiram conforme a rodada (em uma, quase todos usaram o card central; em outras, a aba inferior), e ambos levam ao conteúdo. Foi também uma das tarefas mais rápidas (5,8s).",
    implicacao:
      "Manter os dois pontos de entrada é positivo, desde que ambos levem ao mesmo destino de aprendizado (consistência de destino).",
  },
  {
    nome: "Visualizar perfil",
    enunciado: "“Imagine que você queira visualizar seu perfil. Onde clicaria?”",
    n: 10,
    tempo: "2,3s",
    confianca: "6,8/7",
    acerto: "90%",
    rodadas: [
      { img: "visualizar-perfil-a.png", cliques: 5 },
      { img: "visualizar-perfil-b.png", cliques: 5 },
    ],
    leitura:
      "A tarefa mais intuitiva: maior confiança (6,8/7), 90% de acerto e o menor tempo (2,3s). O rótulo “Perfil” corresponde diretamente à aba, e quase todos acertaram de primeira; o único desvio foi um clique isolado no meio da tela. Confiança alta e tempo baixo juntos indicam uma decisão imediata, sem dúvida.",
    implicacao:
      "Padrão a ser mantido no resto do app: rótulo direto e correspondência clara entre a intenção do usuário e o destino.",
  },
];

function FirstClick() {
  return (
    <>
      <Section title="Teste de First Click" id="first-click">
        <p>
          O teste de <strong>primeiro clique</strong> avalia se o caminho inicial
          de uma tarefa é intuitivo: registra-se onde o usuário clica primeiro ao
          receber um objetivo, sem que ele navegue de fato. É um forte indicador de
          quão clara é a arquitetura de informação e a affordance dos elementos.
        </p>
        <p>
          O teste foi aplicado sobre o protótipo de alta fidelidade na plataforma{" "}
          <strong>Useberry</strong> (não-moderado, remoto). Foram conduzidas três
          rodadas independentes sobre o <strong>mesmo protótipo</strong>; como
          várias tarefas se repetiam entre elas, as respostas de cada tarefa foram{" "}
          <strong>consolidadas</strong>. Após cada tarefa, os participantes ainda
          avaliaram sua <strong>confiança</strong> (escala de 1 a 7) e, ao final,
          o quanto <strong>recomendariam</strong> o aplicativo.
        </p>
      </Section>

      <Section title="Resultados por tarefa" id="first-click-resultados">
        <p>
          Cada tarefa traz os mapas de calor de <strong>todas as rodadas</strong> em
          que ela apareceu (cada captura foi feita por um aplicador diferente, por
          isso os enquadramentos variam). Juntos, eles mostram todos os cliques por
          trás das métricas consolidadas.
        </p>

        <div className="fc-grid">
          {tarefas.map((t) => (
            <div className="fc-card" key={t.nome} data-reveal>
              <div className="fc-shots">
                {t.rodadas.map((r, i) => (
                  <figure className="fc-shot" key={r.img}>
                    <img
                      src={`/images/firstclick/${r.img}`}
                      alt={`Mapa de calor da rodada ${i + 1} para a tarefa ${t.nome}`}
                      loading="lazy"
                    />
                    <figcaption>
                      Rodada {i + 1} · {r.cliques} cliques
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="fc-body">
                <h3 className="fc-task">{t.nome}</h3>
                <p className="fc-enunciado">{t.enunciado}</p>
                <div className="fc-stats">
                  <span className="fc-stat">
                    <strong>{t.n}</strong> participantes
                  </span>
                  <span className="fc-stat">
                    <strong>{t.tempo}</strong> tempo médio
                  </span>
                  <span className="fc-stat">
                    <strong>{t.confianca}</strong> confiança
                  </span>
                  <span className="fc-stat">
                    <strong>{t.acerto}</strong> de acerto
                  </span>
                </div>
                <p className="fc-leitura">{t.leitura}</p>
                <p className="fc-implicacao">
                  <strong>Implicação:</strong> {t.implicacao}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="fc-reco" data-reveal>
          <div className="fc-reco-score">
            4,3<span>/7</span>
          </div>
          <div className="fc-reco-text">
            <strong>Recomendação do app.</strong> Ao final, perguntamos o quanto os
            participantes recomendariam o InvesteJá a um amigo (escala de 1 a 7). A
            média foi <strong>4,3/7</strong>, com respostas <strong>polarizadas</strong>{" "}
            (4 deram nota de 6 a 7; 3 deram nota de 1 a 2): a proposta agrada parte do
            público, mas as barreiras de navegação ainda pesam.
          </div>
        </div>

        <div className="fc-links" data-reveal>
          <span className="fc-links-label">
            Acesse os testes aplicados no Useberry:
          </span>
          <div className="fc-links-row">
            {testesAplicados.map((t) => (
              <a
                key={t.url}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="fc-link"
              >
                Teste de {t.nome} ↗
              </a>
            ))}
          </div>
        </div>

        <p className="fc-note">
          O acerto considera os cliques dentro da área esperada de cada tarefa; na
          tarefa de aprender, tanto o card “Continue sua jornada” quanto a aba Aprender
          contam como acerto. A confiança média vem das rodadas que usaram a escala de
          1 a 7.
        </p>
      </Section>
    </>
  );
}

export default FirstClick;
