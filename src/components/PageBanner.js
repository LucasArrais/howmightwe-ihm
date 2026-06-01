function PageBanner({ eyebrow, title, description }) {
  return (
    <div className="page-banner">
      <div className="page-banner-inner">
        {eyebrow && <div className="page-banner-eyebrow">{eyebrow}</div>}
        <h1 className="page-banner-title">{title}</h1>
        {description && <p className="page-banner-desc">{description}</p>}
      </div>
    </div>
  );
}

export default PageBanner;
