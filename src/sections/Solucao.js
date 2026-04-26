import Section from "../components/Section";
import Card from "../components/Card";

function Solucao() {
  return (
    <Section id="solucao" title="Conceito de Solução">
      <div className="grid-3">
        <Card>
          <h3> Metas Visuais</h3>
          <p>Objetivos com progresso e significado pessoal.</p>
        </Card>

        <Card>
          <h3> Gamificação</h3>
          <p>Sistema de recompensas e evolução.</p>
        </Card>

        <Card>
          <h3> Micro aprendizado</h3>
          <p>Conteúdo no momento certo.</p>
        </Card>
      </div>
    </Section>
  );
}

export default Solucao;