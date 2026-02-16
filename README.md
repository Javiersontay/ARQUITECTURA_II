# Assignment 02 - Vite App + AWS S3 + CloudFront + Doppler + GitHub Actions

## Descripción
En esta actividad se desarrolló una aplicación web estática utilizando Vite + React (TypeScript).
La aplicación se despliega automáticamente en un bucket de Amazon S3 y se distribuye públicamente mediante Amazon CloudFront (CDN).
El proceso de despliegue está automatizado con GitHub Actions y la gestión de credenciales se realiza de forma segura con Doppler.

## URL pública del CDN
https://d2a43967id9enm.cloudfront.net

## Captura de pantalla de la pestaña "Config Syncs" de Doppler mostrando la integración con su repositorio.
<img width="1365" height="539" alt="image" src="https://github.com/user-attachments/assets/6ecb2ece-a426-46a2-92de-15997a332425" />

## Captura de pantalla de sus variables de Doppler (ocultando valores).
<img width="1344" height="524" alt="image" src="https://github.com/user-attachments/assets/0ec2da5e-8527-4c2d-a933-d4ba81884c53" />

## Captura de pantalla de los secretos en GitHub.
<img width="1352" height="584" alt="image" src="https://github.com/user-attachments/assets/f38890f8-2be6-461b-9ad1-6acad1022635" />

## Captura de la aplicación mostrando la aplicación.
<img width="1306" height="718" alt="image" src="https://github.com/user-attachments/assets/c2af1d36-d607-4367-9b81-5176cedaa7f6" />
<img width="1308" height="717" alt="image" src="https://github.com/user-attachments/assets/a904f6c2-386b-43b8-aecf-b6c9dfc77b88" />

## Estructura del proyecto
La aplicación está en:
`assignment-02/my-website`

## Ejecutar localmente
```bash
cd assignment-02/my-website
npm install
npm run dev
npm run build
