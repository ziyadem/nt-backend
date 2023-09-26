create database credohouse_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4 (),
	username VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 50 ) UNIQUE NOT NULL,
	age INTEGER NOT NULL,
	role VARCHAR ( 50 ) NOT NULL,
	password VARCHAR ( 50 ) NOT NULL
);

INSERT INTO users (username,email,age,role,password) VALUES('ziyadem', 'ziyadem@gmail.com',20,'admin','ziyadem17');


