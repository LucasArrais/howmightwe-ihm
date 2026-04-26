import Section from "../components/Section";
import Card from "../components/Card";

function Insights() {
  return (
    <Section id="insights" title="Principais Insights">
      <div className="grid-3">
        <Card>
          <h3> Barreiras</h3>
          <p>
            Medo de perder dinheiro, linguagem complexa e falta de conhecimento.
          </p>
        </Card>

        <Card>
          <h3> Motivações</h3>
          <p>
            Independência financeira, objetivos de vida e conquistas pessoais.
          </p>
        </Card>

        <Card>
          <h3>Oportunidade</h3>
          <p>
            Gamificação pode transformar aprendizado financeiro em hábito.
          </p>
        </Card>
      </div>
    </Section>
  );
}

export default Insights;