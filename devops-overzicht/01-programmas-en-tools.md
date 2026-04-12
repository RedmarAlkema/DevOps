# Programma's En Tools

## Kern van het project

Deze onderdelen zijn nodig om de applicatie lokaal te draaien:

| Tool | Waarom nodig |
| --- | --- |
| `Node.js` en `npm` | Installeren en starten van alle services |
| `MongoDB` | Database voor meerdere services |
| `RabbitMQ` | Berichtenverkeer tussen services |
| `Git` | Versiebeheer en DevOps-werkwijze |

## Ontwikkeltools

Deze tools maken lokaal werken sneller en overzichtelijker:

| Tool | Gebruik in dit project |
| --- | --- |
| `Nodemon` | Services automatisch herstarten tijdens development |
| `Visual Studio Code` | Code, terminal, `.env` en Git-beheer |
| `Postman` | Handmatig endpoints testen |
| `MongoDB Compass` | Data en collecties controleren |
| `RabbitMQ Management UI` | Queues en exchanges bekijken |

## DevOps-tools die je wilt gebruiken

Deze tools passen goed bij een schoolopdracht waarin je het project DevOps-proof maakt:

| Tool | Rol in jouw project |
| --- | --- |
| `Docker Desktop` | Containers lokaal bouwen en draaien |
| `Docker Swarm` | Services als stack uitrollen en beheren |
| `GitHub Actions` | CI-pipeline voor install, lint en basischecks |
| `ESLint` | Codekwaliteit en consistente stijl bewaken |
| `Prometheus` | Metrics verzamelen van services en infrastructuur |
| `Grafana` | Dashboards bouwen voor monitoring en demo |

## Externe diensten

| Dienst | Gebruik |
| --- | --- |
| `SMTP` zoals Gmail | Mailservice verstuurt registratie- of notificatiemails |
| `Imagga API` | Score-service analyseert afbeeldingen |

## Handige commando's

### Runtime en development

- `npm install`
- `node index.js`
- `node gateway.js`
- `npx nodemon index.js`
- `npx nodemon gateway.js`

### Git en CI

- `git init`
- `git add .`
- `git commit -m "..." `
- `git remote add origin ...`
- `git push -u origin main`

### Docker en Swarm

- `docker compose up --build`
- `docker swarm init`
- `docker stack deploy -c docker-compose.yml devops-stack`
- `docker service ls`

### Kwaliteit en monitoring

- `npx eslint .`
- `docker compose up prometheus grafana`
- `curl http://localhost:<poort>/metrics`

## Aanbevolen minimale setup

Als je snel een goede basis wilt neerzetten, werk dan minimaal met:

1. `Node.js`
2. `MongoDB`
3. `RabbitMQ`
4. `Git`
5. `Postman`
6. `Docker`
7. `GitHub Actions`
8. `ESLint`

## Sterke uitbreiding voor je DevOps-verhaal

Als je meer punten wilt pakken in je documentatie of demo, dan zijn dit de beste uitbreidingen:

1. `Docker Swarm` voor orchestration
2. `GitHub Actions` voor CI
3. `ESLint` voor codekwaliteit
4. `Prometheus` voor metrics
5. `Grafana` voor dashboards
