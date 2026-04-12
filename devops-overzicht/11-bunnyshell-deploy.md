# Bunnyshell Deploy

Deze repository is voorbereid om vanuit `docker-compose.yml` in `Bunnyshell` geimporteerd te worden.

## Wat is voorbereid

- `docker-compose.yml` staat in de root van de repository
- de services hebben build-instructies, volumes en exposed ports
- alle Node-services hebben een `healthcheck`
- standaardvariabelen voor Bunnyshell staan in `.env.bunnyshell`

## Aanbevolen import

1. Maak in `Bunnyshell` een nieuwe environment aan
2. Kies je `GitHub` repository en branch
3. Laat het compose-pad op `/` staan
4. Laat Bunnyshell de root `docker-compose.yml` inlezen
5. Controleer na import de services, volumes en exposed ports

## Variabelen

Zet deze waarden in `Bunnyshell` als secrets of environment variables:

- `JWT_SECRET`
- `GATEWAY_KEY`
- `EMAIL_USER`
- `EMAIL_PASS`
- `IMAGGA_API_KEY`
- `IMAGGA_API_SECRET`
- `GRAFANA_ADMIN_USER`
- `GRAFANA_ADMIN_PASSWORD`

## Publieke endpoints

Minimaal deze service publiek maken:

- `api-gateway` op containerpoort `3000`

Optioneel voor demo of beheer:

- `grafana` op containerpoort `3000`
- `prometheus` op containerpoort `9090`
- `rabbitmq` op containerpoort `15672`

## Let op

- `docker-stack.yml` is voor lokale `Docker Swarm` tests en niet nodig voor de eerste `Bunnyshell` import
- Bunnyshell leest `docker-compose.yml` alleen bij de eerste import en zet dat daarna om naar een eigen environment-definitie
- wijzigingen in `docker-compose.yml` moet je later opnieuw handmatig meenemen in Bunnyshell
