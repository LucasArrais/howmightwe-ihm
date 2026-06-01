import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import Questionario from "../sections/Questionario";

function QuestionarioPage() {
  return (
    <>
      <PageBanner
        eyebrow="Imersão · Pesquisa"
        title="Resultados do Questionário"
        description="Pesquisa quantitativa com mais de 50 participantes sobre educação financeira"
      />
      <Questionario />
      <Footer />
    </>
  );
}

export default QuestionarioPage;