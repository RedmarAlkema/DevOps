# DevOps

[![CI](https://github.com/RedmarAlkema/DevOps/actions/workflows/ci.yml/badge.svg?branch=dev)](https://github.com/RedmarAlkema/DevOps/actions/workflows/ci.yml)
[![Deployment Readiness](https://github.com/RedmarAlkema/DevOps/actions/workflows/deploy.yml/badge.svg?branch=dev)](https://github.com/RedmarAlkema/DevOps/actions/workflows/deploy.yml)
[![Docker Validation](https://github.com/RedmarAlkema/DevOps/actions/workflows/docker.yml/badge.svg?branch=dev)](https://github.com/RedmarAlkema/DevOps/actions/workflows/docker.yml)

Dit project bestaat uit meerdere Node.js microservices met een `API Gateway`, losse databases, `RabbitMQ`, Docker, CI en monitoring via `Prometheus` en `Grafana`.

## Bunnyshell

Deze repository is nu voorbereid voor `Bunnyshell` met:

- een root `.env.bunnyshell` voor environment variables tijdens import
- healthchecks in `docker-compose.yml` voor alle Node-services
- volumes, poorten en build-instructies die door Bunnyshell uit Compose gelezen kunnen worden

Meest logische publieke endpoints in Bunnyshell:

- `api-gateway` op poort `3000`
- `grafana` op poort `3000` in de container
- optioneel `prometheus` op poort `9090`
- optioneel `rabbitmq` management op poort `15672`

## Status

| Service | Rol | Poort | Database | Queue | Health | Unit test | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `API-gateway` | Externe ingang | `3000` | geen eigen DB | routeert naar services | `/health` | nee | draait in Docker |
| `auth` | registratie en login | `5000` | `AuthDB` | publiceert register-events | `/health` | ja | draait en getest |
| `target` | target aanmaken en ophalen | `3003` | `targetservice` | publiceert target-events | `/health` | ja | draait en getest |
| `upload` | uploads koppelen aan targets | `3002` | `UploadDB` | publiceert upload-events | `/health` | ja | draait en getest |
| `read` | read-model voor targets | `3004` | `readService` | consumeert target-events | `/health` | nee | draait in Docker |
| `score` | scoring en winnaar | `3005` | `ScoreDB` | consumeert target, upload en deadline-events | `/health` | nee | draait in Docker |
| `clock` | deadlines en timing | `3001` | `ClockDB` | consumeert target-events en publiceert deadlines | `/health` | nee | draait in Docker |
| `mail` | verstuurt registratiemails | `3006` | geen actieve DB in gebruik | consumeert register-events | `/health` | nee | draait in Docker |

## Wat CI nu doet

- `ESLint` draait op de hele codebase
- `npm ci` wordt per service gecontroleerd
- unit tests draaien voor `auth`, `target` en `upload`
- Docker Compose en Swarm-config worden gevalideerd
- rooktests controleren onder meer gateway, mail, RabbitMQ, Prometheus en Grafana

## Monitoring

- `Prometheus`: `http://localhost:9090`
- `Grafana`: `http://localhost:3100`
- standaarddashboard: `DevOps Monitoring Overview`

Zie [devops-overzicht/README.md](devops-overzicht/README.md) voor het complete overzicht van de documentatie.
Zie ook [devops-overzicht/11-bunnyshell-deploy.md](devops-overzicht/11-bunnyshell-deploy.md) voor de concrete deploystappen.
