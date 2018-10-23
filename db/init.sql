drop table if exists users cascade;
drop table if exists reviews cascade;

create table reviews (
 	id serial primary key,
 	poster_id integer references users(id), 
 	shoeName text,  
 	title varchar(100) not null,
 	body text not null,
 	stars integer not null,
 	dateval text
);
select * from reviews where shoeName = $1
delete from reviews where id = $1
update reviews where id = $1
insert into reviews (poster_id, shoeName, title, body, stars, dateval) values ($1, $2, $3, $4, $5, $6);
insert into reviews (poster_id, shoeName, title, body, stars, dateval) values (1, 'Nike Air 1', 'Great Shoe'. 'Body Body Body', 4, 'werd date');


update reviews
set title = $1,
    body = $2,
    stars = $3
where id = $4;
SELECT * FROM reviews WHERE profile_id = $5;



create table shipping_addresses (
    id serial primary key,
    ref_id text,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    user_id integer references users(id),
    address1 text not null,
    address2 text,
    city varchar(30) not null,
    state varchar(15) not null,
    zip_code char(5) constraint check_zip_code check (zip_code ~ '[A-Z0-9-]+') not null,
    email text not null,
    phone char(10) constraint check_phone_number check (phone not like '%[^0-9]%') not null
);

create table billing_addresses (
    id serial primary key,
    ref_id text references shipping_addresses(ref_id),
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    user_id integer references users(id),
    address1 text not null,
    address2 text,
    city varchar(30) not null,
    state varchar(15) not null,
    zip_code char(5) constraint check_zip_code check (zip_code ~ '[A-Z0-9-]+') not null
);

-- insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
-- values (12, 9, 'Knowledgeable and Patient Tutor', 'There are subjects where I do not understand things the first time and reading music happens to be one of them.', 5, 'September 2017');


-- create table instructor_profile (
--     id serial primary key, 
--     instructor_id integer references users(id),	age integer not null, 
--     gender varchar(10) not null, 
--     locationType varchar(10),
--     zipcode integer, 
--     address text, 
--     city varchar(30) not null,
--     state varchar(2) not null, 
--     country varchar(30) not null,
--     price integer not null,
--     instruments text, 
--     styles text,
--     skillLevel text,
--     teachingSince varchar(30) not null,
--     about text not null, 
--     education text,
--     img_url text
-- );	