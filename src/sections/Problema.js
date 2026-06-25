import SectionHeader from "../components/SectionHeader";

function Problema() {
  return (
    <section id="problema" className="problema-section">
      <div className="problema-inner">
        <SectionHeader eyebrow="O Contexto" title="O Problema" accent="#f43f5e" />
        <div className="problema-body" data-reveal>
          <p>
            Jovens adultos enfrentam dificuldades para iniciar sua jornada em
            investimentos, mesmo tendo acesso a uma grande quantidade de
            informações disponíveis online.
          </p>
          <p>
            A complexidade do tema, aliada à insegurança em relação a perdas
            financeiras e à falta de direcionamento claro, faz com que muitos não
            avancem além do interesse inicial.
          </p>
          <p>
            Como resultado, existe um distanciamento entre o interesse em
            aprender e a prática real de investir.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Problema;
