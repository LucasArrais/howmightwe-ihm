import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p className="footer-tagline">
            Portfólio de UX/UI Design · Interface Homem-Máquina 2026
          </p>
        </div>

        <div className="footer-divider" />

        <p className="footer-credits">
          © 2026 · Lucas Arrais · Alex Felippe · Miguel Ramos
        </p>
      </div>
    </footer>
  );
}

export default Footer;