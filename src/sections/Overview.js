import Section from "../components/Section";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Overview() {
  return (
    <Section id="overview" title="Visão Geral do Projeto">
      <div style={{ textAlign: "center", color: "#475569", fontSize: "18px", maxWidth: "800px", margin: "0 auto 40px auto", lineHeight: "1.6" }}>
        <p>
          Este portfólio documenta todo o processo de UX/UI Design do <strong>InvesteJá</strong>. 
          Abaixo você encontra as principais etapas do nosso projeto, detalhando como fomos da compreensão do problema até a ideação do protótipo final.
        </p>
      </div>
      
      <div className="grid-3">
        <Link to="/pesquisa" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card clickable" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "40px", marginBottom: "10px" }}>🔍</span>
            <h3 style={{ color: "#0f172a", margin: 0 }}>Pesquisa</h3>
            <p style={{ color: "#475569", margin: 0, lineHeight: "1.5" }}>
              Nossa metodologia, entrevistas com usuários, mapa de empatia e descobertas iniciais sobre a relação dos jovens com o dinheiro.
            </p>
            <p style={{ color: "#4f46e5", fontWeight: "bold", marginTop: "auto", paddingTop: "15px" }}>Ver etapa ➔</p>
          </div>
        </Link>

        <Link to="/ideacao" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card clickable" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "40px", marginBottom: "10px" }}>💡</span>
            <h3 style={{ color: "#0f172a", margin: 0 }}>Ideação</h3>
            <p style={{ color: "#475569", margin: 0, lineHeight: "1.5" }}>
              Nossas Personas, Cenários-Problema, Modelo de Tarefas (HTA), esboços (Crazy 4) e o protótipo funcional em alta fidelidade.
            </p>
            <p style={{ color: "#4f46e5", fontWeight: "bold", marginTop: "auto", paddingTop: "15px" }}>Ver etapa ➔</p>
          </div>
        </Link>

        <Link to="/mercado" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card clickable" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "40px", marginBottom: "10px" }}>📊</span>
            <h3 style={{ color: "#0f172a", margin: 0 }}>Mercado & Insights</h3>
            <p style={{ color: "#475569", margin: 0, lineHeight: "1.5" }}>
              Nossas Certezas, Suposições e Dúvidas (CSD), análise de mercado, referências visuais e as oportunidades identificadas.
            </p>
            <p style={{ color: "#4f46e5", fontWeight: "bold", marginTop: "auto", paddingTop: "15px" }}>Ver etapa ➔</p>
          </div>
        </Link>
      </div>
    </Section>
  );
}

export default Overview;