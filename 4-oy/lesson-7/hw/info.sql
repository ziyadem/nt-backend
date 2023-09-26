



DROP TABLE IF EXISTS users;


CREATE TABLE users(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     user_name VARCHAR(50) NOT NULL,
     user_surname VARCHAR(50) NOT NULL,
     user_email VARCHAR UNIQUE NOT NULL,
     user_age VARCHAR NOT NULL,
     user_password VARCHAR NOT NULL,
     user_role VARCHAR NOT NULL DEFAULT user
);

DROP TABLE IF EXISTS courses;


CREATE TABLE courses(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     title VARCHAR(50) NOT NULL,
     price VARCHAR(50) NOT NULL,
     descript VARCHAR NOT NULL,
     created_by VARCHAR(50) NOT NULL,
     CONSTRAINT fk_created_by
       FOREIGN KEY(created_by) 
	  REFERENCES users(id)
);
insert into courses(title, price, descript, created_by)
  values('React', '1200000', 'Frondend', '2d96931d-05ff-4923-9f5b-03feaad81ac8');