/**
 * Marca do InvesteJá: moeda com seta de crescimento ascendente,
 * usando o gradiente índigo/violeta da identidade.
 */
function Logo({ withWordmark = true }) {
  return (
    <span className="brand-mark">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="InvesteJá">
        <defs>
          <linearGradient id="logo-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="42" height="42" rx="13" fill="url(#logo-grad)" />
        <path
          d="M14 31 L21 24 L26 29 L34 19"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M28 18 H35 V25"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {withWordmark && <span className="footer-logo">InvesteJá</span>}
    </span>
  );
}

export default Logo;
