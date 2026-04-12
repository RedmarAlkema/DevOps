# Services, Poorten En Berichten

## Services en poorten

| Service | Poort | Functie |
| --- | --- | --- |
| API Gateway | `3000` | Centrale ingang voor requests naar microservices |
| Auth | `5000` | Registratie en login |
| Clock | `3001` | Bewaakt deadlines |
| Upload | `3002` | Verwerkt uploads |
| Target | `3003` | Verwerkt targets |
| Read | `3004` | Leest targets op uit read-model |
| Score | `3005` | Berekent scores |
| Mail | `3006` | Verstuurt e-mails |

## Externe poorten

| Onderdeel | Poort | Opmerking |
| --- | --- | --- |
| MongoDB | `27017` | Database |
| RabbitMQ | `5672` | Berichtenverkeer |
| RabbitMQ Management | `15672` | Webinterface |

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

### Clock

- `GET /clock`

### Mail

- `GET /`

## Exchanges en queues

### RabbitMQ exchanges die ik in de code terugzie

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

## Handige uitleg voor je opdracht

Je kunt dit uitleggen als:

1. De gebruiker doet een request
2. Een service slaat data op in MongoDB
3. Daarna publiceert die service een event naar RabbitMQ
4. Andere services reageren op dat event en bouwen hun eigen status op

Dat is een goed voorbeeld van een event-driven microservices-architectuur.
