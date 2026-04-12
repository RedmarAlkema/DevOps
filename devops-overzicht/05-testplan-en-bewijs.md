# Testplan En Bewijs

## Wat al functioneel getest is

Lokaal is bevestigd dat:

- `MongoDB` bereikbaar is
- `RabbitMQ` bereikbaar is
- alle servicepoorten luisteren
- `auth/login` werkt
- `API Gateway` werkt
- `read` werkt via de gateway
- `target` direct bereikbaar is
- `score` reageert
- `mail` reageert

## Uitgevoerde end-to-end flow

Deze flow is getest:

1. admin geregistreerd
2. user geregistreerd
3. admin login
4. user login
5. target aangemaakt via gateway
6. target zichtbaar in read-service
7. upload aangemaakt via gateway
8. score opgehaald voor het nieuwe target

## Resultaat

Technisch werkt de keten:

- registratie werkt
- login werkt
- target creatie werkt
- event doorstroom werkt
- upload werkt
- score-endpoint reageert

## Bekende observatie

Bij een test met een kleine kunstmatige testafbeelding kwam de score terug als `null`.
Dat wijst waarschijnlijk op een edge case in data of scorelogica, niet direct op een kapotte infrastructuur.

## Extra bewijs dat goed past bij DevOps

Naast functionele tests kun je dit als bewijs toevoegen:

- `ESLint` resultaat zonder fouten of met bekende waarschuwingen
- `GitHub Actions` run die succesvol installeert en lint
- `docker compose up` of `docker stack deploy` screenshot
- `Prometheus` target-status
- `Grafana` dashboard met service-metrics
- RabbitMQ queues en exchanges in beeld

## Demo-test voor de basis

### Infrastructuurcontrole

1. Start `MongoDB`
2. Start `RabbitMQ`
3. Start alle services
4. Controleer de poorten
5. Controleer optioneel `Prometheus` en `Grafana`

### Functionele controle

1. `POST /auth/register`
2. `POST /auth/login`
3. `POST /target/api/targets/`
4. `GET /read/read/all`
5. `POST /upload/upload/`
6. `GET /score/scores/<targetId>`

### Kwaliteitscontrole

1. voer `npx eslint .` uit
2. controleer of `GitHub Actions` groen is
3. controleer of metrics zichtbaar zijn

## Eerlijke formulering voor je verslag

> De microservices, databaseverbindingen en messaging werken end-to-end. De hoofdflow is getest. Er is nog een functioneel aandachtspunt in de scoreberekening voor bepaalde testafbeeldingen. De DevOps-uitbreidingen richten zich op containerisatie, CI, linting en monitoring.
