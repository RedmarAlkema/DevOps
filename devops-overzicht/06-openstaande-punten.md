# Openstaande Punten

## Belangrijkste openstaande punten

### 1. Score-berekening verder valideren
Bij de nieuwe end-to-end test kwam een `null` score terug voor een mini-testafbeelding.

Actie:

- testen met echte afbeeldingen
- edge cases in scorelogica nalopen

### 2. `winner` route controleren
De `winner` route gaf bij de nieuwe test een timeout.

Actie:

- logica van `getWinner` nalopen
- controleren of Imagga-calls of loops te lang duren

### 3. Hardcoded secrets verwijderen
De Imagga-inlog staat nu in code.

Actie:

- naar `.env` verplaatsen

### 4. RabbitMQ-configuratie gelijktrekken
Sommige services gebruiken `RABBITMQ_URL`, andere hardcoded `amqp://localhost`.

Actie:

- overal dezelfde configaanpak gebruiken

### 5. Health checks toevoegen
Niet elke service heeft een eenvoudige health endpoint.

Actie:

- bijvoorbeeld `/health` voor alle services toevoegen

### 6. Logging verbeteren
Er is nu vooral console logging.

Actie:

- standaard logformat afspreken
- errors per service duidelijker maken

### 7. Containerisatie toevoegen
Voor een DevOps-vak is containerisatie erg waardevol.

Actie:

- `Dockerfile` per service
- `docker-compose.yml` voor het hele project

### 8. CI/CD toevoegen
Er is nu nog geen pipeline.

Actie:

- GitHub Actions of andere CI
- automatische install
- rooktest
- eventueel lint/test stap

### 9. Security verbeteren

Actie:

- secrets niet committen
- `.gitignore` controleren
- auth op alle gevoelige routes nalopen

### 10. Bekende code-aandachtspunten

Deze punten zijn handig om te controleren voordat je het project officieel inlevert:

- `targetController.deleteTarget` gebruikt `targetService`, maar die staat niet zichtbaar ingeladen
- `upload` producer controleert op `this.upload` in plaats van `this.channel`
- score-routes zijn niet overal afgeschermd

## Prioriteiten voor school

Als je beperkte tijd hebt, zou ik deze volgorde aanhouden:

1. documentatie op orde
2. `.env` en setup op orde
3. Docker Compose toevoegen
4. health checks toevoegen
5. score/winner bug onderzoeken
6. CI pipeline toevoegen
