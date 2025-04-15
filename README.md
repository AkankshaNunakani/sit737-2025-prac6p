# Kubernetes App Deployment & Interaction
This project demonstrates the deployment of a basic Node.js web application in a Kubernetes cluster, including interaction via kubectl, port forwarding, and container management.
##  Steps to Deploy the Application
### 1. Build Docker Image
### 2. Push to DockerHub
### 3. Apply Kubernetes Configuration
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

###  4. Check Kubernetes Resources
kubectl get pods
kubectl get services

### 5. Port Forward to Access the App
kubectl port-forward service/node-service 3000:3000

### 6. Access the App in Your Browser
http://localhost:3000
