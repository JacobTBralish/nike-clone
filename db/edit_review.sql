update reviews
set title = $1,
    body = $2,
    stars = $3
where id = $4;
SELECT * FROM reviews WHERE itemName = $5;

