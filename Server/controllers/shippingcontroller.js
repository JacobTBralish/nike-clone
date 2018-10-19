module.exports = {

    postShippingInformation: (req, res ) => {
        const db = req.app.get('db');
        let { firstName, lastName ,streetAddress ,city ,chosenState ,zipCode ,email ,phone } = req.body;
        console.log('req.body: ', req.body);

        db.post_shipping({ firstName, lastName ,streetAddress ,city ,chosenState ,zipCode ,email ,phone }).then(shippingInfo => {
            res.status(200).json(shippingInfo)
        }).catch(error => {
            res.status(500).json(error);
            console.log('Error posting shipping info in shipping controller ', error);
        })
    },

}