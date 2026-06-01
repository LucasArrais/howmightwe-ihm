import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import Entrevistas from "../sections/Entrevistas";

function EntrevistasPage() {
  return (
    <>
      <PageBanner
        eyebrow="Imersão · Pesquisa"
        title="Entrevistas Realizadas"
        description="Entrevistas individuais semiestruturadas com jovens adultos"
      />
      <Entrevistas />
      <Footer />
    </>
  );
}

export default EntrevistasPage;