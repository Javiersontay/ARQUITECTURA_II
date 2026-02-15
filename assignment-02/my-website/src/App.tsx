type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Load Balancer con Nginx (Round Robin)",
    description:
      "Infraestructura con Docker Compose y Nginx como balanceador, distribuyendo tráfico entre 2 servidores.",
    tags: ["Docker", "Nginx", "Round Robin"],
    link: "#",
  },
  {
    title: "Vite Profile Card",
    description:
      "Aplicación web estática hecha con Vite + React + TypeScript para desplegar en CDN (S3 + CloudFront).",
    tags: ["Vite", "React", "TypeScript"],
    link: "#",
  },
  {
    title: "Sistema de Inventario",
    description:
      "Sistema de inventario para una empresa artesanal con control de entradas, salidas y alertas de stock.",
    tags: ["C#", "Visual Studio", "GitHub"],
    link: "#",
  },
];

export default function App() {
  const name = "Javier Alejandro Sontay Cabrera";
  const role = "Estudiante de Ingeniería en Sistemas";
  const location = "Guatemala";
  const university = "Universidad Mesoamericana"; 
  const bio =
    "Me gusta construir proyectos de software, Nginx, aplicaciones web, analisis de datos y redes. Estoy enfocado en mejorar mis habilidades en desarrollo, despliegue y buenas prácticas.";

  const links = [
    { label: "GitHub", href: "https://github.com/Javiersontay" },
    { label: "Instagram", href: "https://www.instagram.com/jav_s27?igsh=MTB6Ynd3MzEybndu&utm_source=qr" },
    { label: "Email", href: "mailto:javiersontay@umes.edu.gt" },
  ];

  return (
    <div className="page">
      <div className="container">
        <header className="card headerCard">
          <div className="avatar" aria-hidden="true">
            {name
              .split(" ")
              .slice(0, 2)
              .map((p) => p[0]?.toUpperCase())
              .join("")}
          </div>

          <div className="headerText">
            <h1 className="title">{name}</h1>
            <p className="subtitle">
              {role} 
            </p>
            <p className="subtitle">{university} , {location}</p>

            <p className="bio">{bio}</p>

            <div className="links">
              {links.map((l) => (
                <a key={l.label} className="chip" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <main className="grid">
          <section className="card">
            <h2 className="sectionTitle">Habilidades</h2>
            <div className="badges">
              {["Programación", "Análisis y diseño de sistemas", "Linux", "Git/GitHub", "Arquitectura de software", "Bases de datos", "Sistemas operativos", "Redes", "Resolución de problemas"].map((s) => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>
          </section>

          <section className="card">
            <h2 className="sectionTitle">Proyectos</h2>
            <div className="projects">
              {projects.map((p) => (
                <article key={p.title} className="project">
                  <div className="projectTop">
                    <h3 className="projectTitle">{p.title}</h3>
                    {p.link && p.link !== "#" && (
                      <a className="projectLink" href={p.link} target="_blank" rel="noreferrer">
                        Ver
                      </a>
                    )}
                  </div>
                  <p className="projectDesc">{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="card">
            <h2 className="sectionTitle">Contacto</h2>
            <p className="muted">
              Si quieres contactarme, puedes escribirme por correo o ver mis repositorios en GitHub.
            </p>

            <div className="contactBox">
              <div>
                <div className="mutedLabel">Email</div>
                <div className="mono">javiersontay@umes.edu.gt</div>
              </div>
              <div>
                <div className="mutedLabel">GitHub</div>
                <div className="mono">github.com/Javiersontay</div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span className="muted">Hecho con Vite + React + TypeScript</span>
        </footer>
      </div>
    </div>
  );
}
