import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Proyecto Assignment 04</h1>
        <p>Aplicación web dockerizada con CI/CD usando GitHub Actions</p>
      </header>

      <section className="cards">
        <div className="card">
          <h2>Objetivo</h2>
          <p>
            Construir una aplicación web estática, dockerizarla y automatizar
            su despliegue en Docker Hub utilizando un pipeline de integración continua.
          </p>
        </div>

        <div className="card">
          <h2>Tecnologías</h2>
          <ul>
            <li>React + Vite</li>
            <li>Docker</li>
            <li>GitHub Actions</li>
            <li>Docker Hub</li>
          </ul>
        </div>

        <div className="card">
          <h2>Automatización</h2>
          <p>
            Cada commit genera automáticamente una nueva imagen en Docker Hub
            con el tag <strong>latest</strong> y otro con el SHA del commit.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>Desarrollado para Arquitectura de Software II</p>
      </footer>
    </div>
  );
}

export default App;