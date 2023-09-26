
-- https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-self-join/
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

INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Anvar', 'Suyunov', 25, 'f4441e40-7c74-4a3b-8f79-a05dc21ae6e2');
INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Sanvar', 'Avatov', 23, 'e042a6d0-369a-4f64-a766-09668cdb2528');
INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Javohir', 'Normamatov', 21, 'c488a7dd-359e-4bd9-85fe-7fab8e6fd498');

INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('React', '1200000', '370c5a07-3c54-4af7-b789-7f0b8a1465c8', 'fronend courses....', 'f4441e40-7c74-4a3b-8f79-a05dc21ae6e2');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Vue', '130000', 'e68cc6bd-66df-4f0e-9aab-267edd6f4466', 'fronend courses....', 'e042a6d0-369a-4f64-a766-09668cdb2528');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Angular', '1400000', 'e68cc6bd-66df-4f0e-9aab-267edd6f4466', 'fronend courses....', 'e042a6d0-369a-4f64-a766-09668cdb2528');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Gulp', '1100000', '3ac9dab5-b7c0-42a0-87a9-d1449d406b00', 'fronend courses....', 'c488a7dd-359e-4bd9-85fe-7fab8e6fd498');



-- admin 2

INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Abdurahmon', 'Abduazimov', 25, 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Xidirbek', 'Oktyabryov', 23, 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO teachers(teacher_name, teacher_surname, teacher_age, created_by_user_id ) VALUES('Shahruz', 'Ismoilov', 21, 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');

INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Express', '1200000', 'e854671d-8030-41e4-9a63-c9af8a3bd2ce', 'fronend courses....', 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Nestjs', '130000', 'e854671d-8030-41e4-9a63-c9af8a3bd2ce', 'fronend courses....', 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Koajs', '1400000', '46d17b4c-4178-433d-872d-85d1dafccb09', 'fronend courses....', 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');
INSERT INTO courses( course_title, course_price, course_teacher_id, course_description, created_by_user_id) VALUES('Fastifyjs', '1100000', '80576675-4a28-40f5-bdc0-4a5422d01dbc', 'fronend courses....', 'bbe1252e-5ca3-4081-b8ad-08ca070d64e8');





SELECT u.id, u.user_name, t.id, t.teacher_name, t.created_by_user_id FROM users u JOIN teachers t ON u.id = t.created_by_user_id WHERE u.id = 'f4441e40-7c74-4a3b-8f79-a05dc21ae6e2';





select u.user_name as name from teachers t join users u on u.id = t.created_by_user_id  where t.id = '370c5a07-3c54-4af7-b789-7f0b8a1465c8'; 
select u.user_name as name from teachers t inner join users u on u.id = t.created_by_user_id  where t.id = '370c5a07-3c54-4af7-b789-7f0b8a1465cd'; 





select u.id, u.user_name, t.id, t.teacher_name, t.created_by_user_id from users u left join teachers t on u.id = t.created_by_user_id;






DROP TABLE IF EXISTS emails;
CREATE TABLE emails(
     id VARCHAR UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
     title VARCHAR(50) NOT NULL
     
);

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(
     id VARCHAR UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
     user_name VARCHAR(50) NOT NULL,
     email_id VARCHAR(50) UNIQUE NOT NULL,
       CONSTRAINT fk_user_email
       FOREIGN KEY(email_id) 
	  REFERENCES emails(id)
);





DROP TABLE IF EXISTS company;
CREATE TABLE company(
     id VARCHAR UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
     company_title VARCHAR(50) NOT NULL,
     email_id VARCHAR(50) UNIQUE NOT NULL,
       CONSTRAINT fk_company_email
       FOREIGN KEY(email_id) 
	  REFERENCES emails(id)
)

-- users
INSERT INTO emails(title ) VALUES('eshamt@gmail.com');
INSERT INTO users(user_name, email_id ) VALUES('Toshmat', 'f63e1c94-a972-4501-8fb1-e763c3fdd29e');



-- company
INSERT INTO emails(title) VALUES('toshmat_company_email@gmail.com');
INSERT INTO company(company_title, email_id ) VALUES('Najot Talim', '3dd9143c-1399-4113-b110-ec398c3a8943');




select e.id, e.title, u.user_name, u.email_id  from emails e left join users u on e.id = u.email_id;
select e.id, e.title, u.user_name, u.email_id  from emails e left outer join users u on e.id = u.email_id;


select * from users u right join emails e on e.id = u.email_id;


select e.id, e.title, u.user_name, u.email_id  from emails e full outer join users u on e.id = u.email_id;





select e.id, e.title, u.user_name from emails e cross join users u;


INSERT INTO categories (category_name)  VALUES ('Smart Phone');

  INSERT INTO categories (category_name) VALUES ('Laptop');
  INSERT INTO categories (category_name) VALUES ('Tablet');


  INSERT INTO products (product_name, category_id) VALUES ('iPhone', 1);
  INSERT INTO products (product_name, category_id) VALUES ('Samsung Galaxy', 1);
  INSERT INTO products (product_name, category_id) VALUES ('HP Elite', 2);
  INSERT INTO products (product_name, category_id) VALUES ('Lenovo Thinkpad', 2);
  INSERT INTO products (product_name, category_id) VALUES ('iPad', 3);
  INSERT INTO products (product_name, category_id) VALUES ('Kindle Fire', 3);
