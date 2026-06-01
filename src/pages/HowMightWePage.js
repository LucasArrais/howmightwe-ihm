import Header from "../components/Header";
import Footer from "../components/Footer";
import HowMightWeSection from "../sections/HowMightWeSection";
import Insights from "../sections/Insights";
import CSD from "../sections/CSD";
import Mercado from "../sections/Mercado";
import Referencias from "../sections/Referencias";
import Oportunidade from "../sections/Oportunidade";

function HowMightWePage() {
  return (
    <>
      <Header />
      <HowMightWeSection />
      <Insights />
      <CSD />
      <Mercado />
      <Referencias />
      <Oportunidade />
      <Footer />
    </>
  );
}

export default HowMightWePage;