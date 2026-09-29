export const navItems = [
  { to: "/", label: "Inicio", end: true },
  { to: "/estudios", label: "Estudios" },
  { to: "/certificados", label: "Certificados" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
];

export const socials = [
  {
    href: "https://www.linkedin.com/in/yair-leon-321725318/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://github.com/Elrond82",
    label: "GitHub",
    icon: "github",
  },
];

export const studies = [
  {
    title: "Técnico Desarrollador de Software (en curso)",
    institution: "Centro Universitario de Ituzaingó",
    period: "2024 — actualidad",
  },
  {
    title: "Profesor de Música",
    institution: "Conservatorio Alberto Ginastera",
  },
  {
    title: "Perito Mercantil con especialidad contable e impositiva",
    institution: "Colegio Almirante Brown",
  },
];

export const skillGroups = [
  {
    title: "Lenguajes y desarrollo",
    items: [
      "JavaScript",
      "React",
      "Node.js",
      "PHP",
      "Python",
      "Java",
      "C",
      "SQL",
      "NoSQL",
      "React Native",
      "HTML y CSS",
    ],
  },
  {
    title: "Herramientas",
    items: [
      "Git",
      "Docker",
      "Jira",
      "GoHighLevel",
      "APIs REST",
      "Webhooks",
      "Word",
      "Excel",
      "PowerPoint",
    ],
  },
  {
    title: "Diseño",
    items: ["Interfaces responsivas", "CorelDRAW", "Photoshop"],
  },
];

export const softSkills = [
  {
    title: "Seguimiento en Jira",
    detail: "Las tareas viven en tickets: prioridad, estado y cierre de lo que se entrega.",
  },
  {
    title: "Entregas con revisión",
    detail: "Pull requests hacia test, para que el cambio pase por revisión antes de seguir.",
  },
  {
    title: "Pruebas y retrabajo",
    detail: "Smoke test y acceptance test: si falla, vuelve a desarrollo, se corrige y se prueba de nuevo.",
  },
  {
    title: "Comunicación entre sistemas",
    detail: "Coordinar API, taller y GoHighLevel para que el contacto y la orden lleguen al mismo lugar.",
  },
  {
    title: "Organización por etapas",
    detail: "Trabajo por sprints y por etapas documentadas, tanto en entregas iterativas como en un esquema más waterfall.",
  },
  {
    title: "Adaptabilidad",
    detail: "Ajustar pantallas, entornos locales con Docker y cambios de alcance sin perder el flujo del pedido.",
  },
];

export const cv = {
  href: "/Curriculum-Yair-Leon.pdf",
  fileName: "Curriculum-Yair-Leon.pdf",
};

export const certificates = [
  { src: "/imagenes/Certificados/Big.jpeg", alt: "Certificado Big" },
  { src: "/imagenes/Certificados/python.jpg", alt: "Certificado de Python" },
  {
    src: "/imagenes/Certificados/data-analyst.jpg",
    alt: "Certificado The Data Analyst Course: Complete Data Analyst Bootcamp",
  },
  { src: "/imagenes/Certificados/ingles.jpg", alt: "Certificado de inglés" },
  { src: "/imagenes/Certificados/b1.jpg", alt: "Certificado de inglés B1" },
];

export const productWork = [
  {
    title: "Técnico Cerca",
    role: "Producto en producción",
    summary:
      "Plataforma de gestión de reparaciones. En Generar pedido la tabla se adapta al ancho de la pantalla. El cambio se entregó con pull request hacia test, y el entorno local se levanta con Docker.",
    stack: ["PHP", "Docker", "Jira", "Git"],
  },
  {
    title: "Mi Técnico Cerca",
    role: "Aplicación del técnico",
    summary:
      "App en Node.js sobre la misma operación de reparaciones. Comparte catálogo y datos con el core para el trabajo diario del técnico.",
    stack: ["Node.js", "JavaScript", "SQL"],
  },
  {
    title: "API de reparaciones",
    role: "Integración con GoHighLevel",
    summary:
      "API en Node que recibe nombre, teléfono y número de orden, y crea o actualiza el contacto en GoHighLevel. También hubo cambios de onboarding en ese repositorio, entregados por pull request.",
    stack: ["Node.js", "GoHighLevel", "Webhooks", "API REST"],
  },
  {
    title: "Orden de reparación",
    role: "Taller",
    summary:
      "Desde el taller sale el dato de la orden hacia la API. La API lo toma y lo sincroniza con GoHighLevel; el seguimiento del trabajo queda en Jira.",
    stack: ["GoHighLevel", "Jira", "API REST"],
  },
];

export const projects = [
  {
    title: "Login full stack con React Native",
    video: "https://www.youtube.com/embed/4Nh0HMI4FRg",
    summary:
      "Aplicación móvil full stack con el stack unificado en JavaScript: cliente en React Native y API en Node.js.",
    points: [
      "Frontend móvil para iOS y Android con React Native.",
      "API REST con Node.js y Express.",
      "Base de código compartida para iterar más rápido.",
    ],
    stack: "React Native, Node.js, Express, JavaScript, APIs REST",
  },
  {
    title: "Tienda online",
    video: "https://www.youtube.com/embed/_B_6ycwXrOg",
    summary:
      "E-commerce con búsqueda, filtros, carrusel, menú y contacto. Los pedidos también se pueden enviar por WhatsApp.",
    points: [
      "Interfaz en HTML, CSS y JavaScript.",
      "Backend en PHP y MySQL para productos, usuarios y pedidos.",
      "Buscador con filtros y envío de pedidos por WhatsApp.",
    ],
    stack: "PHP, HTML, MySQL, JavaScript",
  },
  {
    title: "Blog con Django y Bootstrap",
    video: "https://www.youtube.com/embed/vTPGLQQmu24",
    summary:
      "Blog con registro, roles, CRUD de entradas, borradores y panel de administración.",
    points: [
      "Autenticación y permisos para usuarios y administradores.",
      "Modelos para posts, categorías, etiquetas y comentarios.",
      "Interfaz responsiva con Bootstrap y paginación.",
    ],
    stack: "Django, Bootstrap, SQLite/MySQL, JavaScript, HTML/CSS",
  },
  {
    title: "Juego 2D con Python y Pygame",
    video: "https://www.youtube.com/embed/RB5DbfosaOI",
    summary:
      "Juego arcade con colisiones, niveles, puntaje, audio y empaquetado para distribuir el ejecutable.",
    points: [
      "Bucle de juego, colisiones y estados de inicio, juego, pausa y fin.",
      "Sprites, HUD y varios niveles con más dificultad.",
      "Puntajes guardados en archivos locales.",
    ],
    stack: "Python, Pygame, PyInstaller",
  },
];
