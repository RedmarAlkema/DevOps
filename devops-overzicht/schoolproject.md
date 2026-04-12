SAMENVATTING:
 
Week 1: 12 factor app
1: code base
Always in a version control system like git
Per APP één repo per repo meerdere branches

2: dependencies
Alle dependecies zijn expliciet aangegeven via een dependency declaration manifest

3: config 
Dont store config as constants.
Strenge scheiding tussen config en code
Litums test voor config

4:backing services
Geen onderscheid tussen lokale en 3rd party resources

 
5: build, run, release
1. Build
Bij de build maak je van de broncode een werkbare versie van de app.
Denk aan:
•	dependencies installeren 
•	code compileren 
•	frontend assets bouwen 
•	alles bundelen zodat het kan draaien 
Dus:
code → een kant-en-klaar pakket

2. Release
Bij de release combineer je die gebouwde app met de juiste configuratie.
Bijvoorbeeld:
•	database-url 
•	API keys 
•	environment variables 
•	poortnummer 
Dus:
build + config = release

3. Run
Bij run start je de app echt op de server.
Dus:
•	processen starten 
•	app laten luisteren op een poort 
•	verzoeken van gebruikers verwerken 
Dus:
release → draaiende app

6: processes
Stateless services

7: port binding

8: concurrency
Bij Concurrency is het idee:
•	je hebt verschillende soorten processen voor verschillende soorten werk 
•	je kunt er meer starten als de drukte toeneemt 
Bijvoorbeeld:
•	web process voor HTTP-verzoeken 
•	worker process voor achtergrondtaken 
•	clock process voor geplande taken

9: disposability
Kunnen gestopt en gestrart worden op ieder moment en het geheel gaat daardoor niet plat
10: dev/prod parity
Hou ze zoveel mogelijk hetzelfde
11: logs
Behandel logs als event streams
12: admin processes

Week 2: continuous intergration
Dit houd in de code compileren, analyseren en testen
Continious dus bij iedere code change. Dus elke keer op een feature branch kan maar vooral op de master branches
Bij iedere code change een contiuous quality check koppel code changes aan een user story
Houd code changes klein
Niet rerollen alleen rolforward met een fix
Dus bij elke afronding van een branch:
•	code analyseren met ESlint en coding guidelines
•	dependencies analyseren
•	code compileren voor prod met eventueel angular
•	dependencies mee instaleren met bhv: npm-package
•	automatisch testen
dit kan geregeld worden met github actions
•	runners, 
•	workflows
•	events
•	jobs
•	steps
•	actions
uitleg afbeelding:
 
Voorbeeld afbeelding:
 

•	Secrets niet in repo maar in git secrets als nodig
•	Git main branch moet ook beschermd zijn
•	Automatisch testen in git via marketplace
•	ESLint kan ook via hier
•	Status bagde op de homepage van je github
Week 3 en 4: docker
Per microservice een container waarin deze draaid
Maak:
•	dockerfiles
•	dockerignore
•	volumes voor databehoud
o	soorten:
	anonymous
	named
	host
•	dockercompose
•	via dockernetwerk containers met elkaar laten praten

week 5: continuous deployment
•	availabilty
•	via docker swarm kun je meerder dockercompose replica’s draaien voor opschaling.
•	Message bus implenteren met queues.
•	Opschalen via docker?
•	Cluster aangeven in de package.json en in server.js met master en worker werken
•	Gebruik docker swarm voor container Orchestration (kijk docker swarm totorial van docent)


week 6: continuous monitoring
gebruik prometheus hiervoor in combinatie met grafana zoadat je overzichtelijk dingen kunt zien. 


OPDRACHT:
Wat wordt er verwacht?
Je hebt de opdrachten doorlopen en die vul je aan zodat je tot de volgende onderdelen komt:
(Minstens) 1 functionele service die van buitenaf benaderbaar is.
Deze moet minstens een GET en POST methode bevatten.
Deze bevat minstens 1 unittest.
Minstens 1 functionele services die gebruikt worden door bovenstaande service met ieder hun eigen database.
Elk van deze services bevat minstens 1 unittest.
De services moeten onderling communiceren via een message queue.
Je hebt deze services in docker + docker-compose geconfigureerd.
Er is een live monitoring (service) op je omgeving.
Er is een live dashboarding (service) op je omgeving.
Je werk staat in Github classrooms met continuous integration:
Alle tests worden gerund.
Alle code wordt gechecked op guidelines.
Per service is in je readme te zien wat de status is.
Je werk draait live (in bijvoorbeeld Bunnyshell):
Met een productie-omgeving (main branch)
Met acceptatieomgeving(en) voor pull requests
Met data gescheiden van je data-containers
Hoe zal het assessment verlopen?
Het assessment zal een individueel gesprek worden van circa 15 minuten. Je dient hiervoor je code bij de hand te hebben en volledig te begrijpen.

Dit gesprek zal vormgegeven worden zoals een sollitatiegesprek. Jij maakt kans om als DevOps-engineer deel uit te gaan maken van het project in mijn bedrijf waar nog geen DevOps gehanteerd wordt.
We geven wat context over de huidige professionele status van het project en jij mag aangeven wat er dan verbeterd dient te worden op zowel het proces als op de inrichting van de code.


RUBRIEK:
Criteria	
Uitstekend
10 points
Goed
8 points
Voldoende
6 points
Matig
4 points
Onvoldoende
1 point
Criterion Score
Algemeen
Kan aanleiding voor DevOps uitleggen.

Kent 12-factor app principes.

Kan noodzaak  van 'continuous' overbrengen.

Kan in casus stappen naar DevOps volwassenheid geven.

Kan aanleiding voor DevOps uitleggen.

Kent 12-factor app principes.

Kan noodzaak  van 'continuous' overbrengen.

Kan aanleiding voor DevOps uitleggen.

Kent 12-factor app principes.

Kan aanleiding voor DevOps uitleggen.

Minder

Score of Algemeen,/ 10
Continuous integration
Heeft vereiste Continuous Integration aspecten in Github toegepast.

Kan uitleggen hoe deze stappen werken.

Kan uitleg geven over hypothetische uitbreidingen.

Ziet tekortkomingen van opties en biedt alternatieven.

Heeft vereiste Continuous Integration aspecten in Github toegepast.

Kan uitleggen hoe deze stappen werken.

Kan uitleg geven over hypothetische uitbreidingen.

Heeft vereiste Continuous Integration aspecten in Github toegepast.

Kan uitleggen hoe deze stappen werken.

Heeft vereiste Continuous Integration aspecten van opdracht toegepast.

Minder

Score of Continuous integration,/ 10
Continuous Deployment
Heeft vereiste Continuous Integration aspecten in Github toegepast.

Kan uitleggen hoe deze stappen werken.

Kan uitleg geven over  schaalbaarheid en waarborging van data.

Kan hypothetische releasestrategieën adviseren.

Heeft vereiste Continuous Integration aspecten in Github toegepast.

Kan uitleggen hoe deze stappen werken.

Kan uitleg geven over  schaalbaarheid en waarborging van data.

Heeft Continuous Deployment aspecten van opdracht toegepast.

Kan uitleggen hoe deze stappen werken.

Heeft Continuous Deployment aspecten van opdracht toegepast.

Minder

Score of Continuous Deployment,/ 10
Continuous Monitoring
Heeft Continuous Monitoring aspecten van opdracht toegepast.

Kan uitleggen hoe deze werken.

Kan uitleggen waarom deze zo werken.

Kan uitleggen hoe geanticipeerd kan worden op problemen.

Heeft Continuous Monitoring aspecten van opdracht toegepast.

Kan uitleggen hoe deze werken.

Kan uitleggen waarom deze zo werken.

Heeft Continuous Monitoring aspecten van opdracht toegepast.

Kan uitleggen hoe deze werken.

Heeft Continuous Monitoring aspecten van opdracht toegepast.

Minder

Score of Continuous Monitoring,/ 10
Total
Score of Beoordelingsmodel,/ 40
