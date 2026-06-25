/**
 * Ilustração do Hero: mock estilizado do app InvesteJá (SVG vetorial).
 * Mostra saudação + streak, card de meta com progresso e gráfico de crescimento.
 */
function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hv-screen" x1="0" y1="0" x2="0" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#eef2ff" />
          </linearGradient>
          <linearGradient id="hv-accent" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#818cf8" stopOpacity="0.35" />
            <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Corpo do celular */}
        <rect x="6" y="6" width="288" height="588" rx="46" fill="#0b1020" />
        <rect x="14" y="14" width="272" height="572" rx="40" fill="url(#hv-screen)" />

        {/* Notch */}
        <rect x="112" y="26" width="76" height="16" rx="8" fill="#0b1020" />

        {/* Cabeçalho: saudação + streak */}
        <text x="34" y="78" fontFamily="Inter, sans-serif" fontSize="13" fill="#64748b" fontWeight="500">Olá, Camila 👋</text>
        <text x="34" y="100" fontFamily="Inter, sans-serif" fontSize="19" fill="#0f172a" fontWeight="800">Seus investimentos</text>
        <rect x="214" y="62" width="52" height="30" rx="15" fill="#fff7ed" />
        <text x="240" y="82" fontFamily="Inter, sans-serif" fontSize="13" fill="#ea580c" fontWeight="700" textAnchor="middle">🔥 7</text>

        {/* Card de saldo / crescimento */}
        <rect x="26" y="118" width="248" height="150" rx="20" fill="url(#hv-accent)" />
        <text x="44" y="150" fontFamily="Inter, sans-serif" fontSize="12" fill="rgba(255,255,255,0.8)" fontWeight="500">Patrimônio</text>
        <text x="44" y="178" fontFamily="Inter, sans-serif" fontSize="26" fill="#ffffff" fontWeight="800">R$ 4.250</text>
        <rect x="190" y="138" width="62" height="24" rx="12" fill="rgba(255,255,255,0.18)" />
        <text x="221" y="154" fontFamily="Inter, sans-serif" fontSize="12" fill="#ffffff" fontWeight="700" textAnchor="middle">▲ 12%</text>

        {/* Mini gráfico dentro do card */}
        <path d="M44 246 L80 232 L112 238 L148 214 L186 222 L222 196 L256 204" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Card de meta com progresso */}
        <rect x="26" y="286" width="248" height="92" rx="20" fill="#ffffff" stroke="#e2e8f0" />
        <circle cx="66" cy="332" r="24" stroke="#e2e8f0" strokeWidth="6" fill="none" />
        <circle cx="66" cy="332" r="24" stroke="url(#hv-accent)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="150.8" strokeDashoffset="49" transform="rotate(-90 66 332)" />
        <text x="66" y="337" fontFamily="Inter, sans-serif" fontSize="12" fill="#4f46e5" fontWeight="800" textAnchor="middle">67%</text>
        <text x="106" y="324" fontFamily="Inter, sans-serif" fontSize="13" fill="#0f172a" fontWeight="700">Meta: Viagem</text>
        <text x="106" y="344" fontFamily="Inter, sans-serif" fontSize="11" fill="#64748b">R$ 2.000 de R$ 3.000</text>

        {/* Gráfico de crescimento (área) */}
        <rect x="26" y="396" width="248" height="150" rx="20" fill="#ffffff" stroke="#e2e8f0" />
        <text x="44" y="424" fontFamily="Inter, sans-serif" fontSize="12" fill="#64748b" fontWeight="600">Evolução mensal</text>
        <path d="M44 520 L80 502 L112 508 L148 478 L186 486 L222 452 L256 460 L256 528 L44 528 Z" fill="url(#hv-area)" />
        <path d="M44 520 L80 502 L112 508 L148 478 L186 486 L222 452 L256 460" stroke="url(#hv-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="222" cy="452" r="4.5" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />

        {/* Barra de navegação inferior */}
        <rect x="26" y="556" width="248" height="14" rx="7" fill="#eef2ff" />
      </svg>
    </div>
  );
}

export default HeroVisual;
