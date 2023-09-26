ALTER USER postgres PASSWORD '1997';

-- show port
SELECT *
FROM pg_settings
WHERE name = 'port';


-- create course

INSERT INTO 
       courses(course_title, course_price,course_teacher_id,course_description, created_by_user_id) 
       VALUES();


-- get one

SELECT * FROM courses WHERE id = '';


-- delete course
DELETE FROM courses WHERE id = $1


-- UPDATE COURSE
 UPDATE courses SET course_title = $1 WHERE id = $2


--  api

SELECT * FROM courses
 WHERE id = ''




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

INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Anvar', 'Suyunov', 25, '2d96931d-05ff-4923-9f5b-03feaad81ac8');
INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Sanvar', 'Avatov', 23, '2d96931d-05ff-4923-9f5b-03feaad81ac8');

INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('React', '1200000', 'abd5e7b7-0ebd-444e-8ec6-06156e26a16f', 'fronend courses....', '2d96931d-05ff-4923-9f5b-03feaad81ac8');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Vue', '130000', '547ba78d-1070-4654-9736-f8e0d9c4e91c', 'fronend courses....', '2d96931d-05ff-4923-9f5b-03feaad81ac8');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Angular', '1400000', 'abd5e7b7-0ebd-444e-8ec6-06156e26a16f', 'fronend courses....', '2d96931d-05ff-4923-9f5b-03feaad81ac8');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Gulp', '1100000', '547ba78d-1070-4654-9736-f8e0d9c4e91c', 'fronend courses....', '2d96931d-05ff-4923-9f5b-03feaad81ac8');



-- api

SELECT c.id, c.course_title, c.created_by_user_id as course_user_id, u.id as user_id, u.user_surname, t.teacher_name FROM courses c
         JOIN users u ON u.id = c.created_by_user_id
         JOIN teachers t ON t.id = c.course_teacher_id
   WHERE c.id = '1f2cab25-2410-474e-839c-001fa4af378e';

