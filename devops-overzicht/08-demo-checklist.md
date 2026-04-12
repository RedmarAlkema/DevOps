# Demo Checklist

## Voor de demo

- MongoDB draait
- RabbitMQ draait
- RabbitMQ Management UI opent
- alle services zijn gestart
- `nodemon` staat klaar als je tijdens de demo snel iets moet herstarten
- `.env` bestanden staan goed
- Postman collection of losse requests staan klaar

## Tijdens de demo

### 1. Architectuur uitleggen

Leg kort uit:

- gateway
- microservices
- MongoDB
- RabbitMQ
- automatische events

### 2. Infrastructurele onderdelen laten zien

Laat zien:

- MongoDB draait
- RabbitMQ draait
- queues/exchanges bestaan
- services luisteren op hun poorten

### 3. Functionele flow laten zien

Laat deze stappen zien:

1. user register
2. user login
3. admin login
4. target aanmaken
5. target ophalen via read
6. upload posten
7. score ophalen

### 4. DevOps-verbeteringen uitleggen

Als je ze hebt toegevoegd:

- Docker
- Compose
- health checks
- CI
- betere configuratie

## Eerlijke eindboodschap

Een sterke afsluiting is:

> De applicatie draait lokaal als microservices-omgeving met messaging en database-integratie. De hoofdflow werkt. Voor een productieklare DevOps-opzet zijn containerisatie, CI/CD, health checks en verdere hardening de logische vervolgstappen.

## Handige bijlagen voor je inlevering

- screenshots van services die draaien
- screenshot van RabbitMQ Management
- screenshot van MongoDB Compass
- export van Postman requests
- deze documentatiemap
