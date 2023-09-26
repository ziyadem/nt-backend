
-- DATBASE ACTIONS
DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;
ALTER DATABASE course_db RENAME TO courses;
DROP DATABASE new_cars;


-- TABLE ACTIONS
DROP TABLE IF EXISTS users;
CREATE TABLE users(
           user_id VARCHAR(50) UNIQUE NOT NULL,
           username VARCHAR ( 50 ) UNIQUE NOT NULL,
           password VARCHAR ( 50 ) NOT NULL,
           email VARCHAR( 50 ) UNIQUE NOT NULL,
           age INTEGER
           
);
ALTER TABLE users RENAME TO accounts;
DROP TABLE users;

CREATE TABLE courses(
           course_id VARCHAR(50) UNIQUE NOT NULL,
           course_title VARCHAR ( 50 ) NOT NULL,
           course_price VARCHAR ( 50 ) NOT NULL,
           course_author VARCHAR( 50 ) NOT NULL,
           user_id VARCHAR(50) NOT NULL
           
);

ALTER TABLE courses RENAME TO course;



-- TABLE COLUMNS ACTIONS
ALTER TABLE users ADD COLUMN role VARCHAR(30);
ALTER TABLE users RENAME COLUMN role TO roles;

\d+ users -> tabletsa tarkibidagi columnlarning type tekshirish
ALTER TABLE accounds ALTER COLUMN users_test TYPE INTEGER USING (users_test::INTEGER)
ALTER TABLE accounds DROP COLUMN users_test;

ALTER TABLE accounds ALTER COLUMN users_test SET NOT NULL;
ALTER TABLE course ALTER COLUMN course_author DROP NOT NULL;


-- CRUD actions
-- create
INSERT INTO users(user_id, username, password, email, age, roles)
      VALUES('11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', 'Damenic', 'user1234', 'user2@gmail.com', 12, 'user');

INSERT INTO users(user_id, username, password, email, age, roles)
      VALUES('11bf5b37-e0b8-42a0-8dcf-dc8c4aefc001', 'Damenic10', 'user1234', 'user4@gmail.com', 12, 'user');


INSERT INTO users(user_id, username, password, email, age, roles)
      VALUES('11bf5b37-e0b8-42a0-8dcf-dc8c4aefc002', 'Damenic3', 'user1234', 'user3@gmail.com', 12, 'user');


INSERT INTO users(user_id, username, password, email, age, roles)
      VALUES('11bf5b37-e0b8-42a0-8dcf-dc8c4aefc003', 'Damenic4', 'user1234', 'user5@gmail.com', 12, 'user');

--  get list
SELECT * FROM users;


-- get one
SELECT * FROM users WHERE user_id = '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000';


-- update
 UPDATE users SET username = 'Username12345', password = 'eshmattoshmat', age = 100 WHERE user_id = '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000';

-- DELETE

DELETE FROM users WHERE user_id = '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000';

/*
   example
     PRODUCTS_DB
             - PRODUCTS
             - USERS

*/


/*
  CAR_DB DATABASE
       - CARS
            - car_id
            - car_title
            - car_price
            - cars_brand
            - car_color
            - created_by_user_id
       - USERS
            - user_id
            - user_name
            - user_surname
            - user_age
            - user_email
            - user_role
            - user_password

 ANIMAL_DB DATABASE
      - ANIMALS
           - animal_id
           - animal_title
           - animal_type
           - animal_color
           - created_by_user_id
      - USERS
            - user_id
            - user_name
            - user_surname
            - user_age
            - user_email
            - user_role
            - user_password

 COURSE_DB DATABASE
      - COURSES
            - course_id
            - course_title
            - course_price
            - course_teacher
            - course_description
            - created_by_user_id
      - USERS
            - user_id
            - user_name
            - user_surname
            - user_age
            - user_email
            - user_role
            - user_password
      - TEACHERS
            - teacher_id
            - teacher_name
            - teacher_surname
            - teacher_age
            - teacher_course_title
            - created_by_user_id

FRUIT_DB DATABASE
     - FRUITS
            - fruit_id
            - fruit_title
            - ftuit_type
            - fruit_price
            - created_by_user_id

     - USERS
            - user_id
            - user_name
            - user_surname
            - user_age
            - user_email
            - user_role
            - user_password





*/