# Omgeving En Configuratie

## Belangrijkste omgevingsvariabelen

| Variabele | Doel |
| --- | --- |
| `MONGO_URI` | Verbinding met MongoDB |
| `RABBITMQ_URL` | Verbinding met RabbitMQ |
| `JWT_SECRET` | Tokens ondertekenen en controleren |
| `GATEWAY_KEY` | Interne gateway-beveiliging |
| `EMAIL_USER` | SMTP-gebruiker |
| `EMAIL_PASS` | SMTP-wachtwoord |
| `PORT` | Poort van de service |
| `IMAGGA_API_KEY` | API-key voor score-service |
| `IMAGGA_API_SECRET` | API-secret voor score-service |

## Aanvullende variabelen voor DevOps-tools

| Variabele | Doel |
| --- | --- |
| `NODE_ENV` | Omgeving zoals `development` of `production` |
| `PROMETHEUS_PORT` | Poort voor metrics of exporter |
| `GRAFANA_ADMIN_USER` | Login voor Grafana |
| `GRAFANA_ADMIN_PASSWORD` | Wachtwoord voor Grafana |

## Huidige situatie

- er staan `.env` bestanden in service-mappen
- configuratie is nog niet overal gelijk opgezet
- een deel van de RabbitMQ-configuratie is nog hardcoded
- Imagga-credentials horen nog uit de code gehaald te worden

## Aanbevolen structuur

Gebruik per service een duidelijke `.env` of `.env.example` met dezelfde opbouw:

1. basisconfig zoals `PORT`
2. infrastructuur zoals `MONGO_URI` en `RABBITMQ_URL`
3. security zoals `JWT_SECRET` en `GATEWAY_KEY`
4. externe integraties zoals SMTP en Imagga
5. monitoring-instellingen voor `Prometheus` of exporters

## Voorbeeld per service

### Auth

- `PORT=5000`
- `MONGO_URI=...`
- `JWT_SECRET=...`
- `RABBITMQ_URL=...`

### Gateway

- `PORT=3000`
- `GATEWAY_KEY=...`

### Score

- `PORT=3005`
- `MONGO_URI=...`
- `JWT_SECRET=...`
- `GATEWAY_KEY=...`
- `IMAGGA_API_KEY=...`
- `IMAGGA_API_SECRET=...`

### Mail

- `PORT=3006`
- `RABBITMQ_URL=...`
- `EMAIL_USER=...`
- `EMAIL_PASS=...`

## CI en deployment

Voor `GitHub Actions` en later `Docker Swarm` is het handig om dit aan te houden:

- secrets niet committen
- `.env.example` wel committen
- GitHub repository secrets gebruiken voor CI
- productie-instellingen apart houden van lokale instellingen

## DevOps-les

Configuratie hoort voorspelbaar, veilig en herhaalbaar te zijn.
Juist daar helpen `GitHub Actions`, `Docker`, `Prometheus` en `Grafana` later ook bij.
