import Section from "../components/Section";
import CSDColumn from "../components/CSDColumn";
import { csdData } from "../data/csdData";

function CSD() {
  return (
    <Section id="csd" title="Matriz CSD">
      <div className="csd-container">
        <CSDColumn title="Certezas" items={csdData.certezas} color="blue" />
        <CSDColumn title="Suposições" items={csdData.suposicoes} color="yellow" />
        <CSDColumn title="Dúvidas" items={csdData.duvidas} color="red" />
      </div>
    </Section>
  );
}

export default CSD;