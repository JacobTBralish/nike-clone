module.exports = {
    reviews_by_name: (req, res) => {
        console.log('reviews_by_name fired in controller')
        const db = req.app.get('db');
        console.log(req.params)
        const { itemName } = req.params;
        console.log('reviews_by_name id =====>', itemName, '<=========')
        db.get_reviews([itemName])
        .then(reviews => res.status(200).send(reviews))
        .catch(error => console.log('error in reviews_by_name ===> ', error))
    },
    create: (req, res) => {
        console.log('create fired in controller')
        const db = req.app.get('db');
        // const shoeName = req.params.id;
        const { itemName ,poster_id, title, body, stars, dateval} = req.body
        console.log('itemName', itemName, 'title =====>', title, 'body ====>', body, 'stars ====>', stars, 'poster_id ====>', poster_id) 
        
        // comp_titles.map(titles => {
        //     db.query('SELECT $1 FROM users', ['id']).then(users)
        // })
        db.create_review([poster_id, itemName, title, body, stars, dateval])
        .then(reviews => {
            console.log(reviews)
            res.status(200).send(reviews)
        })
        .catch(error => console.log('error in create review ===> ', error))
    },
    edit: (req, res) => {
        console.log('edit fired in controller')
        const db = req.app.get('db');
        // const { id } = req.params;
        // const profile_id = req.params.id;
        const { title, body, stars, id } = req.body
        console.log('edit : title =====>', title, 'about ====>', body, 'stars ====>', stars) 
        db.edit_review([title, body, stars, id, profile_id])
        .then(reviews => {
            console.log(reviews)
            res.status(200).send(reviews)
        })
        .catch(error => console.log('error in edit_reviews ===> ', error))
    },
    remove: (req,res) => {
        console.log('delete fired in controller')
        const db = req.app.get('db');
        console.log('req.params', req.params)
        console.log('req.query', req.query)
        const { itemName } = req.params;
        const { reviewId } = req.query
        // console.log('get_reviews id =====>', reviewId) 
        db.delete_review([reviewId, itemName])
        .then(reviews => {
            console.log(reviews)
            res.status(200).send(reviews)
        })
        .catch(error => {
                console.log('error in remove ===> ', error)
                res.status(500).send(error)
            })
    }
}