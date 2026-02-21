import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Assignment 03</h1>
        <h2>Vite + Docker + Doppler + Husky + GitHub Actions + AWS Beanstalk</h2>
        <p>
          Aplicación web estática desarrollada para demostrar un flujo completo
          de desarrollo moderno con CI/CD y despliegue en la nube.
        </p>
      </header>

      <section className="card">
        <h3>Objetivo del Proyecto</h3>
        <p>
          Construir una aplicación web estática utilizando Vite y desplegarla
          mediante un pipeline automatizado en AWS Elastic Beanstalk.
          Se integran herramientas modernas para gestión de secretos,
          control de calidad y despliegue continuo.
        </p>
      </section>

      <section className="card">
        <h3>1. Configuración con Vite</h3>
        <p>
          Vite es una herramienta moderna para el desarrollo frontend que
          permite un entorno rápido y un proceso optimizado de build.
          En este proyecto se utiliza React para generar archivos estáticos.
        </p>
      </section>

      <section className="card">
        <h3>2. Gestión de Secretos con Doppler</h3>
        <p>
          Doppler permite almacenar credenciales de manera segura.
          Se utiliza para administrar variables sensibles como credenciales de AWS
          y sincronizarlas automáticamente con GitHub Actions sin exponerlas
          en el repositorio.
        </p>
      </section>

      <section className="card">
        <h3>3. Dockerización</h3>
        <p>
          La aplicación se empaqueta en una imagen Docker utilizando un proceso
          multi-stage: primero se realiza el build con Node y luego se sirve
          el contenido estático mediante Nginx.
        </p>
      </section>

      <section className="card">
        <h3>4. Implementación de Husky</h3>
        <p>
          Husky permite configurar Git hooks para ejecutar validaciones antes
          de realizar un commit, asegurando calidad y consistencia del código.
        </p>
      </section>

      <section className="card">
        <h3>5. Pipeline con GitHub Actions</h3>
        <p>
          Se implementa un workflow que construye la imagen Docker,
          la publica en Amazon ECR y despliega automáticamente la aplicación
          en AWS Elastic Beanstalk.
        </p>
      </section>

      <section className="card">
  <h3>Conocimientos y habilidades desarrolladas</h3>
  <ul>
    <li>✔ Implementación de flujos de Integración y Despliegue Continuo (CI/CD).</li>
    <li>✔ Dockerización de aplicaciones para entornos productivos.</li>
    <li>✔ Gestión segura de credenciales y variables de entorno.</li>
    <li>✔ Despliegue y verificación de aplicaciones en la nube con AWS Elastic Beanstalk.</li>
  </ul>
</section>

      <footer className="footer">
        <p>Arquitectura de Software II - Assignment 03</p>
      </footer>
    </div>
  );
}


export default App;