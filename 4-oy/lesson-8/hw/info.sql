



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

insert into users(user_name, user_surname, user_email, user_role,user_age,user_password)
 values('ziyadem','maxkamova','ziyadem17@gmail.com','admin','20','ziyadem17');

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
values('React', '1200000', 'Frondend', 'e00b06be-1756-4079-adfa-4d6e670b62b1');



DROP TABLE IF EXISTS cars;


CREATE TABLE cars(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     title VARCHAR(50) NOT NULL,
     price VARCHAR(50) NOT NULL,
     color VARCHAR NOT NULL,
     created_by VARCHAR(50) NOT NULL,
     CONSTRAINT fk_created_by
       FOREIGN KEY(created_by) 
	  REFERENCES users(id)
);
insert into cars(title, price, color, created_by)
values('malibu', '23000000', 'black', '3a682bfb-ecd9-435e-b4d5-258d8d3dcaaf');



DROP TABLE IF EXISTS fruits;
CREATE TABLE fruits(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     title VARCHAR(50) NOT NULL,
     price VARCHAR(50) NOT NULL,
     created_by VARCHAR(50) NOT NULL,
     CONSTRAINT fk_created_by
       FOREIGN KEY(created_by) 
	  REFERENCES users(id)
);
insert into fruits(title, price, created_by)
values('malibu', '23000000', '3a682bfb-ecd9-435e-b4d5-258d8d3dcaaf');



DROP TABLE IF EXISTS animals;
CREATE TABLE animals(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     title VARCHAR(50) NOT NULL,
     color VARCHAR(50) NOT NULL,
     created_by VARCHAR(50) NOT NULL,
     CONSTRAINT fk_created_by
       FOREIGN KEY(created_by) 
	  REFERENCES users(id)
);
insert into animals(title, color, created_by)
values('malibu', 'white', '3a682bfb-ecd9-435e-b4d5-258d8d3dcaaf');