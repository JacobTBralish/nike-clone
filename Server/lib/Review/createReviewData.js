module.exports = {
    getReviews(db){
        return db.query('select * from reviews')
    },
    
    createReview(db, reviews){
        return db.query('insert into reviews (poster_id, itemName, title, body, stars, dateval) values (${poster_id}, ${itemName}, ${title}, ${body}, ${stars}, ${dateval}) RETURNING *;', {
            poster_id: reviews.poster_id,
            itemName: reviews.itemName, 
            title: reviews.reviewTitle,
            body: reviews.body,
            stars: reviews.stars,
            dateval: new Date()
        })
    },

    deleteReview(db){
        return db.query('delete from reviews returning *;')
    },
}