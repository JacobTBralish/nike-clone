require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const session = require('express-session');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const pC = require('./controllers/paymentcontroller');
const fs = require('fs')


// const request = require('request');
const cors = require('cors');


const cart_controller = require('./controllers/cart_controller')

app.use(cors());
app.use(bodyParser.json());
// app.use( express.static( `${__dirname}/../build` ) );
// This previous line is for using run build
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

// ===============================================    Auth0    ============================================= \\

app.get('/auth/callback', (req,res) => {
    console.log('auth callback has fired')
        const payload = {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: req.query.code,
            grant_type:'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }
  function tradeCodeForAccessToken(){console.log('traded code for access token')
      return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
  }
   function tradeAccessTokenForUserInfo(accessTokenResponse){
       const accessToken = accessTokenResponse.data.access_token;
       return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessToken}`);
   }
  function storeUserInfoInDatabase(response){console.log('Stored user info in db')
      const auth0Id = response.data.sub;
      console.log(auth0Id,'-------Auth0ID-------')
      const db = req.app.get('db');
      return db.find_user_by_auth0_id(auth0Id).then(users => {
          console.log('find user has fired')
          if (users.length){console.log(users)
              const user = users[0];
              req.session.user = user;
              res.redirect('/');
          } else {
              const userArray = [
                  auth0Id,
                  response.data.name,
                  response.data.email,
              ];
              return db.create_user(userArray).then(newUser => {console.log(newUser,'create user has fired')
                  req.session.user = newUser;
                  res.redirect('/');
              }).catch(error => {
                  console.log('Error in db.create_user', error)
                  res.status(500).json('Unexpected error')
              })
          }
      }).catch(error => {
          console.log('Error in find_user', error)
          res.status(500).json('Unexpected error')
      })
   }
  tradeCodeForAccessToken()
  .then(tradeAccessTokenForUserInfo)
  .then(storeUserInfoInDatabase)
  .catch(error => {
    console.log('Error in auth/callback', error)
    res.status(500).json('Unexpected error')

  })
})

// =========================================== Mapbox ==================================================== \\

// stylesService.getStyle({..})
//   .send()
//   .then(resp => {
//     const style = resp.body;
//     // Do something with the style.
//   })

// // Get the next page of results.
// tilesetsService.listTilesets()
//   .send()
//   .then(resp => {
//     if (resp.hasNextPage()) {
//       const nextPageReq = resp.nextPage();
//       nextPageReq.send().then();
//     }
//   })

// // Check the headers.
// tilesetsService.listTilesets()
//   .send()
//   .then(resp => {
//     console.log(resp.headers);
//   });

// =========================================== Controller Endpoints ================================== \\

// app.post('/api/cart-data/:id', cart_controller.addToCart)

// =========================================== Payment Endpoints ================================== \\
app.post('/api/payment', pC.processPayment);
// app.post('/api/order', pC.createOrder);
app.post('/api/email', pC.sendConfirmation);

// ================================================ Auth0 Login ====================================== \\

app.get('/api/user-data', (req, res) => {
    // console.log(req.session.user)
    res.json(req.session.user);
});

// ================================================= Auth0 Logout ===================================== \\

app.post('/api/auth/logout', (req, res) => {
    req.session.destroy()
    res.send()
});

// ================================================= Stripe config ===================================== \\
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
app.post('save-stripe-token', async (req,res)=> {
    let { token, amount } = req.body;
    let { email, id } = token;
    console.log('VALUES FROM STRIPE CONFIG', email, id, amount.toFixed(0));

    try {
        let { status } = await Stripe.customers.create({
            email,
            source: id
        }).then(customer => stripe.charges.create({
            amount: amount.toFixed(0),
            description: "Sample Charge",
            currency: "usd",
            customer: customer.id
        })).then(charge => {
            req.session.cart = [];
            req.session.total = 0;
            res.send(charge)
        }).catch(error => {
            console.log(error, "Error in create charge");
        })
    } catch (error) {
        res.status(500).end
    }
})


const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT} 🏄`));