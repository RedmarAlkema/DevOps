# Testplan En Bewijs

## Wat al getest is

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

## Resultaat van de end-to-end flow

Technisch werkt de flow:

- registratie werkt
- login werkt
- target creatie werkt
- event doorstroom werkt
- upload werkt
- score-endpoint reageert

## Bekende observatie

Bij de test met een hele kleine kunstmatige testafbeelding kwam de score terug als `null`.
Dat betekent waarschijnlijk niet dat de hele keten kapot is, maar dat:

- de gebruikte testafbeelding niet geschikt was voor de scorelogica
- of de scorelogica een edge case heeft

Belangrijk:

- op bestaande data gaf de score-service wel geldige scores terug

## Hoe je dit in je opdracht kunt verwoorden

Een eerlijke formulering is:

> De infrastructuur en servicecommunicatie werken. De hoofdflow is end-to-end getest. Er is nog een functioneel aandachtspunt in de scoreberekening voor bepaalde testafbeeldingen.

## Demo-test die je kunt uitvoeren

### Basiscontrole

1. Start `MongoDB`
2. Start `RabbitMQ`
3. Start alle services
4. Controleer de poorten

### Functionele controle

1. `POST /auth/register`
2. `POST /auth/login`
3. `POST /target/api/targets/`
4. `GET /read/read/all`
5. `POST /upload/upload/`
6. `GET /score/scores/<targetId>`

## Wat nog mooier zou zijn als bewijs

- Postman collection export
- screenshots van RabbitMQ queues
- screenshot van MongoDB data
- terminal-output van opstartende services
- een korte screenrecording van de flow
