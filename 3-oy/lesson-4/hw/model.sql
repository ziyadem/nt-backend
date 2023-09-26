
-- database
CREATE DATABASE hwfour_db;


\c hwfour_db


-- table
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS fruits;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS employes;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS animals;

CREATE TABLE users(
           user_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           user_name VARCHAR ( 50 ) UNIQUE NOT NULL,
           user_surname VARCHAR ( 50 ) NOT NULL,
           user_age INTEGER,
           user_email VARCHAR( 50 ) UNIQUE NOT NULL,
           user_role VARCHAR( 50 )  NOT NULL ,
           user_password VARCHAR( 50 )  NOT NULL                    
);

CREATE TABLE company(
        company_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
        company_name VARCHAR ( 50 ) UNIQUE NOT NULL,
        created_by_user_id VARCHAR( 50 )  NOT NULL,                   
           CONSTRAINT company_created_by
            FOREIGN KEY(created_by_user_id) 
	        REFERENCES users(user_id)                   
);

CREATE TABLE courses(
           course_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           course_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           course_teacher VARCHAR ( 50 ) NOT NULL,
           course_price INTEGER,
           course_description VARCHAR( 50 )  NOT NULL,
           created_by_user_id VARCHAR( 50 )  NOT NULL,
            CONSTRAINT course_created_by
            FOREIGN KEY(created_by_user_id) 
	        REFERENCES users(user_id)                  
);

CREATE TABLE fruits(
           fruit_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           fruit_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           ftuit_type VARCHAR ( 50 ) NOT NULL,
           fruit_price INTEGER,
           created_by_user_id VARCHAR( 50 )  NOT NULL,
           CONSTRAINT fruit_created_by
            FOREIGN KEY(created_by_user_id) 
	        REFERENCES users(user_id)                    
);

CREATE TABLE animals(
           animal_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           animal_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           animal_type VARCHAR ( 50 ) NOT NULL,
           animal_color VARCHAR( 50 ) NOT NULL,
           created_by_user_id VARCHAR( 50 )  NOT NULL,
           CONSTRAINT animals_created_by
            FOREIGN KEY(created_by_user_id) 
	        REFERENCES users(user_id)            
);

CREATE TABLE cars(
           car_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           car_title VARCHAR(50) UNIQUE NOT NULL,
           cars_brand VARCHAR ( 50 ) UNIQUE NOT NULL,
           car_color VARCHAR ( 50 ) NOT NULL,
           car_price INTEGER,
           created_by_user_id VARCHAR( 50 )  NOT NULL,                   
           company_id VARCHAR( 50 )  NOT NULL,
           CONSTRAINT car_created_by
            FOREIGN KEY(created_by_user_id) 
	        REFERENCES users(user_id),
           CONSTRAINT car_company_by
            FOREIGN KEY(company_id) 
	        REFERENCES company(company_id)
);

CREATE TABLE employes(
           employes_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           employes_name VARCHAR(50) NOT NULL,
           user_id VARCHAR( 50 )  NOT NULL,                    
           company_id VARCHAR( 50 )  NOT NULL,
           CONSTRAINT employes_created_by
            FOREIGN KEY(user_id) 
	        REFERENCES users(user_id),
           CONSTRAINT employes_company_by
            FOREIGN KEY(company_id) 
	        REFERENCES company(company_id)
);

CREATE TABLE customers(
           customers_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           customers_name VARCHAR(50) NOT NULL,
           employ_id VARCHAR( 50 )  NOT NULL,                    
           car_id VARCHAR( 50 )  NOT NULL,                    
           company_id VARCHAR( 50 )  NOT NULL,
           CONSTRAINT customers_created_by
            FOREIGN KEY(employ_id) 
	        REFERENCES employes(employes_id),
           CONSTRAINT customers_company_by
            FOREIGN KEY(company_id) 
	        REFERENCES company(company_id),
           CONSTRAINT customers_car_by
            FOREIGN KEY(car_id) 
	        REFERENCES cars(car_id)
);





\d+ users
\d+ company  78d4469d-42a5-4b3e-9e87-a3eed647d744
\d+ fruits
\d+ courses
\d+ customers
\d+ employes
\d+ cars
\d+ animals

--CRUD 
-- create
        --users
        INSERT INTO users(user_name, user_surname, user_age, user_email,user_role,user_password)
        VALUES('ziyoda', 'maxkamova', 20,'z@gmail.com','user','ziyoda1234');
        
        --animals
        INSERT INTO animals(animal_title, animal_type, animal_color, created_by_user_id)
        VALUES('dog', 'domestic animals', 'black','5afe9048-ffa5-43c1-908a-06279f02ff00');

        --courses
        INSERT INTO courses( course_title,course_price,course_teacher,course_description,created_by_user_id)
        VALUES('nodejs',800000, 'jorabek','backend','5afe9048-ffa5-43c1-908a-06279f02ff00');

        --company
        INSERT INTO company( company_name,created_by_user_id)
        VALUES('react','5afe9048-ffa5-43c1-908a-06279f02ff00');

        --cars
        INSERT INTO cars(car_title,car_price,cars_brand,car_color,created_by_user_id,company_id)
        VALUES('malibu', 6, 'GM','black','5afe9048-ffa5-43c1-908a-06279f02ff00','78d4469d-42a5-4b3e-9e87-a3eed647d744');
       

        --fruits
        INSERT INTO fruits(fruit_title,ftuit_type,fruit_price,created_by_user_id)
        VALUES('apple', 'fruit', 10000,'5afe9048-ffa5-43c1-908a-06279f02ff00');
        
        --employes
        INSERT INTO employes(employes_name,user_id,company_id)
        VALUES('apple','5afe9048-ffa5-43c1-908a-06279f02ff00','78d4469d-42a5-4b3e-9e87-a3eed647d744');
        
        --customers
        INSERT INTO customers(customers_name,employ_id,car_id,company_id)
        VALUES('apple','a890a025-5389-4d19-9831-140158af4dfd','825f1d39-c60e-4428-859f-5985cd239d06','78d4469d-42a5-4b3e-9e87-a3eed647d744');


--  get list
SELECT * FROM animals;
SELECT * FROM fruits;
SELECT * FROM users;
SELECT * FROM courses;
SELECT * FROM company;
SELECT * FROM employes;
SELECT * FROM cars;
SELECT * FROM customers;

