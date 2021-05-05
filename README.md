# Opdrachtbeschrijving

## Inleiding
Je bent net begonnen als developer bij een bedrijf genaamd _Tech It Easy_, dat TV's verkoopt.
Recentelijk hebben ze Fred van financieën ontslagen omdat hij telkens wel online was op Teams, 
maar eigenlijk dutjes deed en niets uitvoerde. Dit betekent dat de medewerkers een financieel 
dashboard nodig hebben om zelf de administratie bij te houden.

Omdat Fred al heel lang niets heeft uitgevoerd is het niet zo goed gesteld met de financieën.
Je kunt er daarom vanuit gaan dat Tech It Easy pas voorraad aanvult als **alle producten zijn verkocht**.

![Tech it easy](./assets/tech_it_easy.png)

In de `inventory` array (in `main.js`) vind je 8 tv-objecten. Elk tv-object bevat de volgende informatie:
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
2. Vergeet niet dat je bij iedere wijziging eerst moet opslaan en de browser moet refreshen. `Nodemon` is niet meer nodig omdat we JavaScript nu in de browser gaan gebruiken (waar het voor bedoeld is)
3. Voel je vrij om extra `.js` bestanden aan te maken en de code te splitsen als het te groot wordt, als dat het voor jou overzichtelijker maakt!
4. Schrijf voor alle onderstaande opdrachten eerst **stap voor stap de psuedo-code uit**. 
Check bij de pseudo-antwoorden of je geen stappen overgeslagen hebt. Begin dan pas met programmeren.

### Functionaliteit bouwen

#### Opdracht 1
* **Opdracht 1a:** Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.
* **Opdracht 1b:** Zorg ervoor dat dit aantal _in het rood_ wordt weergegeven op de pagina

#### Opdracht 2
* **Opdracht 2a:** Gebruik een array-methode om een array te maken met alle tv-type namen.
* **Opdracht 2b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
* **Opdracht 2c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
* **Opdracht 2d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

#### Opdracht 3
* **Opdracht 3a:** Wat is onze doel-opbrengst?
Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het **blauw** weer op de pagina.
* **Opdracht 6b:** Hoeveel hebben we tot nu toe verdient?
Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's. Geef dit weer in het **groen** weer op de pagina

#### Opdracht 4
Geef de type-namen van **twee** tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit. 
Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

#### Opdracht 5
We gaan één van de twee tv's van de vorige opdracht weergeven in het volgende format:

  ```
  Philips 43PUS6504/12 - 4K TV
  €379,-
  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
  
  NIKKEI NH3216SMART - HD smart TV
  €159,-
  32 inch (81 cm)
  ```

* **Opdracht 5a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.
Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.

* **Opdracht 5b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt.
Maak een functie die één tv-prijs als parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.

* **Opdracht 5c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm
Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)` etc.
Dus een input van `[32]` geeft `32 inch (81 cm)` en een input van `[43, 50, 55, 58]` geeft `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken, 
zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.

* **Opdracht 5d:** Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina.
Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

* **Opdracht 5e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, 
om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

#### Bonusopdracht
Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen
op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt.
_Tip_: Google eens naar het `onclick` event van buttons!
