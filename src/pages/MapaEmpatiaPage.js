import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import Empatia from "../sections/Empatia";

function MapaEmpatiaPage() {
  return (
    <>
      <PageBanner
        eyebrow="Imersão · Pesquisa"
        title="Mapa de Empatia"
        description="O que os usuários falam, pensam, fazem e sentem sobre investimentos"
      />
      <Empatia />
      <Footer />
    </>
  );
}

export default MapaEmpatiaPage;