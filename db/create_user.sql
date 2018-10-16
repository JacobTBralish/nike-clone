insert into users (auth0_id, name, email)
values ($1, $2, $3)
returning *;