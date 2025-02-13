# Notes App Deployment with Kubernetes, Docker, and CI/CD

Link to test: http://35.228.148.139/

Summary:
This project consists of two main parts: a frontend and a backend, both built to interact with each other via RESTful APIs.

## Project Setup and Technologies:
* Frontend: Built with React and Vite for the development environment. It consumes APIs for managing notes.
* Backend: Developed using Java (Spring Boot) and exposes endpoints for CRUD operations on notes.
* Docker: Both frontend and backend services are containerized using Docker for easy deployment and portability.
* Kubernetes: The project is deployed to a Kubernetes cluster to ensure scalability and resilience.
* CI/CD (GitHub Actions): Automates the build, test, and deployment processes whenever changes are pushed to the main branch.
* Nginx: A reverse proxy server is used to handle incoming HTTP requests, directing frontend traffic to the appropriate frontend service and API requests to the backend service.

## Why I Did This Project:
I wanted to create a simple yet complete application that demonstrates the power of modern technologies, including Docker, Kubernetes, and CI/CD pipelines. 

### The goal was to:

* Learn and Practice Deployment: I wanted to dive deeper into containerization (Docker) and orchestrating containers with Kubernetes for a real-world application.
* Automation and Efficiency: By implementing a CI/CD pipeline using GitHub Actions, I was able to automate the deployment process, making it easier and more efficient to deploy updates.
* Scalable Architecture: The project aims to showcase a scalable, production-ready architecture for deploying applications in a Kubernetes cluster.