const stripeconfig = require('./stripeconfig');

module.exports = (app) => {
        //returns fields needed
        app.post('/api/stripe/account/get', function (req, res, next) {
            const stripeAccountId = null;
            if(!stripeAccountId){
                res.send({
                success: true,
                message:'Missing stripe account',
                setupBegan: false})
            }else {
                res.send({
                success: true,
                message:'Stripe account',
                setupBegan: true})
            }
        })
}