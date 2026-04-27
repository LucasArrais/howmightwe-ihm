import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "problema", label: "Problema" },
  { id: "pesquisa", label: "Pesquisa" },
  { id: "metodologia", label: "Metodologia" },
  { id: "entrevistas", label: "Entrevistas" },
  { id: "empatia", label: "Empatia" },
  { id: "tlce", label: "TLCE" },
  { id: "insights", label: "Insights" },
  { id: "csd", label: "CSD" },
  { id: "mercado", label: "Mercado" },
  { id: "referencias", label: "Referências" },
  { id: "oportunidade", label: "Oportunidade" },
  { id: "solucao", label: "Solução" }
];

function SidebarNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      let closest = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);

        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < closest) {
            closest = distance;
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 100;

      const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="sidebar-nav">
      {sections.map((sec) => (
        <div
          key={sec.id}
          className={`nav-dot ${active === sec.id ? "active" : ""}`}
          onClick={() => scrollTo(sec.id)}
        >
          <span>{sec.label}</span>
        </div>
      ))}
    </div>
  );
}

export default SidebarNav;