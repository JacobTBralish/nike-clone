
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

    // createOrder: (req, res) => {
    //     const db = req.app.get('db')
    //     const { orderId, userId, addressId, cart, date } = req.body;
    //     console.log('cart: ', cart);
    //     db.new_order({
    //         orderId,
    //         userId,
    //         addressId,
    //         date
    //     }).then(order => {
    //         cart.map(item => {
    //             const { id, qty } = item;
    //             console.log(order);
    //             const orderId = order[0].id
    //             db.new_line_item({id, qty, orderId})
    //         }).then(lineItem => {
    //             res.status(200);
    //             console.log(lineItem);
    //         }).catch(error => {
    //             console.log('232435456 YAY error: ', error);
    //         })
    //         res.status(200).send(order)
    //     }).catch(error => {
    //         console.log('error: ', error);
    //     });
    // },
    sendConfirmation: (req, res) => {
        const { trackingNumber, email, name, date, total, number, address} = req.body;
        console.log(address, 'address')
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        const mailOptions = {
            from: `'Nike Health' <${process.env.EMAIL}`,
            to: "adcallaghan159@gmail.com",
            subject: `Nike Health Order Confirmation`,
            html: address.address_line_two ? `<h1>${name}, thank you for your recent order from Nike.com!</h1><p>Tracking number: ${trackingNumber}, payment confirmation number: ${number}</p><p>Your order was placed on ${date} and came to a total of $${total}</p><p>Please allow up to 5 to 7 business day for delivery to:<br>${address.address_line_one}<br>${address.address_line_two}<br>${address.city}, ${address.state} ${address.zipcode}</p><p>We hope to do business with you again soon!</p>` :  `<h1>${name}, thank you for your recent order from Nike.com!</h1><p>Tracking number: ${trackingNumber}, payment confirmation number: ${number}</p><p>Your order was placed on ${date} and came to a total of $${total}</p><p>Please allow up to 5 to 7 business day for delivery to:<br>${address.address_line_one}<br>${address.city}, ${address.state} ${address.zipcode}</p><p>We hope to do business with you again soon!</p>` 
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