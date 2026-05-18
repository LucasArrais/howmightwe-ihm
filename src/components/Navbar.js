import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'active-link' : ''}
      >
        Início
      </Link>
      <Link 
        to="/pesquisa" 
        className={location.pathname === '/pesquisa' ? 'active-link' : ''}
      >
        Pesquisa
      </Link>
      <Link 
        to="/cenarios" 
        className={location.pathname === '/cenarios' ? 'active-link' : ''}
      >
        Cenários-Problema
      </Link>
      <Link 
        to="/modelo-tarefas" 
        className={location.pathname === '/modelo-tarefas' ? 'active-link' : ''}
      >
        Modelo de Tarefas
      </Link>
      <Link 
        to="/mercado" 
        className={location.pathname === '/mercado' ? 'active-link' : ''}
      >
        Mercado & Insights
      </Link>
    </nav>
  );
}

export default Navbar;