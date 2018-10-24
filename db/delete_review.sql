delete from reviews where id = $1;
SELECT * FROM reviews WHERE itemName = $2;