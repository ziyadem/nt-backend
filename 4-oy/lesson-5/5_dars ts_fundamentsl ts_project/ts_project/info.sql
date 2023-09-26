create database ts_express;

drop table if exists "users";
create table users(
    id serial primary key,
    name varchar(100) not null,
    surname varchar(100) not null,
    email varchar(100) unique not null,
    age integer not null,
    role varchar(100) not null, 
    password varchar(100) not null
);

drop table if exists "fruits";
create table fruits(
    id serial primary key,
    title varchar(100) unique not null,
    color varchar(100) not null,
    created_by_user_id integer  not null,
    price integer not null
);

drop table if exists animals;
create table animals(
    id serial primary key,
    title varchar(100) unique not null,
    color varchar(100) not null,
    created_by_user_id integer  not null
);

UPDATE FROM teachers SET teacher_name = $1, teacher_surname = $2, teacher_age = $3

WHERE created_by_user_id = $4 and id = $5



DELETE FROM teachers WHERE id = $1;