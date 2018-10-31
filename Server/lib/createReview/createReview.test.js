const sinon = require('sinon');
const createReviewData = require('./createReview');
const testDb = require('../../../test/init')


//Jacobs test
describe('unit test', () => {
    describe('Create', () => {
        it('Should pass in created time stamp automaticlly', () => {
            const review = {
                poster_id:1,
                itemName: 'shoe',
                title: "Uncomfortable",
                body: "this shoe sucks buttocks",
                starts: '1',
            }

            const fakeDb = {
                query: sinon.mock().withArgs(
                    sinon.match.string,
                    sinon.match({
                        poster_id:review.itemName,
                        title: title,
                        body: review.body,
                        stars: review.stars,
                        dateval: sinon.match.date
                    })
                )
            }

            return createReviewData.create(faeDb, {
                poster_id:review.itemName,
                        title: title,
                        body: review.body,
                        stars: review.stars,
            })
        })
    })
}) 
