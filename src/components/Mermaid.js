import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
  fontFamily: "Inter, sans-serif"
});

export default function Mermaid({ chart }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Remove any existing SVG to prevent duplicates on hot reload
      ref.current.removeAttribute('data-processed');
      ref.current.innerHTML = chart;
      
      try {
        mermaid.run({
          nodes: [ref.current],
        });
      } catch (error) {
        console.error("Mermaid falhou ao renderizar:", error);
      }
    }
  }, [chart]);

  return (
    <div 
      className="mermaid" 
      ref={ref} 
      style={{ display: "flex", justifyContent: "center" }}
    >
      {chart}
    </div>
  );
}