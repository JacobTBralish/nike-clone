require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const session = require('express-session');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const paymentC = require('./controllers/paymentcontroller');
const sC = require('./controllers/shippingcontroller');
const productC = require('./controllers/productconroller');
const fs = require('fs')


// const request = require('request');
const cors = require('cors');


const cart_controller = require('./controllers/cart_controller')
const review_controller = require('./controllers/review_controller')

app.use(cors());
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );
// This previous line is for using run build
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

// axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=womens-shoes/7ptZoi3&pn=6').then(response => {
//     return fs.writeFile('./src/data/AllWomensShoesPg6.json', JSON.stringify(response.data.sections[0].items), /* { flag: 'a+' }, */ (err) => {
//         if (err){
//             console.log(err)
//             return response.data.sections[0].items
//         }
//     })
// })

// axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=15').then(response => {
//     return fs.writeFile('./src/data/AllMensClothesPg15.json', JSON.stringify(response.data.sections[0].items), /* { flag: 'a+' }, */ (err) => {
//         if (err){
//             console.log(err)
//             return response.data.sections[0].items
//         }
//     })
// })


// axios.get(url1).then(response => {
//     // write data out here
//     return axios.get(url2)
// }).then(response => {
//     // write data out here
//     return axios.get(url3)
// }).then()

// axios.all([
//     axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=1'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=2'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=3'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=4'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=5'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=6'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=7'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=8'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=9'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=10'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=11'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=12'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=13'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=14'),
//      axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clothing/1mdZ7pu&pn=15')
// ]).then(axios.spread( (res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res14, res15) => {
//                         return fs.writeFile('./src/data/AllMensClothesPg1-12.json', JSON.stringify(res1.data.sections[0].items, res2.data.sections[0].items, res3.data.sections[0].items, res4.data.sections[0].items, res5.data.sections[0].items, res6.data.sections[0].items, res7.data.sections[0].items, res8.data.sections[0].items, res9.data.sections[0].items, res10.data.sections[0].items, res11.data.sections[0].items, res12.data.sections[0].items, res13.data.sections[0].items, res14.data.sections[0].items, res15.data.sections[0].items), /* { flag: 'a+' }, */ (err) => {
//                             if (err){
//                                 console.log(err)
//                                 return response.data.sections[0].items
//                             }
//                         })
//                     }))

// Promise.all([
//     axios.get(url1),
//     axios.get(url2)
// ]).then((response1, response2, ... ) => {
//      return fs.writeFile('./src/data/AllMensClothesPg1-15.json', JSON.stringify(response.data.sections[0].items), /* { flag: 'a+' }, */ (err) => {
//                             if (err){
//                                 console.log(err)
//                                 return response15.data.sections[0].items
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
            redirect_uri: `https://${req.headers.host}/auth/callback`
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
          req.session.cart = "pie";
          console.log("req.session", req.session);
          console.log('find user has fired')
          if (users.length){console.log(users)
            const user = users[0];
            req.session.user = user;
            console.log('response.data.name: ', response.data);
            res.redirect('/');
        } else {
            console.log('response.data.name: ', response.data);
            const userArray = [
                  auth0Id,
                  response.data.name,
                  response.data.given_name,
                  response.data.family_name,
                  response.data.picture,
                  response.data.gender,
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

// =========================================== Review Endpoints ================================== \\

app.delete('/api/reviews/:itemName', review_controller.remove)
app.post('/api/reviews',  review_controller.create)
app.put('/api/reviews', review_controller.edit)
app.get('/api/reviews/:itemName' , review_controller.reviews_by_name)

// =========================================== Controller Endpoints ================================== \\

// app.post('/api/cart-data/:id', cart_controller.addToCart)

// =========================================== Product Endpoints ================================== \\
// app.get('/api/mensshoes', productC.getProduct);
// app.get('/api/products/:id', pc.getProduct)


// =========================================== Payment Endpoints ================================== \\
app.post('/api/payment', paymentC.processPayment);
// app.post('/api/order', pC.createOrder);
app.post('/api/email', paymentC.sendConfirmation);

// =========================================== Shipping & Billing Endpoints ================================== \\

// app.post('/api/shippingInfo', sC.postShippingInformation);
app.post('/api/email', paymentC.sendConfirmation);
app.post('/api/order', paymentC.createOrder);

// =========================================== Shipping & Billing Endpoints ================================== \\

app.post('/api/shippingInfo', sC.postShippingInformation);
app.post('/api/billingInfo', sC.postBillingInformation);

// ================================================ Auth0 Login ====================================== \\

app.get('/api/user-data', (req, res) => {
    console.log(req.session.user)
    res.json(req.session.user);
});

// ================================================= Auth0 Logout ===================================== \\

app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.json();
})

// ================================================= Stripe config ===================================== \\
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
app.post('save-stripe-token', async (req,res)=> {
    let { token, amount } = req.body;
    let { email, id } = token;
    console.log('VALUES FROM STRIPE CONFIG', email, id, amount.toFixed(0));

    try {
        // TODO: Changed "Stripe" to "stripe"
        let { status } = await stripe.customers.create({
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
        res.status(500).end()
    }
})

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT} 🏄`));


const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})