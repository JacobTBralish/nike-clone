module.exports = {
    postShippingInformation: (req, res ) => {
        const db = req.app.get('db');
        let {refId, firstName, lastName, userId, address1, address2, city, chosenState, zipCode ,email ,phone} = req.body;
        db.post_shipping_info({ ref_id: refId, first_name:firstName, last_name:lastName, user_id:userId, address1: address1, address2: address2, city: city, state: chosenState, zip_code: zipCode ,email: email ,phone: phone }).then(shippingInfo => {
            res.status(200).json(shippingInfo)
        }).catch(error => {
            res.status(500).json(error);
            console.log('Error posting shipping info in shipping controller ', error);
        })
    },

    postBillingInformation: (req, res ) => {
        const db = req.app.get('db');
        let {refId, firstName, lastName, userId, address1, address2, city, chosenState, zipCode } = req.body;
        console.log('req.body-----in billing: ', req.body);
        if (userId === undefined){
            return null
        }

        db.post_billing_info({ ref_id: refId, first_name: firstName, last_name: lastName, user_id: userId, address1: address1, address2: address2, city: city, state: chosenState, zip_code: zipCode }).then(billingInfo => {
            res.status(200).json(billingInfo)
        }).catch(error => {
            res.status(500).json(error);
            console.log('Error posting billing info in billing controller ', error);
        })
    },

}