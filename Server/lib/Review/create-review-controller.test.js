const sinon = require('sinon');
const createReviewData = require('./createReviewData');
const testDb = require('../../../test/init');

//jacobs test
describe('Unit test', () => {

        describe('Get', () => {
            it('Should get a review', () => {
                const fakeDb = {
                    query: sinon.mock().withArgs(
                        sinon.match.string
                    )
                }
                return createReviewData.getReviews(fakeDb);
            })
        })

    
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

//Jacobs test
describe('Integration Test', () => {
    let db;

    function clearDataBase(){
        return db.query('DELETE FROM reviews')
    }

    beforeAll(() => {
        return testDb.initDb().then(database => {
            db = database;
        })
    })

    // beforeEach(() => {
    //     return clearDataBase();
    // })

    describe('create', () => {
        it('Inserts a review into the database with timestamp', () => {
            const review = {
                poster_id: 1,
                itemName: 'Tomato shoes', 
                reviewTitle: 'Uncomfortable',
                body: "Tomato shoes keep falling off of my feet, they're too slippery",
                stars: '1'
            }

            return createReviewData.createReview(db, review).then(addedReview => {
                expect(addedReview.length).not.toEqual(0);

                expect(addedReview[0]).toMatchObject({
                    id: expect.any(Number),
                    poster_id: review.poster_id,
                    itemname: review.itemName, 
                    title: review.reviewTitle,
                    body: review.body,
                    stars: review.stars,
                    dateval: expect.any(String)
                })
            })
        })
    })
    //Austins test
    describe('Get', () => {
        it('get reviews from db', () => {
            return createReviewData.getReviews(db).then(reviews => {
                expect(reviews[0]).toMatchObject({
                    id: expect.any(Number),
                    poster_id: expect.any(Number),
                    itemname: expect.any(String), 
                    title: expect.any(String),
                    body: expect.any(String),
                    stars: expect.any(String),
                    dateval: expect.any(String)
                })
            })
        })
    }),
    // Jacob
    describe('Delete', () => {
        it('Should delete a review', () => {
            return createReviewData.deleteReview(db).then(review => {
                expect(review[0])
            })
        })
    })
})
