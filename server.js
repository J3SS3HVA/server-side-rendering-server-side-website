//1. setup
// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Stel het basis endpoint in
const apiUrl = "https://fdnd-agency.directus.app/items/"
const apiFamily = await fetchJson(apiUrl + 'oba_family')
const apiProfile = await fetchJson(apiUrl + 'oba_profile')
const apiItem = (apiUrl + 'oba_item')

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// 2. routes
app.get('/', function(request, response) {
    fetchJson(apiItem).then((items) => { console.log(items.data)
        response.render('index', {
            
            items: items.data/*hier zeg ik dat iedereen getoond moet worden*/
        });
    })
    console.log(apiItem)
})

app.get('/detail/:id', function(request, response){
    fetchJson(apiItem).then((items) => { console.log(items.data)
        response.render('detail', {
            
            items: items.data/*hier zeg ik dat iedereen getoond moet worden*/
        });
    })
})


// 3. Start de webserver

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
