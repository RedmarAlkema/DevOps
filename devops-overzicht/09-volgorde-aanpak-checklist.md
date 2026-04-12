# Volgorde Aanpak Checklist

## Doel van deze checklist

Deze checklist helpt je om dit project in een logische volgorde om te bouwen naar een nette DevOps-schoolopdracht.
De focus ligt op overzicht, reproduceerbaarheid en een goede demo.

## Fase 1: Nieuwe basis klaarzetten

- kies een nieuwe map voor de DevOps-versie van het project
- kopieer de huidige code naar die nieuwe map
- verwijder tijdelijke bestanden die niet mee hoeven
- controleer dat `node_modules` nergens mee de nieuwe Git in gaan
- controleer dat `.env` bestanden geen secrets lekken
- voer `git init` uit in de nieuwe map
- maak een eerste commit van de basisversie

## Fase 2: Documentatie op orde brengen

- voeg deze map `devops-overzicht` toe aan de nieuwe repository
- schrijf of verbeter een hoofd-`README.md`
- beschrijf kort wat het project doet
- beschrijf welke services er zijn
- beschrijf welke externe systemen nodig zijn
- beschrijf hoe je alles lokaal opstart
- beschrijf wat al werkt en wat nog openstaat

## Fase 3: Lokale omgeving reproduceerbaar maken

- controleer per service of `npm install` werkt
- controleer of `nodemon` beschikbaar is via `npx nodemon --version`
- controleer per service of de `.env` compleet is
- maak een duidelijke lijst van alle omgevingsvariabelen
- test of `MongoDB` draait
- test of `RabbitMQ` draait
- start alle services in aparte terminals met `node` of liever `nodemon`
- controleer of alle poorten luisteren

## Fase 4: Functionele basis aantonen

- test `register`
- test `login`
- test een request via de gateway
- test target aanmaken
- test read ophalen
- test upload posten
- test score ophalen
- noteer wat werkt
- noteer eerlijk wat nog niet helemaal goed werkt

## Fase 5: DevOps-verbeteringen toevoegen

- voeg een goede `.gitignore` toe
- maak configuratie consistenter
- haal hardcoded secrets uit de code
- voeg health endpoints toe zoals `/health`
- verbeter logging waar nodig
- maak eventueel een `docker-compose.yml`
- maak eventueel `Dockerfile`s per service

## Fase 6: Bewijs verzamelen voor je opdracht

- maak screenshots van draaiende services
- maak een screenshot van RabbitMQ Management
- maak een screenshot van MongoDB Compass
- bewaar een paar succesvolle testrequests
- maak eventueel een Postman collection
- noteer welke poorten en services actief zijn
- schrijf een korte samenvatting van je testresultaten

## Fase 7: Presentatie of demo voorbereiden

- zorg dat alle services vooraf getest zijn
- zorg dat je `.env` goed staat
- zorg dat MongoDB en RabbitMQ al draaien
- zet je terminals overzichtelijk klaar
- gebruik bij voorkeur `nodemon` tijdens het oefenen, zodat services automatisch herstarten
- kies een korte demo-flow van maximaal een paar minuten
- begin met architectuur
- laat daarna de flow zien
- sluit af met verbeterpunten en DevOps-lessen

## Aanbevolen volgorde als je weinig tijd hebt

1. nieuwe repo opzetten
2. documentatie toevoegen
3. project lokaal stabiel laten draaien
4. basisflow testen
5. health checks toevoegen
6. Docker Compose toevoegen
7. laatste bugs noteren of fixen

## Handige definitie van "klaar genoeg"

Voor een schoolopdracht hoeft het niet perfect productie-klaar te zijn.
Het is vaak al sterk genoeg als je kunt aantonen dat:

- de architectuur duidelijk is
- de setup reproduceerbaar is
- de services samenwerken
- je weet welke risico's en verbeterpunten er nog zijn

## Afvinklijst voor vlak voor inleveren

- nieuwe Git-repository staat klaar
- documentatie is aanwezig
- `.gitignore` klopt
- secrets staan niet in commits
- MongoDB en RabbitMQ zijn opgenomen in je uitleg
- services zijn getest
- demo-flow is geoefend
- bekende bugs zijn eerlijk benoemd
