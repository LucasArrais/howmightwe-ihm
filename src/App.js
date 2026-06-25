import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IdeacaoPage from "./pages/IdeacaoPage";
import HowMightWePage from "./pages/HowMightWePage";
import MapaEmpatiaPage from "./pages/MapaEmpatiaPage";
import QuestionarioPage from "./pages/QuestionarioPage";
import EntrevistasPage from "./pages/EntrevistasPage";
import AvaliacaoPage from "./pages/AvaliacaoPage";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import useScrollReveal from "./hooks/useScrollReveal";

function AppRoutes() {
  useScrollReveal();

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Rotas de Imersão */}
      <Route path="/imersao/how-might-we" element={<HowMightWePage />} />
      <Route path="/imersao/mapa-empatia" element={<MapaEmpatiaPage />} />
      <Route path="/imersao/questionario" element={<QuestionarioPage />} />
      <Route path="/imersao/entrevistas" element={<EntrevistasPage />} />

      <Route path="/ideacao" element={<IdeacaoPage />} />
      <Route path="/avaliacao" element={<AvaliacaoPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollProgress />
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
