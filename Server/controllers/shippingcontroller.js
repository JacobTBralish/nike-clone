module.exports = {

    postShippingInformation: (req, res ) => {
        const db = req.app.get('db');
        let { firstName, lastName ,streetAddress ,city ,chosenState ,zipCode ,email ,phone } = req.body;
        console.log('req.body: ', req.body);

        db.post_shipping_info({ firstName, lastName ,streetAddress ,city ,chosenState ,zipCode ,email ,phone }).then(shippingInfo => {
            res.status(200).json(shippingInfo)
        }).catch(error => {
            res.status(500).json(error);
            console.log('Error posting shipping info in shipping controller ', error);
        })
    },

    postBillingInformation: (req, res ) => {
        const db = req.app.get('db');
        let { firstName, lastName ,streetAddress ,city ,chosenState ,zipCode } = req.body;
        console.log('req.body: ', req.body);

        db.post_billing_info({ firstName, lastName ,streetAddress ,city ,chosenState ,zipCode }).then(billingInfo => {
            res.status(200).json(billingInfo)
        }).catch(error => {
            res.status(500).json(error);
            console.log('Error posting billing info in shipping controller ', error);
        })
    },

}