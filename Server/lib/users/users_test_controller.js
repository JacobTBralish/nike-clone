module.exports = {
    getUser(db) {
        return db.query('select * from users')
    },

    createUser(db, user) {
        return db.query('insert into users (auth0_id, name, first_name, last_name, picture, gender, email, birthdate, screen_name) values(${auth0_id}, ${name}, ${first_name}, ${last_name}, ${picture}, ${gender}, ${email}, ${birthdate}, ${screen_name}) RETURNING *;', {
            auth0_id: user.auth0_id,
            name: user.name,
            first_name: user.first_name,
            last_name: user.last_name,
            picture: user.picture,
            gender: user.gender,
            email: user.email,
            birthdate: user.birthdate,
            screen_name: user.screen_name
        })
    }
}