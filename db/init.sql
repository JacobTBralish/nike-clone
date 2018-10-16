drop table if exists users cascade;
drop table if exists reviews cascade;



create table users (
    id serial primary key,
    auth0_id text unique not null, 
    name varchar(30) not null, 
    email varchar(100) unique not null,
);

insert into users (auth0_id, name, email) values ('1234473896858782', 'Mat Weeler', 'mweeler@gmail.com');

create table reviews (
    id serial primary key,
    poster_id integer references users(id),	
    profile_id integer references instructor_profile(id),	
    title varchar(100) not null,
    body text not null,
    stars integer not null,
    dateval text
);


-- insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
-- values (12, 9, 'Knowledgeable and Patient Tutor', 'There are subjects where I do not understand things the first time and reading music happens to be one of them.', 5, 'September 2017');


create table instructor_profile (
    id serial primary key, 
    instructor_id integer references users(id),	age integer not null, 
    gender varchar(10) not null, 
    locationType varchar(10),
    zipcode integer, 
    address text, 
    city varchar(30) not null,
    state varchar(2) not null, 
    country varchar(30) not null,
    price integer not null,
    instruments text, 
    styles text,
    skillLevel text,
    teachingSince varchar(30) not null,
    about text not null, 
    education text,
    img_url text
);	