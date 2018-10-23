insert into reviews (poster_id, itemName, title, body, stars, dateval) values ($1, $2, $3, $4, $5, $6);
select * from reviews where itemName = $2;