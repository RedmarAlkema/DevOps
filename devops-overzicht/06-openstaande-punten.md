# Openstaande Punten

## Functionele aandachtspunten

### 1. Score-berekening valideren

- testen met echte afbeeldingen
- edge cases in scorelogica nalopen

### 2. `winner` route controleren

- logica van `getWinner` nalopen
- controleren of externe calls of loops te lang duren

## Configuratie en security

### 3. Hardcoded secrets verwijderen

- Imagga-inlog naar `.env` verplaatsen

### 4. RabbitMQ-configuratie gelijktrekken

- overal `RABBITMQ_URL` gebruiken

### 5. Health checks toevoegen

- per service een simpele `/health` route

## DevOps-uitbreidingen

### 6. `ESLint` toevoegen

- basisconfig maken
- lintscript toevoegen aan `package.json`
- lint opnemen in CI

### 7. `GitHub Actions` toevoegen

- workflow voor `npm install`
- lintstap
- optioneel rooktest of buildstap

### 8. `Docker` en `Docker Swarm` toevoegen

- `Dockerfile` per service
- `docker-compose.yml` voor lokaal gebruik
- swarm-geschikte stack-configuratie

### 9. `Prometheus` en `Grafana` toevoegen

- metrics endpoint of exporter per service
- scrape-config voor `Prometheus`
- dashboard voor uptime, requests en fouten

## Bekende code-aandachtspunten

- `targetController.deleteTarget` gebruikt waarschijnlijk `targetService`, maar dat moet nog worden nagekeken
- `upload` producer controleert op `this.upload` in plaats van `this.channel`
- score-routes zijn niet overal afgeschermd

## Prioriteiten als je weinig tijd hebt

1. documentatie op orde
2. secrets en configuratie opschonen
3. `ESLint` toevoegen
4. `GitHub Actions` toevoegen
5. `Docker Compose` of `Docker Swarm` opzetten
6. monitoring met `Prometheus` en `Grafana`
7. score- en winner-bugs verder onderzoeken
