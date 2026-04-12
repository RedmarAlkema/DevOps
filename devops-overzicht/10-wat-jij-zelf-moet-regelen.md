# Wat Jij Zelf Moet Regelen

## Waarom deze lijst handig is

Er zijn onderdelen waarbij jij zelf keuzes, accounts of toegang moet regelen.
Als jij dat doet, kan de rest van de DevOps-opzet veel strakker worden uitgewerkt.

## 1. Repository en platform

Jij moet bepalen:

- waar de nieuwe repository komt
- of je `GitHub` gebruikt
- of de repository `public` of `private` wordt
- wie toegang krijgt

## 2. Accounts en toegang

Jij moet zelf toegang regelen voor:

- `MongoDB`
- `RabbitMQ`
- SMTP of Gmail
- `Imagga`
- eventueel Docker Hub
- eventueel een GitHub-repository met Actions ingeschakeld

## 3. Echte secrets

Jij moet zelf invullen:

- `JWT_SECRET`
- `GATEWAY_KEY`
- `MONGO_URI`
- `RABBITMQ_URL`
- `EMAIL_USER`
- `EMAIL_PASS`
- `IMAGGA_API_KEY`
- `IMAGGA_API_SECRET`
- GitHub Actions secrets
- Grafana admin-gegevens

## 4. Tooling op jouw machine

Jij moet zelf zorgen dat deze tools beschikbaar zijn:

- `Node.js`
- `MongoDB`
- `RabbitMQ`
- `Git`
- `Docker Desktop`
- `Postman`

## 5. Keuzes voor de opdracht

Jij moet zelf beslissen:

- of `Docker Swarm` echt deel wordt van je demo
- of `GitHub Actions` verplicht in je scope zit
- of je `ESLint` alleen voor basiscontrole gebruikt of ook echt opschoont
- hoe uitgebreid je `Prometheus` en `Grafana` wilt laten zien

## 6. Externe portals en dashboards

Jij moet zelf kunnen inloggen in:

- `GitHub`
- `RabbitMQ Management`
- `MongoDB Compass` of Atlas
- SMTP-provider of Gmail
- `Imagga`
- `Grafana`

## 7. Definitieve publicatiekeuzes

Jij moet zelf controleren:

- welke bestanden wel of niet in Git mogen
- of testdata mag blijven staan
- of gevoelige gegevens echt weg zijn
- of je screenshots en dashboards veilig kunt tonen

## 8. Wat ik daarna goed kan ondersteunen

Als jij bovenstaande regelt, kan de documentatie en implementatie daarna goed worden uitgewerkt voor:

- `README`
- `.gitignore`
- `.env.example`
- `ESLint` setup
- `GitHub Actions` workflow
- `Docker` en `Docker Swarm`
- `Prometheus`
- `Grafana`
- demo-script en testplan
