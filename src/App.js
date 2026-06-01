import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IdeacaoPage from "./pages/IdeacaoPage";
import HowMightWePage from "./pages/HowMightWePage";
import MapaEmpatiaPage from "./pages/MapaEmpatiaPage";
import QuestionarioPage from "./pages/QuestionarioPage";
import EntrevistasPage from "./pages/EntrevistasPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Rotas de Imersão */}
        <Route path="/imersao/how-might-we" element={<HowMightWePage />} />
        <Route path="/imersao/mapa-empatia" element={<MapaEmpatiaPage />} />
        <Route path="/imersao/questionario" element={<QuestionarioPage />} />
        <Route path="/imersao/entrevistas" element={<EntrevistasPage />} />

        <Route path="/ideacao" element={<IdeacaoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
