insert into users (auth0_id, name, first_name, last_name, picture, gender ,email)
values ($1, $2, $3, $4, $5, $6, $7)
returning *;