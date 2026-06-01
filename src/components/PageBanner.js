import { Link } from "react-router-dom";

function PageBanner({ eyebrow, title, description }) {
  return (
    <div className="page-banner">
      <div className="page-banner-inner">
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
          <Link 
            to="/" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "#a5b4fc", 
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              padding: "8px 16px",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "100px",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "#a5b4fc";
            }}
          >
            <span>←</span> Voltar para o Início
          </Link>
        </div>
        {eyebrow && <div className="page-banner-eyebrow">{eyebrow}</div>}
        <h1 className="page-banner-title">{title}</h1>
        {description && <p className="page-banner-desc">{description}</p>}
      </div>
    </div>
  );
}

export default PageBanner;
