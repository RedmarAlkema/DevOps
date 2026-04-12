# Services, Poorten En Berichten

## Services en poorten

| Service | Poort | Functie |
| --- | --- | --- |
| `API Gateway` | `3000` | Centrale ingang voor requests |
| `auth` | `5000` | Registratie en login |
| `clock` | `3001` | Bewaakt deadlines |
| `upload` | `3002` | Verwerkt uploads |
| `target` | `3003` | Verwerkt targets |
| `read` | `3004` | Leest targets uit het read-model |
| `score` | `3005` | Berekent scores |
| `mail` | `3006` | Verstuurt e-mails |

## Externe onderdelen

| Onderdeel | Poort | Opmerking |
| --- | --- | --- |
| `MongoDB` | `27017` | Database |
| `RabbitMQ` | `5672` | Broker voor berichten |
| `RabbitMQ Management` | `15672` | Webinterface |
| `Prometheus` | `9090` | Metrics verzamelen |
| `Grafana` | `3007` of `3000` | Dashboarding, afhankelijk van configuratie |

## Belangrijke routes

### Auth

- `POST /auth/register`
- `POST /auth/login`

### Gateway

- `POST /target/api/targets/`
- `GET /read/read/all`
- `GET /read/read/<targetId>`
- `POST /upload/upload/`

### Score

- `GET /score`
- `GET /score/score/<uploadId>`
- `GET /score/scores/<targetId>`
- `GET /score/winner/<targetId>`

### Clock en Mail

- `GET /clock`
- `GET /`

## Exchanges en queues

### Exchanges die in de code terugkomen

- `Register_exchange`
- `TargetExchange`
- `UploadExchange`
- `clock_exchange`

### Consumenten

- `mail` consumeert registratie-events
- `read` consumeert target-events
- `score` consumeert target-events
- `score` consumeert upload-events
- `score` consumeert deadline-events
- `clock` consumeert target-events

## Handige DevOps-aanvulling

Als je `Prometheus` en `Grafana` toevoegt, kun je per service zichtbaar maken:

- uptime
- foutmeldingen
- request-aantallen
- responstijden
- queue-activiteit
