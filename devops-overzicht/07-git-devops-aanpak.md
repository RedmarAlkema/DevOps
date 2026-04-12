# Git En DevOps Aanpak

## Doel

Je wilt van deze codebasis een nette DevOps-repository maken met documentatie, CI, containerisatie en monitoring.

## Praktische aanpak

### Optie A: nieuwe map kopieren en opnieuw starten

Dit is meestal het veiligst voor een schoolproject.

```powershell
Copy-Item C:\DevOps C:\DevOps-DevOpsVersie -Recurse
cd C:\DevOps-DevOpsVersie
git init
git branch -M main
git add .
git commit -m "Initial import of microservices project for DevOps assignment"
```

### Optie B: huidige map opschonen en nieuwe remote koppelen

Alleen doen als je zeker weet dat je de bestaande Git-historie niet meer nodig hebt.

## Wat er in de nieuwe repository moet staan

- broncode van alle services
- documentatie in `devops-overzicht`
- goede `README.md`
- `.gitignore`
- `.env.example`
- `Dockerfile`s en `docker-compose.yml`
- `GitHub Actions` workflow
- `ESLint` configuratie
- monitoring-config voor `Prometheus` en `Grafana`

## Handige commitvolgorde

1. `Initial import of existing microservices project`
2. `Add DevOps documentation`
3. `Add environment examples and gitignore`
4. `Add ESLint configuration`
5. `Add GitHub Actions CI workflow`
6. `Add Docker and Docker Swarm setup`
7. `Add Prometheus and Grafana monitoring`
8. `Fix score and winner edge cases`

## Wat docenten vaak waarderen

- duidelijke commit messages
- kleine, logische stappen
- reproduceerbare setup
- eerlijke uitleg over risico's en openstaande punten
- zichtbaar gebruik van CI en monitoring

## Goede DevOps-insteek voor jouw verslag

Je kunt dit project positioneren als:

- een bestaande applicatie die je DevOps-ready maakt
- een project waarin je handmatig starten omzet naar containers en orchestration
- een project waarin je kwaliteit toevoegt met `ESLint` en `GitHub Actions`
- een project waarin je observeerbaarheid toevoegt met `Prometheus` en `Grafana`

## Aanbevolen branch- en CI-aanpak

- werk met een `main` branch en feature branches
- open wijzigingen via pull requests
- laat `GitHub Actions` draaien op push en pull request
- laat lint en basischecks verplicht meewegen
