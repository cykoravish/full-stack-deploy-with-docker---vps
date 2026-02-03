# Dockerized Full-Stack App (Hostinger VPS)

This repo demonstrates how to dockerize and deploy a full-stack web app (React + Node/Express) on a Hostinger VPS.

## Stack
React (Vite) · Node/Express · Docker · Nginx · Ubuntu VPS

## Steps
1. Create Dockerfiles for frontend and backend  
2. Build images  
   ```bash
   docker build -t frontend .
   docker build -t backend .
3. docker-compose up -d
4. Deploy on Hostinger VPS (Docker installed, ports open)

## Result

The application runs inside Docker containers and is live on the VPS.