module.exports = {
    getReviews(db){
        return db.query('SELECT * FROM reviews')
    },
    
    createReview(db, review){
        return db.query('insert into reviews (poster_id, itemName, title, body, stars, dateval) values (${poster_id}, ${itemName}, ${title}, ${body}, ${stars}, ${dateval}) RETURNING *;', {
            poster_id: review.poster_id,
            itemName: review.itemName, 
            title: review.reviewTitle,
            body: review.body,
            stars: review.stars,
            dateval: new Date ()
        })
    }
}