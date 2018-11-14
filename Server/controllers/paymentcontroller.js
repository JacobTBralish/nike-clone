
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
        const { orderId, userId, addressId, cart, date, tracking_number, cart_total } = req.body;
        console.log('cart: ', cart);
        console.log('req.body---------create order req.: ', req.body);
        db.new_order({ user_id: userId,  tracking_number: tracking_number, purchase_date: date, cart_total: cart_total
        }).then(order => {
            console.log('order=======1: ', order);
            cart.map(item => {
                console.log('cart: ', cart);
                console.log('item: ', item);
                const { title, subtitle, rawPrice, colorways } = item;
                console.log('order=======2: ', order);
                // const orderId = order[0].id
                db.create_order_items({orders_ref: orders_ref, title: title, style: style ,price: price, size, color: color, quantity: quantity})
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
        const { trackingNumber, date, total, number, address} = req.body;
        console.log('req.body-------IN SEND CONFIRMATION: ', req.body);
        const { first_name, last_name, address1, address2, city, state, zip_code, email, phone} = req.body.address[0]
        console.log('req.body.address[0]: ', req.body.address[0]);
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
            to: email,
            subject: `Nike Order Confirmation`,
            html: address.address_line_two ? `<h1>${namfirst_namee}, thank you for your recent order from Nike.com!</h1><p>Tracking number: ${trackingNumber}, payment confirmation number: ${number}</p><p>Your order was placed on ${date} and came to a total of $${total}</p><p>Please allow up to 5 to 7 business day for delivery to:<br>${address1}, ${city}, ${state} ${zip_code}<br>${address2}<br>${address.city}, ${address.state} ${address.zipcode}</p><p>We hope to do business with you again soon!</p>` :   `<h1>${first_name}, thank you for your recent order from Nike.com!</h1><p>Tracking number: ${trackingNumber}, payment confirmation number: ${number}</p><p>Your order was placed on ${date} and came to a total of $${total}</p><p>Please allow up to 5 to 7 business day for delivery to:<br>${address1},<br>${city}, ${state} ${zip_code}</p><p>We hope to do business with you again soon!</p>` 
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