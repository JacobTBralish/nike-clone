update reviews
set title = ${title},
    body = ${body},
    stars = ${stars}
where id = ${id};
SELECT * FROM reviews WHERE itemName = ${itemName};

