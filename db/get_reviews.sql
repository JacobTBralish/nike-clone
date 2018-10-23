-- select r.id, r.poster_id, r.title, r.body, r.dateval, r.stars, u.name, u.email 
-- from reviews r 
-- join users u
-- on r.poster_id = u.id
-- where shoeName = $1
select r.id, r.poster_id, r.title, r.body, r.dateval, r.stars, u.name, u.email 
from reviews r 
join users u
on r.poster_id = u.id
where itemName = $1
