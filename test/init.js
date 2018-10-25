const massive = require('massive');
require('dotenv').config();

let dbPromise;

module.exports = {
    initDb(){
        dbPromise = dbPromsie || massive(process.env.TEST_CONNECTION_STRING);
        return dbPromise
    }
}