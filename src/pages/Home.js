import Hero from "../components/Hero";
import Overview from "../sections/Overview";
import Numeros from "../sections/Numeros";
import Problema from "../sections/Problema";
import Solucao from "../sections/Solucao";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Numeros />
      <Problema />
      <Solucao />
      <Footer />
    </>
  );
}

export default Home;
