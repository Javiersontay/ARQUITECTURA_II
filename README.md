# Assignment 02 - Vite App + AWS S3 + CloudFront + Doppler + GitHub Actions

## Descripción
En esta actividad se desarrolló una aplicación web estática utilizando Vite + React (TypeScript).
La aplicación se despliega automáticamente en un bucket de Amazon S3 y se distribuye públicamente mediante Amazon CloudFront (CDN).
El proceso de despliegue está automatizado con GitHub Actions y la gestión de credenciales se realiza de forma segura con Doppler.

##URL pública del CDN
https://d2a43967id9enm.cloudfront.net

##Captura de pantalla de la pestaña "Config Syncs" de Doppler mostrando la integración con su repositorio.
<img width="1365" height="539" alt="image" src="https://github.com/user-attachments/assets/6ecb2ece-a426-46a2-92de-15997a332425" />



## Estructura del proyecto
La aplicación está en:
`assignment-02/my-website`

## Ejecutar localmente
```bash
cd assignment-02/my-website
npm install
npm run dev
