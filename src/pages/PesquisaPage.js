import Header from "../components/Header";
import Pesquisa from "../sections/Pesquisa";
import Metodologia from "../sections/Metodologia";
import Entrevistas from "../sections/Entrevistas";
import Empatia from "../sections/Empatia";
import Personas from "../sections/Personas";
import Footer from "../components/Footer";

function PesquisaPage() {
  return (
    <>
      <Header />
      <Pesquisa />
      <Metodologia />
      <Personas />
      <Entrevistas />
      <Empatia />
      <Footer />
    </>
  );
}

export default PesquisaPage;