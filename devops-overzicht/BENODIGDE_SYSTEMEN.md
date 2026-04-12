# Benodigde Systemen Voor Dit Project

## Kort antwoord

Ja: dit project heeft in ieder geval **RabbitMQ** en **MongoDB** nodig.

Daarnaast zie ik ook nog:

- **Node.js + npm** om alle services te draaien
- **een maildienst / SMTP-account** (in de code staat Gmail via Nodemailer)
- **internettoegang naar de Imagga API** voor de score-service
- **Postman is niet verplicht**, maar wel handig voor handmatig testen

## Wat echt nodig is om het programma te laten werken

### 1. Node.js / npm
Alle onderdelen zijn Node/Express-services met `package.json` bestanden.

### 2. MongoDB
Meerdere services verbinden met `process.env.MONGO_URI`, dus MongoDB is zeker nodig.

Gebruikt door onder andere:

- `auth`
- `target`
- `upload`
- `read`
- `score`
- `clock`

Praktisch betekent dit meestal:

- of 1 MongoDB-server met meerdere databases
- of meerdere MongoDB-databases / URI's per service

### 3. RabbitMQ
Er wordt op meerdere plekken `amqplib` gebruikt met `amqp://localhost` of `process.env.RABBITMQ_URL`.

RabbitMQ wordt gebruikt voor events tussen services, zoals:

- registratie -> mailservice
- target aangemaakt -> read / score / clock
- upload aangemaakt -> score
- deadline verlopen -> score/winnaar-berekening

## Externe systemen / diensten

### 4. Maildienst
De mailservice gebruikt `nodemailer` met Gmail:

- `EMAIL_USER`
- `EMAIL_PASS`

Dus als je de mailfunctie wilt laten werken, heb je een werkend mailaccount of SMTP-configuratie nodig.

### 5. Imagga API
De score-service roept `https://api.imagga.com/v2/tags` aan om afbeeldingen te analyseren.

Dat betekent:

- internetverbinding nodig
- Imagga API nodig voor de scorefunctionaliteit

Zonder Imagga werkt de basis van het systeem deels nog wel, maar de scoreberekening niet goed.

## Niet verplicht, wel handig

### 6. Postman
Postman is **niet nodig om de applicatie zelf te laten draaien**.
Wel lijkt het project erop ingericht om requests handmatig te testen via HTTP-calls, zoals ook in `README.txt` staat.

Dus:

- voor runtime: niet verplicht
- voor testen/debuggen: wel handig

## Verwachte services en poorten

- API Gateway: `3000`
- Auth service: `5000`
- Clock service: `3001`
- Upload service: `3002`
- Target service: `3003`
- Read service: `3004`
- Score service: `3005`
- Mail service: `3006`

## Omgevingsvariabelen die ik in de code terugzie

- `MONGO_URI`
- `RABBITMQ_URL`
- `JWT_SECRET`
- `GATEWAY_KEY`
- `EMAIL_USER`
- `EMAIL_PASS`
- `PORT`

## Conclusie

Als je dit project lokaal volledig wilt laten werken, zou ik uitgaan van:

1. Node.js + npm
2. MongoDB
3. RabbitMQ
4. een `.env` met de juiste variabelen
5. een mailaccount / SMTP-inlog
6. internettoegang naar Imagga

Postman hoort daar niet bij als harde eis, alleen als testtool.
