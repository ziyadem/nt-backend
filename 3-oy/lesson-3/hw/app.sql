CREATE DATABASE hwthree_db;
CREATE TABLE users(
           id SERIAL NOT NULL,
           username VARCHAR ( 50 ) UNIQUE NOT NULL,
           password TEXT NOT NULL,
           product_image TEXT DEFAULT NULL ,
           course_id VARCHAR( 50 )  NOT NULL,
           FOREIGN KEY (course_id) REFERENCES course(id)          
);
CREATE TABLE course(
           id SERIAL NOT NULL,
           course VARCHAR ( 50 )  NOT NULL 
           PRIMARY KEY (id)       
);
CREATE TABLE grupa(
           id SERIAL NOT NULL,
           course_id VARCHAR ( 50 ) NOT NULL,
           FOREIGN KEY (course_id) REFERENCES course(id)          
);
CREATE TABLE room(
           id SERIAL NOT NULL,
           course_id VARCHAR ( 50 ) NOT NULL 
           FOREIGN KEY (course_id) REFERENCES course(id)         
);

SELECT * FROM users;
SELECT * FROM course;
SELECT * FROM grupa;
SELECT * FROM room;