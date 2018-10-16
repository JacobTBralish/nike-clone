require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const session = require('express-session');

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
 
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
 
//     // Pass to next layer of middleware
//     next();
//  });
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('Hooked up to your database bruh.🤙')
    app.set('db',database);
}).catch(error => { console.log(error, 'Error with your db in index.js')})

// app.get('/', (req, res) => {
// res.send('endpoint live')
// });

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT} 🏄`));