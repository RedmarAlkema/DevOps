# Programma's En Tools

## Verplicht

### 1. Node.js en npm
Nodig om alle services te installeren en te starten.

Gebruik:

- `node`
- `npm install`
- `node index.js`
- `npx nodemon index.js`

### 2. Nodemon
Handig tijdens development zodat services automatisch herstarten bij codewijzigingen.

Gebruik:

- `npx nodemon index.js`
- `npx nodemon gateway.js`
- `npm run dev`

Voor jouw project is dit handig omdat je met meerdere losse services werkt en vaak kleine wijzigingen test.

### 3. Git
Nodig om een nieuwe repository op te zetten en je DevOps-werk vast te leggen.

Gebruik:

- `git init`
- `git add .`
- `git commit -m "..." `
- `git remote add origin ...`

### 4. MongoDB
Nodig als database.
Meerdere services gebruiken `MONGO_URI`.

### 5. RabbitMQ
Nodig voor communicatie tussen services via berichten.

Gebruikt voor:

- nieuwe gebruiker -> mailservice
- nieuw target -> read, score, clock
- nieuwe upload -> score
- deadline verlopen -> winnaar berekenen

## Handig voor ontwikkeling en demo

### 6. Postman
Niet verplicht voor runtime, wel handig om endpoints te testen en in een demo te laten zien.

### 7. Visual Studio Code
Handig voor:

- code aanpassen
- terminalgebruik
- `.env` bestanden beheren
- Git overzicht

### 8. MongoDB Compass
Handig om databases en collecties visueel te controleren.

### 9. RabbitMQ Management UI
Handig om queues en exchanges te bekijken.

Meestal bereikbaar op:

- `http://localhost:15672`

### 10. Docker Desktop
Niet verplicht voor de huidige code, maar wel erg handig als je het project later meer DevOps-proof wilt maken met containers en `docker-compose`.

## Externe diensten

### 11. Gmail of andere SMTP-provider
De mailservice gebruikt nu `nodemailer` met Gmail-inlog.

Benodigd:

- `EMAIL_USER`
- `EMAIL_PASS`

### 12. Imagga API
De score-service gebruikt Imagga om afbeeldingen te taggen en met elkaar te vergelijken.

## Aanbevolen minimale setup voor jouw vak

Als je dit project voor een DevOps-vak wilt presenteren, zou ik minimaal werken met:

1. `Node.js`
2. `Nodemon`
3. `Git`
4. `MongoDB`
5. `RabbitMQ`
6. `Postman`
7. `VS Code`

## Praktische startvolgorde

1. Start `MongoDB`
2. Start `RabbitMQ`
3. Controleer `.env` bestanden
4. Doe `npm install` per service
5. Start services met `npx nodemon index.js` of `npx nodemon gateway.js`
6. Test via Postman of via terminal
