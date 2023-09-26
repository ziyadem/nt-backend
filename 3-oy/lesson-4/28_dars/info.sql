-- https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/
DATA TYPES
PRIMARY KEY VS FOREIGN KEY
JOIN (INNER JOIN)
NATURAL JOIN
LEFT JOIN 
RIGHT JOIN

DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;




CREATE TABLE fruits(
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL
);

INSERT INTO fruits(name ) 
  VALUES('OLMA');

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(
     id VARCHAR UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
     user_name VARCHAR(50) NOT NULL,
     user_surname VARCHAR(50) NOT NULL,
     user_age INT NOT NULL,
     user_email VARCHAR(50) UNIQUE NOT NULL,
     user_role VARCHAR(6) NOT NULL,
     user_password VARCHAR(20) NOT NULL
);


INSERT INTO users( user_name, user_surname, user_age, user_email, user_role, user_password) VALUES('Sohibjon', 'Amonov', 23, 'example44@gmail.com', 'admin', 'user1234');
INSERT INTO users( user_name, user_surname, user_age, user_email, user_role, user_password) VALUES('Xasan', 'Muslimov', 24, 'example24@gmail.com', 'admin', 'user1235');
INSERT INTO users( user_name, user_surname, user_age, user_email, user_role, user_password) VALUES('Shohsuvor', 'Abdusamiyev', 25, 'example43@gmail.com', 'admin', 'user1236');



-- RELATIONSHIP
-- ONE TO ONE
-- ONE TO MANY
-- MANY TO MANY



DROP TABLE IF EXISTS teachers;
CREATE TABLE teachers(
     id VARCHAR UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
     teacher_name VARCHAR(50) NOT NULL,
     teacher_surname VARCHAR(50) NOT NULL,
     teacher_age INT NOT NULL,
     created_by_user_id VARCHAR(50) NOT NULL,
     CONSTRAINT fk_created_by
       FOREIGN KEY(created_by_user_id) 
	  REFERENCES users(id)
);

DROP TABLE IF EXISTS COURSES;
CREATE TABLE COURSES(
     id VARCHAR UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
     course_title VARCHAR(50) NOT NULL,
     course_price VARCHAR(50) NOT NULL,
     course_teacher_id VARCHAR(50) NOT NULL,
     course_description TEXT,
     created_by_user_id VARCHAR(50) NOT NULL,
     CONSTRAINT fk_created_by
       FOREIGN KEY(created_by_user_id) 
	  REFERENCES users(id),
     CONSTRAINT fk_course_teacher
       FOREIGN KEY(course_teacher_id) 
	  REFERENCES teachers(id)
);

-- admin 1

INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Anvar', 'Suyunov', 25, '7aee9409-17a4-435c-8fd7-bb1623269b93');
INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Sanvar', 'Avatov', 23, '3451224a-a644-45b0-9823-ca1d61041bdd');
INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Javohir', 'Normamatov', 21, '68f35608-2c8f-493d-a64a-6ef5f8dc471f');

INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('React', '1200000', '9c5f2512-4fde-482e-b250-8bf1ca07b9d1', 'fronend courses....', '7aee9409-17a4-435c-8fd7-bb1623269b93');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Vue', '130000', ' fad939c1-c2e9-4560-bfd3-de88c4b5dc33', 'fronend courses....', '3451224a-a644-45b0-9823-ca1d61041bdd');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Angular', '1400000', 'fad939c1-c2e9-4560-bfd3-de88c4b5dc33', 'fronend courses....', '3451224a-a644-45b0-9823-ca1d61041bdd');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Gulp', '1100000', 'a2a9a353-0142-4d52-ac35-6ec39886ddb9', 'fronend courses....', '3451224a-a644-45b0-9823-ca1d61041bdd');



-- admin 2

INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Abdurahmon', 'Abduazimov', 25, 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Xidirbek', 'Oktyabryov', 23, 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Shahruz', 'Ismoilov', 21, 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');

INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Express', '1200000', 'e854671d-8030-41e4-9a63-c9af8a3bd2ce', 'fronend courses....', 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Nestjs', '130000', 'e854671d-8030-41e4-9a63-c9af8a3bd2ce', 'fronend courses....', 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Koajs', '1400000', '46d17b4c-4178-433d-872d-85d1dafccb09', 'fronend courses....', 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Fastifyjs', '1100000', '80576675-4a28-40f5-bdc0-4a5422d01dbc', 'fronend courses....', 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');


SELECT c.id, c.course_title, c.created_by_user_id, u.id, u.user_name FROM courses c
    JOIN users u ON u.id = c.created_by_user_id;
    


SELECT c.id, c.course_title, t.teacher_name, t.teacher_surname, u.user_name FROM courses c
     JOIN teachers t ON t.id = c.course_teacher_id
     JOIN users u ON u.id = c.created_by_user_id
     WHERE c.id = 'a8cda7e0-5e6d-45db-bcba-6b04c3281a7f';

 
SELECT u.id, u.user_name, t.teacher_name, t.teacher_surname FROM users u
    LEFT JOIN teachers t ON t.created_by_user_id = u.id;

SELECT u.id, u.user_name, t.teacher_name, t.teacher_surname FROM users u
    FULL OUTER JOIN teachers t ON t.created_by_user_id = u.id;


SELECT c.id, c.course_title, t.teacher_name, t.teacher_surname, c.created_by_user_id, u.user_name, u.user_email FROM courses c 
    JOIN teachers t ON t.id = c.course_teacher_id
    JOIN users u ON u.id = c.created_by_user_id


  WHERE C.ID = 'a8cda7e0-5e6d-45db-bcba-6b04c3281a7f';




SELECT u.user_name, u.user_email, t.teacher_name FROM teachers t
    JOIN users u ON u.id = t.created_by_user_id
    WHERE t.id = '80576675-4a28-40f5-bdc0-4a5422d01dbc';


    SELECT * FROM TEACHERS WHERE ID = '1b34012f-e61f-4454-b7e9-541ecdc1fbae';




    select * from courses where id = 'a662516f-1652-40b6-9bb6-c52488b6f4a1';