import Section from "../components/Section";
import Card from "../components/Card";

function Mercado() {
  return (
    <Section id="mercado" title="Análise de Mercado">
      <div className="grid-3">

        <Card>
          <img
            src="/images/nubank.jpg"
            alt="Nubank"
            className="card-image"
          />
          <h3>Nubank</h3>
          <p>
            Interface simples e objetivos financeiros com “caixinhas”.
          </p>
        </Card>

        <Card>
          <img
            src="/images/warren.jpg"
            alt="Warren"
            className="card-image"
          />
          <h3>Warren</h3>
          <p>
            Investimentos baseados em objetivos de vida e automação.
          </p>
        </Card>

        <Card>
          <img
            src="/images/rico.jpg"
            alt="Rico"
            className="card-image"
          />
          <h3>Rico</h3>
          <p>
            Educação financeira disponível, mas com interface mais complexa.
          </p>
        </Card>

      </div>
    </Section>
  );
}

export default Mercado;