# DevOps Overzicht

Deze map bundelt de documentatie voor het DevOps-deel van dit project.
De focus ligt op lokale reproduceerbaarheid, tooling, documentatie, monitoring en CI.

`schoolproject.md` is bewust niet aangepast.

## Inhoud

- [01-programmas-en-tools.md](01-programmas-en-tools.md)
- [02-architectuur.md](02-architectuur.md)
- [03-services-poorten-en-berichten.md](03-services-poorten-en-berichten.md)
- [04-omgeving-en-configuratie.md](04-omgeving-en-configuratie.md)
- [05-testplan-en-bewijs.md](05-testplan-en-bewijs.md)
- [06-openstaande-punten.md](06-openstaande-punten.md)
- [07-git-devops-aanpak.md](07-git-devops-aanpak.md)
- [08-demo-checklist.md](08-demo-checklist.md)
- [09-volgorde-aanpak-checklist.md](09-volgorde-aanpak-checklist.md)
- [10-wat-jij-zelf-moet-regelen.md](10-wat-jij-zelf-moet-regelen.md)
- [BENODIGDE_SYSTEMEN.md](BENODIGDE_SYSTEMEN.md)

## Snel beeld

Dit project bestaat uit meerdere Node.js microservices met:

- `API Gateway`
- `auth`
- `target`
- `upload`
- `read`
- `score`
- `clock`
- `mail`

Externe onderdelen:

- `MongoDB`
- `RabbitMQ`
- `SMTP`
- `Imagga API`

DevOps-onderdelen die nu in de documentatie zijn meegenomen:

- `Docker` en `Docker Swarm`
- `GitHub Actions`
- `ESLint`
- `Prometheus`
- `Grafana`

## Aanbevolen leesvolgorde

1. Lees `01-programmas-en-tools.md`
2. Bekijk daarna `02-architectuur.md`
3. Gebruik `04-omgeving-en-configuratie.md` voor setup en secrets
4. Gebruik `05-testplan-en-bewijs.md` en `08-demo-checklist.md` voor demo of inlevering
