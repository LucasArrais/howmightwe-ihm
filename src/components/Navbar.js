import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'active-link' : ''}
      >
        Início
      </Link>

      {/* Botão de Dropdown Imersão */}
      <div 
        className="nav-dropdown" 
        onMouseEnter={() => setDropdownOpen(true)} 
        onMouseLeave={() => setDropdownOpen(false)}
        onClick={() => setDropdownOpen(!dropdownOpen)} /* Garante que toque/clique direto também funcione */
      >
        <div style={{ paddingBottom: "25px", marginBottom: "-25px", display: "flex", alignItems: "center", position: "relative", zIndex: 50 }}>
          <span className={`nav-dropbtn ${location.pathname.startsWith('/imersao') ? 'active-link' : ''}`}>
            Imersão ▾
          </span>
        </div>
        {dropdownOpen && (
          <div className="nav-dropdown-content">
            <div style={{ padding: "10px 0" }}>
              <Link to="/imersao/how-might-we" onClick={() => setDropdownOpen(false)}>How Might We</Link>
              <Link to="/imersao/mapa-empatia" onClick={() => setDropdownOpen(false)}>Mapa de Empatia</Link>
              <Link to="/imersao/questionario" onClick={() => setDropdownOpen(false)}>Resultados do Questionário</Link>
              <Link to="/imersao/entrevistas" onClick={() => setDropdownOpen(false)}>Entrevistas Realizadas</Link>
            </div>
          </div>
        )}
      </div>

      <Link 
        to="/ideacao" 
        className={location.pathname === '/ideacao' ? 'active-link' : ''}
      >
        Ideação
      </Link>
    </nav>
  );
}

export default Navbar;