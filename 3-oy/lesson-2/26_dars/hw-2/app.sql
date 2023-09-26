
-- database
CREATE DATABASE animals_db;
CREATE DATABASE course_db;
CREATE DATABASE car_db;
CREATE DATABASE fruit_db;

\c animal_db
\c course_db
\c car_db
\c fruit_db

-- table
DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS fruits;
CREATE TABLE animals(
           animal_id VARCHAR(50) UNIQUE NOT NULL,
           animal_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           animal_type VARCHAR ( 50 ) NOT NULL,
           animal_color VARCHAR( 50 ) NOT NULL,
           created_by_user_id VARCHAR( 50 )  NOT NULL           
);
CREATE TABLE users(
           user_id VARCHAR(50) UNIQUE NOT NULL,
           user_name VARCHAR ( 50 ) UNIQUE NOT NULL,
           user_surname VARCHAR ( 50 ) NOT NULL,
           user_age INTEGER,
           user_email VARCHAR( 50 ) UNIQUE NOT NULL,
           user_role VARCHAR( 50 )  NOT NULL ,
           user_password VARCHAR( 50 )  NOT NULL                    
);
CREATE TABLE courses(
           course_id VARCHAR(50) UNIQUE NOT NULL,
           course_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           course_teacher VARCHAR ( 50 ) NOT NULL,
           course_price INTEGER,
           course_description VARCHAR( 50 )  NOT NULL,
           created_by_user_id VARCHAR( 50 ) UNIQUE NOT NULL                    
);
CREATE TABLE teachers(
           teacher_id VARCHAR(50) UNIQUE NOT NULL,
           teacher_name VARCHAR ( 50 ) UNIQUE NOT NULL,
           teacher_surname VARCHAR ( 50 ) NOT NULL,
           teacher_age INTEGER,
           teacher_course_title INTEGER  NOT NULL,
           created_by_user_id VARCHAR( 50 )  NOT NULL                    
);
CREATE TABLE cars(
           car_title VARCHAR(50) UNIQUE NOT NULL,
           cars_brand VARCHAR ( 50 ) UNIQUE NOT NULL,
           car_color VARCHAR ( 50 ) NOT NULL,
           car_price INTEGER,
           created_by_user_id VARCHAR( 50 )  NOT NULL                    
);

CREATE TABLE fruits(
           fruit_id VARCHAR(50) UNIQUE NOT NULL,
           fruit_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           ftuit_type VARCHAR ( 50 ) NOT NULL,
           fruit_price INTEGER,
           created_by_user_id VARCHAR( 50 )  NOT NULL                    
);
ALTER TABLE cars ADD COLUMN car_id VARCHAR(30) UNIQUE NOT NULL;

\d+ users
\d+ courses
\d+ animals
\d+ teachers
\d+ cars
\d+ fruits

--CRUD 
-- create
        --animals
        INSERT INTO animals(animal_id, animal_title, animal_type, animal_color, created_by_user_id)
        VALUES('1','dog', 'domestic animals', 'black','1');

        INSERT INTO animals(animal_id, animal_title, animal_type, animal_color, created_by_user_id)
        VALUES('2','cat', 'domestic animals', 'black','1');

        --users
        INSERT INTO users(user_id, user_name, user_surname, user_age, user_email,user_role,user_password)
        VALUES('1','ziyoda', 'maxkamova', 20,'z@gmail.com','user','ziyoda1234');

        INSERT INTO users(user_id, user_name, user_surname, user_age, user_email,user_role,user_password)
        VALUES('2','ziyoda2', 'maxkamova', 20,'z2@gmail.com','user','ziyoda1234');

        --courses
        INSERT INTO courses( course_id,course_title,course_price,course_teacher,course_description,created_by_user_id)
        VALUES('1','nodejs',800000, 'jorabek','backend','1');

        INSERT INTO courses( course_id,course_title,course_price,course_teacher,course_description,created_by_user_id)
        VALUES('2','react',800000, 'alisher','front','2');

        --teachers
        INSERT INTO teachers(teacher_id,teacher_name,teacher_surname,teacher_age,teacher_course_title,created_by_user_id)
        VALUES('1','ziyoda', 'maxkamova', 20,1,'1');

        INSERT INTO teachers(teacher_id,teacher_name,teacher_surname,teacher_age,teacher_course_title,created_by_user_id)
        VALUES('12','ziyoda2', 'maxkamova2', 20,2,'2');

        --cars
        INSERT INTO cars(car_id,car_title,car_price,cars_brand,car_color,created_by_user_id)
        VALUES('1','malibu', 20000, 'GM','black','1');

        INSERT INTO cars(car_id,car_title,car_price,cars_brand,car_color,created_by_user_id)
        VALUES('2','ferari', 220000, 'fr','black','4');

        --fruits
        INSERT INTO fruits(fruit_id,fruit_title,ftuit_type,fruit_price,created_by_user_id)
        VALUES('1','apple', 'fruit', 10000,'1');

        INSERT INTO fruits(fruit_id,fruit_title,ftuit_type,fruit_price,created_by_user_id)
        VALUES('2','apple2', 'fruit2', 10002,'1');


--  get list
SELECT * FROM animals;
SELECT * FROM fruits;
SELECT * FROM users;
SELECT * FROM courses;
SELECT * FROM teachers;
SELECT * FROM cars;
SELECT * FROM fruits;

--get one
        --animals
        SELECT animal_title  FROM animals WHERE created_by_user_id = '1';
        SELECT *  FROM animals WHERE created_by_user_id = '1';
        --user
        SELECT user_name  FROM users WHERE user_email = 'z@gmail.com';
        SELECT *  FROM users WHERE user_email = 'z@gmail.com';
        --courses
        SELECT *  FROM courses WHERE course_id = '1';
        --teachers
        SELECT *  FROM teachers WHERE teacher_id = '1';
        --cars
        SELECT *  FROM cars WHERE car_id = '1';
        --fruits
        SELECT *  FROM fruits WHERE fruit_id = '1';

-- update
        --animals
        UPDATE animals SET animal_title='hourse' WHERE animal_id='1';
        --users
        UPDATE users SET user_age=19 WHERE user_id='1';
        --courses
        UPDATE  courses  SET course_price=0 WHERE course_id = '1';
        --teachers
        UPDATE teachers SET teacher_surname='MaxKamovaa' WHERE teacher_id = '1';
        --cars
        UPDATE cars SET car_price=5498720982 WHERE car_id = '1';
        --fruits
        UPDATE fruits SET fruit_price=122 WHERE fruit_id = '1';

-- DELETE
        --animals
        DELETE FROM animals WHERE animal_id = '1';
        --users
        DELETE FROM users WHERE user_id = '1';
        --courses
        DELETE FROM courses WHERE course_id = '1';
        --teachers
        DELETE FROM teachers WHERE teacher_id = '1';
        --cars
        DELETE FROM cars WHERE car_id = '1';
        --fruits
        DELETE FROM fruits WHERE fruit_id = '1';



