# Assignment 08 - Kubernetes with Minikube

## Application running with local DNS

The application was deployed in the Kubernetes cluster and accessed using the configured local DNS domain:

```text
http://app.javier-sontay.com
```

<img width="1306" height="700" alt="Application running with local DNS" src="https://github.com/user-attachments/assets/2ee60834-6caa-4512-b69d-9a95e57193cc" />

---

## ArgoCD running with local DNS

ArgoCD was configured and accessed using the required local DNS domain:

```text
http://argo.javier-sontay.com
```

The applications are managed by ArgoCD and show the `Synced` and `Healthy` status.

<img width="1308" height="694" alt="ArgoCD applications synced and healthy" src="https://github.com/user-attachments/assets/04dbed69-682d-43d4-a656-fcd4bf7ebae6" />

---

## Local DNS configuration

The following configuration was added to the local `/etc/hosts` file:

```text
10.103.199.223 app.javier-sontay.com argo.javier-sontay.com
```
<img width="1116" height="580" alt="Captura desde 2026-05-01 22-52-44" src="https://github.com/user-attachments/assets/c9ffc3b3-f9b0-4464-b781-52d13f08cf38" />
---

## ArgoCD configuration written as code

The ArgoCD route was configured using a Traefik `IngressRoute`.

File:

```text
k8s/argocd-route/ingressroute.yaml
```

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: argocd-route
  namespace: argocd
spec:
  entryPoints:
    - web
  routes:
    - match: Host(`argo.javier-sontay.com`)
      kind: Rule
      services:
        - name: argocd-server
          port: 80
```

<img width="1117" height="580" alt="ArgoCD configuration code" src="https://github.com/user-attachments/assets/59c78ddd-c91f-4af6-b111-97dee748509b" />

---

## Application route configuration

The application was exposed using Traefik with the following domain:

```text
app.javier-sontay.com
```

File:

```text
k8s/app/ingressroute.yaml
```

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: semana4-app-route
  namespace: semana4
spec:
  entryPoints:
    - web
  routes:
    - match: Host(`app.javier-sontay.com`)
      kind: Rule
      services:
        - name: semana4-service
          port: 80
```

---

# Manifests

## ArgoCD manifests

```text
k8s/argocd/
├── install.yaml
├── kustomization.yaml
└── argocd-cmd-params-patch.yaml
```

## Traefik manifests

```text
k8s/traefik/
├── namespace.yaml
├── values.yaml
├── traefik-generated.yaml
└── kustomization.yaml
```

## Application manifests

```text
k8s/app/
├── namespace.yaml
├── deployment.yaml
├── service.yaml
├── ingressroute.yaml
└── kustomization.yaml
```

## ArgoCD route manifests

```text
k8s/argocd-route/
├── ingressroute.yaml
└── kustomization.yaml
```

## ArgoCD Application manifests

```text
k8s/argocd-applications/
├── traefik-app.yaml
├── semana4-app.yaml
└── argocd-route-app.yaml
```

---

# Commands Used

## 1. Start Minikube cluster

```bash
minikube start --driver=docker --cpus=4 --memory=4096
```

## 2. Verify Minikube status

```bash
minikube status
kubectl get nodes
kubectl get pods -A
```

## 3. Add Traefik Helm repository

```bash
helm repo add traefik https://traefik.github.io/charts
helm repo update
```

## 4. Generate Traefik manifests

```bash
helm template traefik traefik/traefik \
  --namespace traefik \
  --include-crds \
  -f k8s/traefik/values.yaml \
  > k8s/traefik/traefik-generated.yaml
```

## 5. Install ArgoCD

```bash
kubectl create namespace argocd --dry-run=client -o yaml | kubectl apply -f -
kubectl apply -k k8s/argocd
```

## 6. Restart ArgoCD server

```bash
kubectl rollout restart deployment argocd-server -n argocd
```

## 7. Install Traefik

```bash
kubectl apply -k k8s/traefik
```

## 8. Build the application image inside Minikube

```bash
minikube image build -t semana4-app:1.0.0 ./app
```

## 9. Deploy the week four application

```bash
kubectl apply -k k8s/app
kubectl rollout restart deployment semana4-app -n semana4
```

## 10. Deploy ArgoCD route

```bash
kubectl apply -k k8s/argocd-route
```

## 11. Apply ArgoCD Application manifests

```bash
kubectl apply -f k8s/argocd-applications/traefik-app.yaml
kubectl apply -f k8s/argocd-applications/semana4-app.yaml
kubectl apply -f k8s/argocd-applications/argocd-route-app.yaml
```

## 12. Start Minikube tunnel

```bash
minikube tunnel
```

## 13. Verify Traefik service

```bash
kubectl get svc -n traefik
```

## 14. Configure local DNS

The following record was added to `/etc/hosts`:

```text
10.103.199.223 app.javier-sontay.com argo.javier-sontay.com
```

The file was edited using:

```bash
sudo nano /etc/hosts
```

## 15. Verify local DNS

```bash
getent hosts app.javier-sontay.com
getent hosts argo.javier-sontay.com
```

## 16. Verify IngressRoutes

```bash
kubectl get ingressroute -A
```

## 17. Verify all pods

```bash
kubectl get pods -A
```

## 18. Verify services

```bash
kubectl get svc -A
```

## 19. Verify application pod

```bash
kubectl get pods -n semana4
kubectl get svc -n semana4
kubectl get endpoints -n semana4
```

## 20. Verify ArgoCD services

```bash
kubectl get pods -n argocd
kubectl get svc -n argocd
```

## 21. Get ArgoCD initial admin password

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
echo
```

## 22. Access the applications

```text
http://app.javier-sontay.com
http://argo.javier-sontay.com
```
