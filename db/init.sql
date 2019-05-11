drop table users;
drop table posts;


create table users(
user_id serial primary key,
username varchar(40),
password text,
profile_pic text
);

create table posts(
post_id serial primary key,
user_id int references users(user_id),
title text,
image_url text,
content text
);