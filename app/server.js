const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Semana 4 App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f4f6f8;
          text-align: center;
          padding-top: 80px;
        }
        .card {
          background: white;
          width: 60%;
          margin: auto;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        h1 {
          color: #2563eb;
        }
        p {
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Aplicación Semana 4</h1>
        <p>Desplegada correctamente en Kubernetes con Minikube.</p>
        <p>Enrutada con Traefik usando el dominio app.javier-sontay.com.</p>
        <p>Administrada con ArgoCD.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
