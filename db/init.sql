drop table if exists users cascade;
drop table if exists reviews cascade;

create table users (
    id serial primary key,
    auth0_id text unique not null,
    name varchar(80) not null,
    first_name varchar(30) not null,
    last_name varchar(50) not null,
    picture text,
    gender varchar(30),
    email varchar(100) unique not null,
    birthdate text,
    screen_name varchar(100)
);

create table reviews (
 	id serial primary key,
 	poster_id integer references users(id), 
 	itemName text,  
 	title varchar(100) not null,
 	body text not null,
 	stars char(1) not null,
 	dateval text
);
select * from reviews where shoeName = $1
delete from reviews where id = $1
update reviews where id = $1
insert into reviews (poster_id, shoeName, title, body, stars, dateval) values ($1, $2, $3, $4, $5, $6);
insert into reviews (poster_id, shoeName, title, body, stars, dateval) values (1, 'Nike Air 1', 'Great Shoe'. 'Body Body Body', 4, 'werd date');




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

create table orders ( 
    id serial primary key,  
    user_id integer references users(id),
    tracking_number text not null,
    purchase_date text not null,
    cart_total integer not null
);    

create table orderItems (
    id serial primary key,
    orders_ref integer references orders(id),
    title varchar(100) not null,
    style varchar(100) not null,
    price integer not null,
    size varchar(30) not null,
    color text not null,
    quantity integer not null
);



