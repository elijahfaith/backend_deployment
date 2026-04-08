# DevOps CI/CD Pipeline Task

## 🔹 Project Overview
This project is a simple Node.js Express application developed to demonstrate a complete CI/CD pipeline using GitHub Actions and Docker. The application exposes a basic "Hello World" endpoint and an additional health check endpoint. It's automatically tested and deployed to Render upon every push to the main branch.

## 🔹 Pipeline Explanation

The CI/CD pipeline is defined in `.github/workflows/ci-cd.yml` and consists of three logical stages:

1. **Build**: The pipeline checks out the repository code and sets up a standard Node.js development environment.
2. **Test**: Dependencies are installed and a Jest test suite is executed against the API endpoints to ensure functional stability. 
3. **Deploy**: If the tests pass and the code is merged/pushed to the `main` branch, a webhook request is triggered using cURL. This webhook hits a Render Web Service Deploy Hook, commanding Render to pull the latest code and deploy the Dockerized application to production.

## 🔹 Tools Used
- **GitHub Actions**: For continuous integration and deployment automation.
- **Docker**: For containerizing the application, ensuring consistent execution across development and production environments.
- **Node.js & Express**: The application framework.
- **Jest & Supertest**: The testing framework utilized in the CI stage.
- **Render**: The cloud hosting platform for continuous deployment.

## 🔹 Live App Link
*(Please replace this placeholder with your actual live Render URL, e.g., https://my-devops-app.onrender.com)*

## 🔹 Screenshots
*(Please replace these placeholders with images of your pipeline passing on GitHub Actions and the Render deployment)*

![Pipeline Success ScreenshotPlaceholder](link-to-screenshot.png)
![Deployed App Placeholder](link-to-screenshot-2.png)
