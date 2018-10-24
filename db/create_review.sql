insert into reviews (poster_id, itemName, title, body, stars, dateval) values (${poster_id},${itemName},${title},${body},${stars},${dateval});
select * from reviews where itemName = ${itemName};