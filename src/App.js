import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PesquisaPage from "./pages/PesquisaPage";
import MercadoPage from "./pages/MercadoPage";
import CenariosPage from "./pages/CenariosPage";
import ModeloTarefasPage from "./pages/ModeloTarefasPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pesquisa" element={<PesquisaPage />} />
        <Route path="/cenarios" element={<CenariosPage />} />
        <Route path="/modelo-tarefas" element={<ModeloTarefasPage />} />
        <Route path="/mercado" element={<MercadoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
