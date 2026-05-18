import Card from "../components/Card";

export default function Metodologia() {
  return (
    <section id="metodologia" className="section section-dark">
      <h2>Metodologia</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <Card>
          <h3>Técnica utilizada: Entrevista qualitativa</h3>
          <p>
            A técnica escolhida foi a entrevista individual, por permitir uma
            compreensão profunda da relação pessoal dos jovens com o dinheiro,
            incluindo inseguranças, percepções e comportamentos.
          </p>
          <p>
            O formato cria um ambiente seguro para que os participantes expressem
            suas experiências de forma aberta e detalhada.
          </p>
        </Card>

        <div className="grid-2">
          <Card>
            <h3>Objetivos da pesquisa</h3>
            <ul style={{ lineHeight: "1.6" }}>
              <li>Identificar barreiras que impedem o início dos investimentos</li>
              <li>Entender motivações e gatilhos de interesse</li>
              <li>Mapear como consomem conteúdo financeiro</li>
            </ul>
          </Card>

          <Card>
            <h3>Perfis dos participantes</h3>
            <p><strong>Perfil A:</strong> 18–24 anos (universitários/estagiários)</p>
            <p><strong>Perfil B:</strong> 25–30 anos (jovens profissionais)</p>
          </Card>
        </div>

        <div className="grid-2">
          <Card>
            <h3>Amostra</h3>
            <p>10 participantes no total</p>
            <ul style={{ lineHeight: "1.6" }}>
              <li>5 do Perfil A</li>
              <li>5 do Perfil B</li>
            </ul>
          </Card>

          <Card>
            <h3>Coleta de dados</h3>
            <p>Entrevistas presenciais</p>
            <p>Gravação de áudio + anotações</p>
          </Card>
        </div>

        <Card>
          <h3>Análise dos dados</h3>
          <p>
            Foi utilizada análise temática para identificar padrões recorrentes
            nas falas dos participantes.
          </p>
          <ol style={{ lineHeight: "1.6" }}>
            <li>Transcrição das entrevistas</li>
            <li>Codificação de padrões</li>
            <li>Agrupamento em temas principais</li>
          </ol>
        </Card>
      </div>
    </section>
  );
}