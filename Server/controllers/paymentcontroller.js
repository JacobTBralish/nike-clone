
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const nodemailer = require('nodemailer')

module.exports = {

    processPayment: (req, res) => {
        const { source, currency, amount } = req.body;
        console.log(req.body);
        
        // console.log(stripe.charges)
        stripe.charges.create({ source, currency, amount}, (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).send({stripeErr: stripeErr})
                console.log(' lolol stripeErr: ', stripeErr);
            } else {
                res.status(200).send({stripeSuccess: stripeRes});
                console.log('dedede stripeRes: ', stripeRes);
            }
        })
    },


    createOrder: (req, res) => {
        const db = req.app.get('db')
        const { orderId, userId, addressId, cart, date } = req.body;
        console.log('cart: ', cart);
        db.new_order({userId, tracking_number, purchase_date, cart_total
        }).then(order => {
            console.log('order=======1: ', order);
            cart.map(item => {
                console.log('item: ', item);
                const { id, qty } = item;
                console.log('order=======2: ', order);
                const orderId = order[0].id
                db.create_order_items({orders_ref, title, style ,price, size, color, quantity})
            }).then(lineItem => {
                res.status(200);
                console.log('lineItem: ', lineItem);
            }).catch(error => {
                console.log('232435456 YAY error: ', error);
            })
            res.status(200).send(order)
        }).catch(error => {
            console.log('error: ', error);
        });
    },


    sendConfirmation: (req, res) => {
        const { firstname, lastname, phone, email} = req.body;
        console.log('req.body: ', req.body);
        // console.log('email: ', email);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        const mailOptions = {
            from: `'Nike Health' <${process.env.EMAIL}`,
            to: email,
            subject: `Nike Order Confirmation`,
            html: /* address.address_line_two ? `<h1>${name}, thank you for your recent order from Nike.com!</h1><p>Tracking number: ${trackingNumber}, payment confirmation number: ${number}</p><p>Your order was placed on ${date} and came to a total of $${total}</p><p>Please allow up to 5 to 7 business day for delivery to:<br>${streetAddress}, ${city}, ${chosenState} ${zipCode}<br>${address.address_line_two}<br>${address.city}, ${address.state} ${address.zipcode}</p><p>We hope to do business with you again soon!</p>` :   */`<h1>${name}, thank you for your recent order from Nike.com!</h1><p>Tracking number: ${trackingNumber}, payment confirmation number: ${number}</p><p>Your order was placed on ${date} and came to a total of $${total}</p><p>Please allow up to 5 to 7 business day for delivery to:<br>${streetAddress},<br>${city}, ${chosenstate} ${zipCode}</p><p>We hope to do business with you again soon!</p>` 
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                return console.log('=------------- error', error)
            } else {
                return console.log('email sent', info.response)
            }
        })
    }
}