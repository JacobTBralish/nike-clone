require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const session = require('express-session');
const fs = require('fs')
// const request = require('request');
const cors = require('cors');




app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))



// axios.get('https://store.nike.com/html-services/gridwallData?gridwallPath=mens-training-shoes%2F7puZ9hkZoi3&country=US&lang_locale=en_US&pn=1').then(response => {
//     return fs.writeFile('./nikeMensTrainingShoesPg1.json', JSON.stringify(response.data.sections[0].items), /* { flag: 'a+' }, */ (err) => {
//         if (err){
//             console.log(err)
//             return response.data.sections[0].items
//         }
//     })
// })

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('Hooked up to your database bruh.🤙')
    app.set('db',database);
}).catch(error => { console.log(error, 'Error with your db in index.js')})

// module.exports = {

// getAllShoes: (req,res) => {
//     axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=men-shoes/7puZoneZoi3&pn=1', { headers: {
//         "authority": "store.nike.com",
//         "method": "GET",
//         "path": "/html-services/gridwallData?gridwallPath=mens-shoes%2F7puZoi3&country=US&lang_locale=en_US",
//         "scheme": "https",
//         "accept": "application/json, text/javascript, */*; q=0.01",
//         "accept-encoding": "gzip, deflate, br",
//         "accept-language": "en-US,en;q=0.9",
//         "referer": "https://store.nike.com/us/en_us/pw/mens-lifestyle-shoes/7puZoneZoi3",

//     }}).then(response => {
//         res.status(200).json(response)
//         }).catch(error => {
//             res.status(500).json(error)
//             console.log('error: ', error);
//         })
//     }
// }

// app.get('/', (req, res) => {
// res.send('endpoint live')/
// });*/

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT} 🏄`));