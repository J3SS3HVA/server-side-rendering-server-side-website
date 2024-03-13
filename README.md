> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
Oba

<img width="200px" src="https://github.com/J3SS3HVA/server-side-rendering-server-side-website/assets/144009667/b5976657-f0dc-4057-ad5e-2bf484f74b9f">


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<img width="500px" src="https://github.com/J3SS3HVA/server-side-rendering-server-side-website/assets/144009667/6ee5fcd7-3199-4669-8c5d-6fca71640fe2">

Deze sprint zijn wij van start gegaan om voor Oba een gebruikers pagina te maken. 
Een familie pagina waarbij je kan kiezen tussen een aantal users. elke user heeft een overview pagina waar ze hun boeken, cd's en activities kan zien.
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Gebruik
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Je begint bij de index. De index is waar je alle gebruikers vind. je kiest je gebruiker en je gaat door naar het lijstje met jouw boeken, cd's en activiteiten. klik je op 1 van deze dan krijg je meer info te zien en kan je hem vervolgens toevoegen of weghalen uit je lijst

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Dingen die wij gebruikten is de directus cms waar wij onze dat hebben toegevoegd bijvoorbeeld de items met al hun info en plaatjes, een family lijst met namen + arrays etc.

de code zelf is in ejs vrij klein omdat, ik veel gebruik heb gemaakt van een for each loop voor de items, en users
bijvoorbeeld hier: 

### ejs/html
je ziet hier vrij weinig qua code maar, met de for each loop doet hij alles wat onder de `<% data.filter(item => item.item_type === 'book').forEach(book => { %>` staat keer het aantal boeken die er zijn.
```html
       <h2>Boeken</h2>
        <% data.filter(item => item.item_type === 'book').forEach(book => { %>
            <li onclick="window.location.href='./detail/<%= book.id %>'">
                <h3><%= book.title %></h3>
                <img src="https://fdnd-agency.directus.app/assets/<%= book.afbeelding %>" alt="<%= book.title %> Image">
                €<%= book.price %>
            </li>
        <% }); %>
```

### css
In de css zijn er niet hele bijzondere dingen. ben wel gaan expirimenteren met iets nieuws. Ik besloot zelf tussen comment tags aan te geven wat bij welke ejs page komt. Daarbij besloot ik ook om bij elke page
een media query te zetten zodat ik niet steeds helemaal naar onder hoef te scrollen want, normaal deed ik de meida query helemaal onderaan.

### javascript

ook met interacties heb ik het simpel gehouden. Heb in de index en klein script gemaakt dat als je op de div klikt met daarin de user je vervolgens ge redirect word naar de overview pagina

```html
 <script>
    function redirectOverview() {
      window.location.href = '/overview';
    }
  </script>
```
## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
1. clone de code. klik op de groene knop code en clone het of download zip.
2. als je node hebt open je de terminal. Boven aan vind je de terminal button of klik ctrl +  `
3. dan type npm start of npm run dev om de server te starten
4. wil je de server sluiten doe dan dit in de terminal ctrl + c

## Bronnen
encouraging-slacks-ant.cyclic.app/
## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
