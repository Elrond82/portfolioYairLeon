import { asset, cv, socials } from "../data";

const profiles = [
  {
    ...socials[0],
    image: asset("imagenes/lin.png"),
    text: "Perfil de LinkedIn",
  },
  {
    ...socials[1],
    image: asset("imagenes/git.png"),
    text: "Perfil de GitHub",
  },
];

export default function Contacto() {
  return (
    <>
      <header className="section-head">
        <p className="eyebrow">Hablemos</p>
        <h1>Contacto</h1>
        <p>Los mismos accesos de siempre: LinkedIn, GitHub y el currículum en PDF.</p>
        <a className="button" href={cv.href} download={cv.fileName}>
          Descargar currículum
        </a>
      </header>

      <div className="contact-grid">
        {profiles.map((profile) => (
          <a key={profile.label} className="contact-card" href={profile.href} target="_blank" rel="noreferrer">
            <img src={profile.image} alt={profile.text} />
            <span>{profile.text}</span>
          </a>
        ))}
      </div>
    </>
  );
}
