# Omgeving En Configuratie

## Omgevingsvariabelen die in de code voorkomen

- `MONGO_URI`
- `RABBITMQ_URL`
- `JWT_SECRET`
- `GATEWAY_KEY`
- `EMAIL_USER`
- `EMAIL_PASS`
- `PORT`

## Wat deze variabelen doen

### `MONGO_URI`
Verbinding met MongoDB.

### `RABBITMQ_URL`
Verbinding met RabbitMQ.

Let op:

- een deel van de code gebruikt deze variabele
- een deel van de code gebruikt nog hardcoded `amqp://localhost`

### `JWT_SECRET`
Wordt gebruikt voor het ondertekenen en controleren van tokens.

### `GATEWAY_KEY`
Interne beveiliging zodat sommige services alleen via de gateway bereikbaar horen te zijn.

### `EMAIL_USER` en `EMAIL_PASS`
Worden gebruikt door de mailservice.

## Huidige situatie

Er staan `.env` bestanden in de service-mappen.
Dat werkt lokaal, maar voor een DevOps-opzet is het mooier om configuratie consistenter te maken.

## Verbeterpunten

### 1. Consistente `.env` structuur
Nu laden niet alle services configuratie op exact dezelfde manier.

### 2. Geen secrets in broncode
De Imagga-credentials staan nu hardcoded in de score-service.
Voor een DevOps-opdracht is het beter om die ook naar environment variables te verplaatsen.

### 3. Centrale configuratiestrategie
Bijvoorbeeld:

- per service een eigen `.env`
- of een root `.env` met duidelijke documentatie
- of later secrets via Docker/Kubernetes/Vercel/GitHub Actions

## Voorbeeld van logische variabelen per service

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

## DevOps-les hieruit

Configuratie hoort niet hardcoded in code te staan.
Een belangrijk deel van DevOps is juist dat je omgevingen netjes, veilig en herhaalbaar kunt opzetten.
