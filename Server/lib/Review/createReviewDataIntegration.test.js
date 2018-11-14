const sinon = require('sinon');
const createReviewData = require('./createReviewData');
const testDb = require('../../../test/init');



describe('unit test', () => {
    describe('Create', () => {
        it('Should passs in created time stamp automatically', () => {
            const reviews = {
                poster_id: 1,
                itemName: 'Tomato shoes', 
                title: 'Uncomfortable',
                body: "Tomato shoes keep falling off of my feet, they're too slippery",
                stars: '1',
            }

            const fakeDb = {
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

            return createReviewData.createReview(fakeDb, {
                poster_id: reviews.poster_id,
                itemName: reviews.itemName, 
                title: reviews.reviewTitle,
                body: reviews.body,
                stars: reviews.stars,
            })
        })
    })
})

