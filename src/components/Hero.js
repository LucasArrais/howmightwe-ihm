import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-eyebrow">Portfólio de UX/UI Design · IHM 2026</div>

      <h1 className="hero-title">
        <span className="hero-title-highlight">InvesteJá</span>
      </h1>

      <p className="hero-subtitle">
        Como poderíamos ajudar jovens adultos a desenvolver hábitos de
        investimento de forma <em>descomplicada</em>, <em>acessível</em> e <em>motivadora</em>?
      </p>

      <div className="hero-tags">
        <span> Gamificação</span>
        <span> Educação Financeira</span>
        <span> Consistência</span>
      </div>

      <div className="hero-cta-group">
        <Link to="/ideacao#prototipo" className="hero-cta-primary">
          Ver Protótipo
        </Link>
        <a href="#overview" className="hero-cta-secondary">
          Conhecer o processo
        </a>
      </div>

      <div className="hero-scroll-hint">
        <span>Role para explorar</span>
        <div className="hero-scroll-arrow" />
      </div>
    </section>
  );
}

export default Hero;
