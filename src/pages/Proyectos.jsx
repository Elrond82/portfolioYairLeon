import { productWork, projects } from "../data";

export default function Proyectos() {
  return (
    <>
      <header className="section-head">
        <p className="eyebrow">Trabajo</p>
        <h1>Proyectos</h1>
      </header>

      <section className="stack">
        <h2>Trabajo reciente</h2>
        <p className="lede">
          Desarrollo en el producto de Técnico Cerca: reparaciones, pedidos e integraciones.
        </p>
        <div className="card-grid">
          {productWork.map((item) => (
            <article className="card" key={item.title}>
              <p className="meta">{item.role}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="chips">
                {item.stack.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="stack">
        <h2>Proyectos de formación</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="plain-list">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="meta">Tecnologías: {project.stack}</p>
              </div>
              <div className="video">
                <iframe
                  src={project.video}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
