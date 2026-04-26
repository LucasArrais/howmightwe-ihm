import Header from "../components/Header";
import Hero from "../components/Hero";
import SidebarNav from "../components/SidebarNav";

import Problema from "../sections/Problema";
import Pesquisa from "../sections/Pesquisa";
import Insights from "../sections/Insights";
import CSD from "../sections/CSD";
import Mercado from "../sections/Mercado";
import Referencias from "../sections/Referencias";
import Oportunidade from "../sections/Oportunidade";
import Solucao from "../sections/Solucao";

function Home() {
  return (
    <>
      <SidebarNav />
      <Header />
      <Hero />

      <Problema />
      <Pesquisa />
      <Insights />
      <CSD />
      <Mercado />
      <Referencias />
      <Oportunidade />
      <Solucao />
    </>
  );
}

export default Home;