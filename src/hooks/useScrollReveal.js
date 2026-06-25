import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Revela elementos marcados com [data-reveal] conforme entram na viewport.
 * - Só ativa o efeito se o JS estiver rodando (adiciona .reveal-ready ao <html>),
 *   evitando conteúdo invisível em caso de falha.
 * - Respeita prefers-reduced-motion.
 * - Re-escaneia a cada troca de rota.
 */
function useScrollReveal() {
  const location = useLocation();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Sem suporte a IntersectionObserver ou com movimento reduzido:
    // não escondemos nada (conteúdo permanece visível).
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      root.classList.remove("reveal-ready");
      return;
    }

    root.classList.add("reveal-ready");

    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);
}

export default useScrollReveal;
