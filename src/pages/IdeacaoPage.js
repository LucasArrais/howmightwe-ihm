import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Personas from "../sections/Personas";
import Cenarios from "../sections/Cenarios";
import ModeloTarefas from "../sections/ModeloTarefas";
import Crazy4 from "../sections/Crazy4";
import MobilePrototype from "../components/MobilePrototype";
import Footer from "../components/Footer";

function IdeacaoPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Personas />
      <Cenarios />
      <ModeloTarefas />
      <Crazy4 />
      <MobilePrototype />
      <Footer />
    </>
  );
}

export default IdeacaoPage;