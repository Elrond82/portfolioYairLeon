import { skillGroups, softSkills, studies } from "../data";

export default function Estudios() {
  return (
    <>
      <header className="section-head">
        <p className="eyebrow">Formación</p>
        <h1>Estudios y habilidades</h1>
      </header>

      <section className="stack">
        <h2>Formación académica</h2>
        <div className="card-grid">
          {studies.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              {item.period ? <p className="meta">{item.period}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="stack">
        <h2>Habilidades técnicas</h2>
        <div className="card-grid">
          {skillGroups.map((group) => (
            <article className="card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="stack">
        <h2>Habilidades blandas</h2>
        <div className="card-grid">
          {softSkills.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack">
        <article className="card languages">
          <h2>Idiomas</h2>
          <p>
            <strong>Español:</strong> nativo
          </p>
          <p>
            <strong>Inglés:</strong> intermedio
          </p>
        </article>
      </section>
    </>
  );
}
