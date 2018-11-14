const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy([
    '/api',
    // '/send', 
    '/save-stripe-token', 
    '/auth/callback',
    '/api/order',
    '/api/email'

    ],{ target: 'http://localhost:5000/' }));
};