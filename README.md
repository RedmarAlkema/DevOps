# DevOps

[![CI](https://github.com/RedmarAlkema/DevOps/actions/workflows/ci.yml/badge.svg?branch=dev)](https://github.com/RedmarAlkema/DevOps/actions/workflows/ci.yml)
[![Deployment Readiness](https://github.com/RedmarAlkema/DevOps/actions/workflows/deploy.yml/badge.svg?branch=dev)](https://github.com/RedmarAlkema/DevOps/actions/workflows/deploy.yml)
[![Docker Validation](https://github.com/RedmarAlkema/DevOps/actions/workflows/docker.yml/badge.svg?branch=dev)](https://github.com/RedmarAlkema/DevOps/actions/workflows/docker.yml)

Dit project is een event-driven microservices-architectuur voor een target/upload/score applicatie. Het doel vanuit DevOps is hier om meerdere services betrouwbaar samen te laten werken, automatisch te valideren en live te monitoren.

## Wat deze repository oplevert

- minimaal 1 van buitenaf benaderbare functionele service: `api-gateway`
- functionele `GET` en `POST` flows:
  - `GET /health`
  - `POST /target/api/targets`
  - `POST /upload/upload`
  - `POST /auth/register`
  - `POST /auth/login`
- meerdere achterliggende services met eigen databronnen
- communicatie tussen services via `RabbitMQ`
- runtime in `Docker`, lokale orkestratie met `docker-compose.yml`
- extra stack-definitie in `docker-stack.yml` voor `Docker Swarm`
- live monitoring met `Prometheus` en `Blackbox Exporter`
- live dashboarding met `Grafana`
- GitHub Actions voor lint, tests en Docker-validatie
- live deployment-logica richting acceptatie en productie

## DevOps-uitleg in deze casus

DevOps is hier nodig omdat de applicatie niet uit een enkel proces bestaat, maar uit meerdere services, databases, events en operationele componenten. Daardoor moet niet alleen de code werken, maar ook de build, de runtime, de broker, de monitoring en de deploymentflow.

12-factor principes die hier zichtbaar zijn:

- configuratie via environment variables
- losse backing services zoals `MongoDB` en `RabbitMQ`
- gescheiden build, release en run
- services als losse processen in containers
- dev/prod parity via dezelfde containerlogica
- healthchecks, logs en metrics als standaardonderdeel

Het `continuous` deel zit in het feit dat wijzigingen steeds opnieuw automatisch worden gecontroleerd op codekwaliteit, testresultaten, containerbuilds, opstartbaarheid en service-beschikbaarheid.

## Service status

| Service | Rol | GET/POST | DB | Queue | Test | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `api-gateway` | publieke ingang voor services | `GET /health`, routeert `POST` door | geen eigen DB | routeert HTTP-verkeer | nee | werkt lokaal en live |
| `auth` | registratie en login | `POST /auth/register`, `POST /auth/login`, `GET /health` | `AuthDB` | publiceert register-events | ja | werkt |
| `target` | target aanmaken en ophalen | `GET /api/targets`, `POST /api/targets` | `targetservice` | publiceert target-events | ja | werkt |
| `upload` | upload koppelen aan target | `POST /upload`, `GET /health` | `UploadDB` | publiceert upload-events | ja | werkt |
| `read` | read-model voor targets | `GET` routes via service en gateway | `readService` | consumeert target-events | nee | werkt |
| `score` | score en winnaar bepalen | `GET /score/score/:uploadId`, `GET /score/winner/:targetId` | `ScoreDB` | consumeert target-, upload- en deadline-events | nee | werkt |
| `clock` | deadlines beheren | `GET /health` | `ClockDB` | consumeert target-events, publiceert deadlines | nee | werkt |
| `mail` | register-events verwerken | `GET /health` | geen actieve eigen DB | consumeert register-events | nee | werkt |
| `mongo` | database | n.v.t. | storage | n.v.t. | nee | werkt |
| `rabbitmq` | message broker | management UI op `15672` | persistente queue-data | centrale broker | nee | werkt |
| `prometheus` | metrics scraping | `GET /-/ready` | persistente metrics-data | leest metrics | nee | werkt |
| `grafana` | dashboards | `GET /api/health` | persistente dashboard-data | leest Prometheus-data | nee | werkt |
| `blackbox-exporter` | externe endpoint checks | `GET /metrics` | geen | health probing | nee | werkt |

## Architectuur

Belangrijkste flow:

1. gebruiker registreert of logt in via `auth`
2. admin maakt een target aan via `target`
3. gebruiker uploadt een afbeelding via `upload`
4. `RabbitMQ` verspreidt events naar `read`, `score`, `clock` en `mail`
5. `score` berekent de overeenkomst en bepaalt een winnaar

Dat maakt dit project functioneel en tegelijk geschikt om CI, CD en monitoring op toe te passen.

## Lokaal draaien

Met Docker Compose:

```powershell
docker compose --env-file .env.docker up -d --build
```

Stoppen:

```powershell
docker compose --env-file .env.docker down
```

Met Docker Swarm:

```powershell
docker compose --env-file .env.docker build
docker stack deploy -c docker-stack.yml devops-swarm
```

Controleren:

```powershell
docker stack services devops-swarm
docker stack ps devops-swarm
```

## Monitoring en dashboarding

- `Prometheus`: `http://localhost:9090`
- `Grafana`: `http://localhost:3100`
- `Blackbox Exporter`: `http://localhost:9115/metrics`
- `RabbitMQ Management`: `http://localhost:15672`

Waarom dit belangrijk is:

- `/health` laat zien of services beschikbaar zijn
- `/metrics` laat gedrag en prestaties zien
- blackbox checks controleren bereikbaarheid van buitenaf
- Grafana maakt trends en problemen zichtbaar

## Continuous Integration

GitHub Actions in `.github/workflows` doen nu:

- `ci.yml`
  - checkout
  - `npm ci` op root
  - `npm ci` per service
  - `ESLint` op de codebase
  - unit tests voor `auth`, `target` en `upload`
- `docker.yml`
  - validatie van `docker-compose.yml`
  - validatie van `docker-stack.yml`
  - build van de stack
  - smoke tests op gateway, mail, RabbitMQ, Prometheus en Grafana

Hiermee voldoen we aan:

- alle tests worden gerund waar ze aanwezig zijn
- code wordt gecontroleerd op guidelines via `ESLint`
- de runtime wordt ook gevalideerd, niet alleen de broncode

## Continuous Deployment

De deploymentflow is voorbereid in `deploy.yml`:

- `dev` richt zich op acceptatie
- `main` richt zich op productie
- er wordt eerst een release artifact opgebouwd
- deploymentjobs zijn gescheiden per omgeving

In Bunny/Bunnyshell is dit gebruikt als live omgeving:

- `main` als productiebranch
- acceptatieomgevingen voor test- en reviewflows
- data staat los van containers via volumes

## Volgende volwassenheidsstap

De belangrijkste volgende DevOps-stappen zijn:

- volledige automatische live deployment vanuit GitHub naar Bunny
- extra unit tests voor `read`, `score`, `clock` en `mail`
- end-to-end tests voor de volledige flow `register -> target -> upload -> score`
- alerts toevoegen op fouten, latency en queue-problemen
