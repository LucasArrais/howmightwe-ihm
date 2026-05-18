import Header from "../components/Header";
import Hero from "../components/Hero";
import Problema from "../sections/Problema";
import Solucao from "../sections/Solucao";
import TLCE from "../sections/TLCE";
import Footer from "../components/Footer";
import MobilePrototype from "../components/MobilePrototype";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Problema />
      <TLCE />
      <Solucao />
      <MobilePrototype />
      <Footer />
    </>
  );
}

export default Home;