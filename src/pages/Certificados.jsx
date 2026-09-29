import { useEffect, useState } from "react";
import { certificates } from "../data";

export default function Certificados() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <header className="section-head">
        <p className="eyebrow">Credenciales</p>
        <h1>Certificados</h1>
        <p>Tocá una imagen para verla más grande.</p>
      </header>

      <div className="cert-grid">
        {certificates.map((item) => (
          <button
            key={item.src}
            type="button"
            className="cert-card"
            aria-label={item.alt}
            onClick={() => setActive(item)}
          >
            <img src={item.src} alt={item.alt} />
          </button>
        ))}
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt}>
          <button className="lightbox-backdrop" type="button" aria-label="Cerrar" onClick={() => setActive(null)} />
          <figure>
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.alt}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
