# Benodigde Systemen Voor Dit Project

## Echt nodig om het project te draaien

| Onderdeel | Waarom nodig |
| --- | --- |
| `Node.js` en `npm` | Alle services zijn Node/Express-apps |
| `MongoDB` | Opslag voor meerdere services |
| `RabbitMQ` | Eventverkeer tussen services |
| `.env` configuratie | Secrets en verbindingen per service |
| SMTP-account | Nodig voor de mailservice |
| Internet naar `Imagga API` | Nodig voor scorefunctionaliteit |

## Sterk aanbevolen voor jouw DevOps-aanpak

| Onderdeel | Waarom handig |
| --- | --- |
| `Git` | Versiebeheer en samenwerking |
| `Docker` | Containers lokaal draaien |
| `Docker Swarm` | Services als stack beheren |
| `GitHub Actions` | CI en automatische controles |
| `ESLint` | Codekwaliteit bewaken |
| `Prometheus` | Metrics verzamelen |
| `Grafana` | Monitoring zichtbaar maken |
| `Postman` | Handmatige functionele tests |

## Verwachte services en poorten

| Service | Poort |
| --- | --- |
| `API Gateway` | `3000` |
| `auth` | `5000` |
| `clock` | `3001` |
| `upload` | `3002` |
| `target` | `3003` |
| `read` | `3004` |
| `score` | `3005` |
| `mail` | `3006` |

## Externe poorten

| Onderdeel | Poort |
| --- | --- |
| `MongoDB` | `27017` |
| `RabbitMQ` | `5672` |
| `RabbitMQ Management` | `15672` |
| `Prometheus` | `9090` |
| `Grafana` | `3007` of `3000` |

## Conclusie

Voor alleen runtime heb je vooral `Node.js`, `MongoDB`, `RabbitMQ`, SMTP en Imagga nodig.
Voor een overtuigende DevOps-uitwerking zijn `Docker Swarm`, `GitHub Actions`, `ESLint`, `Prometheus` en `Grafana` een sterke aanvulling.
