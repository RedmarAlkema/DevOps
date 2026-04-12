# Demo Checklist

## Voor de demo

- `MongoDB` draait
- `RabbitMQ` draait
- `RabbitMQ Management UI` opent
- alle services zijn gestart
- `.env` bestanden staan goed
- Postman requests staan klaar
- `ESLint` draait zonder verrassingen
- `GitHub Actions` laatste run is groen
- `Prometheus` draait
- `Grafana` dashboard opent

## Handige demo-volgorde

### 1. Architectuur kort uitleggen

Laat in een minuut zien:

- gateway
- microservices
- MongoDB
- RabbitMQ
- Docker of Docker Swarm
- Prometheus en Grafana

### 2. Infrastructuur laten zien

Laat zien:

- containers of services draaien
- queues en exchanges bestaan
- services luisteren op hun poorten
- metrics worden verzameld

### 3. Functionele flow laten zien

1. user register
2. user login
3. admin login
4. target aanmaken
5. target ophalen via read
6. upload posten
7. score ophalen

### 4. DevOps-verbeteringen laten zien

Laat kort zien:

- `GitHub Actions` workflow
- `ESLint` lintstap
- `Docker Swarm` of `docker compose`
- `Prometheus` targets
- `Grafana` dashboard

## Sterke eindboodschap

> De applicatie draait als microservices-omgeving met database, messaging en een werkende hoofdflow. De DevOps-uitbreidingen laten zien hoe kwaliteit, deployment en monitoring structureel verbeterd worden met ESLint, GitHub Actions, Docker Swarm, Prometheus en Grafana.
