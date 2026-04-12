# Volgorde Aanpak Checklist

## Doel

Deze checklist helpt je om het project stap voor stap om te bouwen naar een nette DevOps-schoolopdracht.

## Fase 1: Basis klaarzetten

- kies een nieuwe map voor de DevOps-versie
- kopieer de huidige code
- verwijder tijdelijke bestanden
- controleer dat `node_modules` niet mee de Git in gaan
- controleer dat `.env` bestanden geen secrets lekken
- voer `git init` uit
- maak een eerste commit

## Fase 2: Documentatie op orde brengen

- voeg `devops-overzicht` toe aan de repository
- verbeter de hoofd-`README.md`
- beschrijf services, externe systemen en startvolgorde
- leg uit welke DevOps-tools je gebruikt

## Fase 3: Lokale omgeving reproduceerbaar maken

- controleer per service `npm install`
- controleer `.env` per service
- test `MongoDB`
- test `RabbitMQ`
- start alle services
- controleer alle poorten

## Fase 4: Kwaliteit toevoegen

- voeg `ESLint` toe
- maak een lintscript in `package.json`
- los de belangrijkste lintproblemen op

## Fase 5: CI toevoegen

- maak een `GitHub Actions` workflow
- laat CI draaien op push en pull request
- voeg install- en lintstappen toe
- voeg optioneel een rooktest toe

## Fase 6: Containerisatie en orchestration

- maak per service een eigen `Dockerfile`
- voeg per service een `.dockerignore` toe
- gebruik een root `docker-compose.yml` voor lokaal draaien via een `bridge` netwerk
- gebruik een root `docker-stack.yml` voor `Docker Swarm` via een `overlay` netwerk
- maak named volumes voor infrastructuur en runtime-data
- bouw de images met `docker compose build`
- start lokaal met `docker compose up -d`
- initialiseer Swarm met `docker swarm init`
- deploy de stack met `docker stack deploy -c docker-stack.yml devops`

## Fase 7: Monitoring toevoegen

- voeg metrics endpoints of exporters toe
- maak een `Prometheus` configuratie
- maak een `Grafana` dashboard
- toon basisinformatie zoals uptime, requests en errors

## Fase 8: Functionele basis opnieuw aantonen

- test register
- test login
- test target aanmaken
- test read ophalen
- test upload posten
- test score ophalen
- noteer wat werkt en wat nog openstaat

## Fase 9: Bewijs verzamelen

- screenshot van draaiende stack
- screenshot van `GitHub Actions`
- screenshot van RabbitMQ Management
- screenshot van MongoDB Compass
- screenshot van `Prometheus`
- screenshot van `Grafana`
- Postman requests of demo-stappen bewaren

## Aanbevolen volgorde als je weinig tijd hebt

1. documentatie opschonen
2. `ESLint` toevoegen
3. `GitHub Actions` toevoegen
4. `Docker Compose` of `Docker Swarm` toevoegen
5. `Prometheus` en `Grafana` toevoegen
6. laatste bugs noteren of fixen
