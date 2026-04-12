# DevOps Overzicht

Deze map is bedoeld als snel overzicht voor je schoolopdracht.
De bestanden hieronder helpen je om dit project uit te leggen, opnieuw op te zetten en later in een nieuwe Git-repository te zetten.

## Inhoud

- [01-programmas-en-tools.md](C:/CloudServices/devops-overzicht/01-programmas-en-tools.md)
- [02-architectuur.md](C:/CloudServices/devops-overzicht/02-architectuur.md)
- [03-services-poorten-en-berichten.md](C:/CloudServices/devops-overzicht/03-services-poorten-en-berichten.md)
- [04-omgeving-en-configuratie.md](C:/CloudServices/devops-overzicht/04-omgeving-en-configuratie.md)
- [05-testplan-en-bewijs.md](C:/CloudServices/devops-overzicht/05-testplan-en-bewijs.md)
- [06-openstaande-punten.md](C:/CloudServices/devops-overzicht/06-openstaande-punten.md)
- [07-git-devops-aanpak.md](C:/CloudServices/devops-overzicht/07-git-devops-aanpak.md)
- [08-demo-checklist.md](C:/CloudServices/devops-overzicht/08-demo-checklist.md)
- [09-volgorde-aanpak-checklist.md](C:/CloudServices/devops-overzicht/09-volgorde-aanpak-checklist.md)
- [10-wat-jij-zelf-moet-regelen.md](C:/CloudServices/devops-overzicht/10-wat-jij-zelf-moet-regelen.md)

## Aanbevolen leesvolgorde

1. Begin met `01-programmas-en-tools.md`
2. Lees daarna `02-architectuur.md`
3. Gebruik `05-testplan-en-bewijs.md` en `08-demo-checklist.md` voor je presentatie of inlevering

## Korte samenvatting

Dit project is een microservices-opzet met:

- een `API Gateway`
- een `auth` service
- een `target` service
- een `upload` service
- een `read` service
- een `score` service
- een `clock` service
- een `mail` service

Externe onderdelen:

- `MongoDB`
- `RabbitMQ`
- `Gmail/SMTP`
- `Imagga API`

Wat al bevestigd is:

- alle services starten lokaal
- alle hoofdpoorten luisteren
- login werkt
- gateway naar read werkt
- target aanmaken werkt
- upload werkt
- score-service werkt op bestaande data

Bekende aandachtspunten:

- niet alle DevOps-onderdelen zijn al uitgewerkt
- er zijn nog een paar code- en configuratierisico's
- de end-to-end test met een mini-testafbeelding gaf een `null` score
