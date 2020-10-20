# Opdrachtbeschrijving

## Inleiding
Je bent net begonnen als developer bij een bedrijf genaamd _Tech It Easy_, dat TV's verkoopt.
Recentelijk hebben ze Fred van financieën ontslagen omdat hij telkens wel online was op Teams, 
maar eigenlijk dutjes deed en niets uitvoerde. Dit betekent dat de medewerkers een financieel 
dashboard nodig hebben om zelf de administratie bij te houden.

Omdat Fred al heel lang niets heeft uitgevoerd is het niet zo goed gesteld met de financieën.
Je kunt er daarom vanuit gaan dat Tech It Easy pas voorraad aanvult als **alle producten zijn verkocht**.

![Tech it easy](./assets/tech_it_easy.png)

In de `inventory` array (in `main.js`) vindt je 8 tv-objecten. Elk tv-object bevat de volgende informatie:
* `type` - het tv type
* `brand` - het merk
* `name` - de benaming
* `price` - de prijs (_in hele euro's_)
* `availableSizes` - een array met beschikbare schermgroottes voor dit model (_in inches_)
* `refreshRate` - de beeldverversing (_in Hz_)
* `screenType` - het type scherm (_LED - QLED  - LCD_)
* `screenQuality` - de resolutie van het scherm (_Ultra HD/4K - Full HD - HD Ready_)
* `smartTv` - boolean waarde die aangeeft of het een Smart TV betreft
* `options` - een object met opties, waarin met booleans is aangegeven welke opties wel en niet aanwezig zijn (_wiFi, spraakbesturing, HDR, Bluetooth en AmiLight_)
* `originalStock` - de hoeveelheid exemplaren van dit type die tijdens deze voorraad-batch zijn ingekocht
* `sold` - de hoeveelheid verkochte exemplaren van dit type

## Voor je begint
1. Koppel jouw javaScript bestand met de HTML pagina. Doe dit ook voor het CSS bestand.
2. Vergeet niet dat je bij iedere wijziging eerst moet opslaan en de browser moet refreshen.
`Nodemon` is niet meer nodig omdat we JavaScript nu in de browser gaan gebruiken (waar het voor bedoeld is)
2. Schrijf voor alle onderstaande opdrachten eerst **stap voor stap de psuedo-code uit**. 
Check bij de pseudo-antwoorden of je geen stappen overgeslagen hebt. Begin dan pas met programmeren.

### Functionaliteit bouwen

#### Opdracht 1 
* **Opdracht 1a - JS:** Hoeveel exemplaren moeten we nog verkopen?
* **Opdracht 1b - DOM:** Zorg ervoor dat dit aantal _in het rood_ wordt weergegeven op de pagina

#### Opdracht 2
* **Opdracht 2a - JS:** log alle tv typen in de console.**
* **Opdracht 2b - JS:** log de gegevens van alle typen tv's die al volledig uitverkocht zijn in de console
* **Opdracht 2c - JS:** log de gegevens van alle typen tv's die over AmbiLight beschikken in de console
* **Opdracht 2d - JS:** Sorteer de tv's van laagste naar hoogste prijs en log dit in de console

#### Opdracht 3
Geef de type-namen van de eerste **twee** tv's weer op de pagina. Voor nu betekent dit dat je het appenden van de nodes twee keer moet opschrijven, dat is niet erg!

#### Opdracht 4
We gaan de eerste twee tv's weergeven in het volgende format:
  
  ```
  Philips 43PUS6504/12 - 4K TV
  €379,-
  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
  Beschikt over wifi en hdr
  
  NIKKEI NH3216SMART - HD smart TV
  €159,-
  32 inch (81 cm)
  Beschikt over wifi, hdr en bluetooth
  ```

* **Opdracht 4a - JS: Zorg ervoor dat er een string wordt gegenereerd voor de tv namen.**
Voeg de naam op de volgende manier samen: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.
Stop dit in een aparte functie die je voor beide tv's kunt gebruiken.
* **Opdracht 4b - JS: Zorg ervoor dat er een string wordt gegenereerd voor alle opties die op deze tv zitten**
Voeg de opties met waarde `true` op de volgende manier samen: `Beschikt over wifi en hdr` of `Beschikt over wifi, hdr en bluetooth`.
Stop dit in een aparte functie die je voor beide tv's kunt gebruiken.
* **Opdracht 4c - JS: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes in zowel inches als cm**
Voeg de groottes op de volgende manier samen: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)` etc.
Stop dit in een aparte functie die je voor beide tv's kunt gebruiken.
* **Opdracht 4d - DOM: Zorg ervoor de informatie op de juiste manier op de pagina wordt weergegeven.**

#### Opdracht 5
Gebruik de functies die je in de vorige opdracht hebt gemaakt om ALLE tv's weer te geven op de pagina in het juiste format. De prijs moet er ook nog bij.

#### Opdracht 6
* **Opdracht 6a - JS & DOM:** wat is de totale opbrengst, als we alle exemplaren van ieder type zouden verkopen?
Bereken dit en geef het weer op de pagina.
* **Opdracht 6a - JS & DOM:** hoeveel hebben we tot nu toe verdient? Bereken dit en geef het weer op de pagina

#### Opdracht 7 (bonus)
Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. 
Gebruik de functies die je in opdracht 2b, 2c en 2d hebt gemaakt en laat ze alleen de uitkomsten in de console
loggen als de gebruiker op de bijbehorende knop klikt. _Tip_: Google eens naar het `onclick` event van buttons