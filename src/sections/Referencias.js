import Section from "../components/Section";
import Card from "../components/Card";

function Referencias() {
  return (
    <Section id="referencias" title="Referências de Engajamento">
      <div className="grid-2">

        <Card>
          <img src="/images/duolingo.png" alt="Duolingo" className="card-image duolingo-img" />
          <h3>Duolingo</h3>
          <p>Uso de gamificação, recompensas e micro aprendizado.</p>
        </Card>

        <Card>
          <img src="/images/habitica.png" alt="Habitica" className="card-image habitica-img" />
          <h3>Habitica</h3>
          <p>Transforma hábitos em um sistema de jogo com progressão.</p>
        </Card>
      </div>
    </Section>
  );
}

export default Referencias;