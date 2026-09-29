import { Link } from "react-router-dom";
import { asset, cv } from "../data";

export default function Home() {
  return (
    <>
      <img className="logo" src={asset("imagenes/logo.png")} alt="Bienvenido a mi portfolio" />

      <section className="hero">
        <img className="portrait" src={asset("imagenes/perfil.jpg")} alt="Yair Rodrigo León" />
        <div className="hero-copy">
          <p className="eyebrow">Desarrollador de software</p>
          <h1>Yair Rodrigo León</h1>
          <p>
            Profesional argentino con más de 8 años de experiencia en docencia y una base sólida en
            organización, liderazgo y resolución de problemas. Estoy en formación como Técnico
            Desarrollador de Software en el Centro Universitario de Ituzaingó, y me interesa aplicar
            C, SQL, Java, Python, React, Node.js y HTML para armar soluciones claras y usables.
          </p>
          <p>
            El recorrido mezcla enseñanza musical, diseño y desarrollo. Hoy también trabajo en
            producto en Técnico Cerca: pedidos, órdenes de reparación e integraciones. En este
            portfolio están los proyectos de formación y ese trabajo más reciente.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/proyectos">
              Ver proyectos
            </Link>
            <Link className="button button-ghost" to="/contacto">
              Contacto
            </Link>
            <a className="button button-ghost" href={cv.href} download={cv.fileName}>
              Descargar currículum
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
