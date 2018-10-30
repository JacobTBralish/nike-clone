const sinon = require('sinon');
const createReviewData = require('./createReviewData');
const testDb = require('../../../test/init');

//jacobs test
describe('Unit test', () => {
    describe('Create review', () => {
        it('Should make timestamp', () => {
            const reviews = {
                poster_id: 1,
                itemName: 'Tomato shoes', 
                title: 'Uncomfortable',
                body: "Tomato shoes keep falling off of my feet, they're too slippery",
                stars: '1'
            }
            const db = {
                query: sinon.mock().withArgs(
                    sinon.match.string,
                    sinon.match({
                        poster_id: reviews.poster_id,
                        itemName: reviews.itemName, 
                        title: reviews.reviewTitle,
                        body: reviews.body,
                        stars: reviews.stars,
                        dateval: sinon.match.date
                    })
                )
            }
            return createReviewData.createReview(db, reviews);
        })
    })
})


describe('Integration Test', () => {
    let db;

    function createDataBase(){
        return db.query('DELETE FROM reviews')
    }

    beforeAll(() => {
        return testDb.initDb().then(database => {
            db = database;
        })
    })

    describe('Create', () => {
        it('Inserts a review into the database with timestamp', () => {
            const review = {
                poster_id: 1,
                itemName: 'Tomato shoes', 
                title: 'Uncomfortable',
                body: "Tomato shoes keep falling off of my feet, they're too slippery",
                stars: '1'
            }
        })
    })

})