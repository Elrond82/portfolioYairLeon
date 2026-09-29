import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navItems, socials } from "../data";

function SocialIcon({ name }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 9H3.7v12h2.8V9ZM5.1 3.3A1.8 1.8 0 1 0 5.12 6.9 1.8 1.8 0 0 0 5.1 3.3ZM20.3 13.4c0-3.1-1.66-4.55-3.87-4.55-1.78 0-2.58.98-3.03 1.67V9H10.7c.04.8 0 12 0 12h2.7v-6.7c0-.36.03-.72.13-1 .29-.72.95-1.46 2.05-1.46 1.45 0 2.03 1.1 2.03 2.72V21h2.7v-7.6Z"
      />
    </svg>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [pill, setPill] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  const placePill = (element) => {
    const nav = navRef.current;
    if (!nav || !element) return;
    const navBox = nav.getBoundingClientRect();
    const box = element.getBoundingClientRect();
    setPill({
      left: box.left - navBox.left,
      top: box.top - navBox.top,
      width: box.width,
      height: box.height,
    });
  };

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useLayoutEffect(() => {
    const active = navRef.current?.querySelector(".nav-link.active");
    placePill(active);
  }, [location.pathname, open]);

  useEffect(() => {
    const onResize = () => {
      const active = navRef.current?.querySelector(".nav-link.active");
      placePill(active);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [location.pathname, open]);

  return (
    <div className="shell">
      <header className="site-header">
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-bars" aria-hidden="true" />
          Menú
        </button>

        <nav
          id="site-nav"
          ref={navRef}
          className={open ? "site-nav open" : "site-nav"}
          onMouseLeave={() => placePill(navRef.current?.querySelector(".nav-link.active"))}
        >
          {pill ? <span className="nav-pill" style={pill} aria-hidden="true" /> : null}
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onMouseEnter={(event) => placePill(event.currentTarget)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="socials">
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              <SocialIcon name={item.icon} />
            </a>
          ))}
        </div>
      </header>

      <main key={location.pathname} className="page">
        <Outlet />
      </main>

      <footer className="site-footer">Portfolio desarrollado por Yair Rodrigo León — 2026</footer>
    </div>
  );
}
