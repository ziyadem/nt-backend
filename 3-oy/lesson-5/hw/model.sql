
-- database
CREATE DATABASE hwfive_db;


\c hwfive_db



---email
DROP TABLE IF EXISTS emails;
CREATE TABLE emails(
     id VARCHAR UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
     title VARCHAR(50) NOT NULL
     
);
 INSERT INTO emails(title)
 VALUES('z@gmail.com'), ---31b3e614-4298-4fe2-b103-5029205e88f9
('b@gmail.com'),---- 45ffc515-44fa-469e-bb59-13b5ef5d15fb
('h@gmail.com'),---35623298-6c94-4fdf-b03d-f2f873ed331e
 ('nt@gmail.com');---253d0a99-dfa8-40b9-ba10-9b182ef03832

SELECT * FROM emails;

        
--users
DROP TABLE IF EXISTS users;
CREATE TABLE USERS(
     id VARCHAR UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
     user_name VARCHAR(50) NOT NULL,
     email_id VARCHAR(50) UNIQUE NOT NULL,
       CONSTRAINT fk_user_email
       FOREIGN KEY(email_id) 
	  REFERENCES emails(id)
);
       
INSERT INTO users(user_name, email_id)
VALUES('ziyoda','31b3e614-4298-4fe2-b103-5029205e88f9'),---0330c03c-e4e4-45dc-b7e9-8e15b678a3b9
('burhon','45ffc515-44fa-469e-bb59-13b5ef5d15fb'),---a35a905e-8afd-4e12-a7aa-a6fde9e22147
('humoyun','35623298-6c94-4fdf-b03d-f2f873ed331e'),---ceb48c3b-a5a4-4072-8ad0-2ae3264a113e
('najot-talim','253d0a99-dfa8-40b9-ba10-9b182ef03832');---2f4fe68c-869c-40ca-bd67-143b76651946

SELECT * FROM users;

 select e.title ,u.id from users u
        join emails e on  u.email_id= e.id;
        where u.id='0330c03c-e4e4-45dc-b7e9-8e15b678a3b9';


        
---company
DROP TABLE IF EXISTS company;
CREATE TABLE company(
        company_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
        company_name VARCHAR ( 50 ) UNIQUE NOT NULL,
        email_id VARCHAR ( 50 ) UNIQUE NOT NULL,
        created_by_user_id VARCHAR( 50 )  NOT NULL,                   
           CONSTRAINT company_created_by
            FOREIGN KEY(created_by_user_id) 
	        REFERENCES users(id) ,
        CONSTRAINT fk_company_email
       FOREIGN KEY(email_id) 
	  REFERENCES emails(id)                  
);
 INSERT INTO company( company_name,email_id,created_by_user_id)
 VALUES('react','253d0a99-dfa8-40b9-ba10-9b182ef03832','2f4fe68c-869c-40ca-bd67-143b76651946'),
 ('zzz','31b3e614-4298-4fe2-b103-5029205e88f9','0330c03c-e4e4-45dc-b7e9-8e15b678a3b9'),
 ('bbb','45ffc515-44fa-469e-bb59-13b5ef5d15fb','a35a905e-8afd-4e12-a7aa-a6fde9e22147'),
 ('hhh','35623298-6c94-4fdf-b03d-f2f873ed331e','ceb48c3b-a5a4-4072-8ad0-2ae3264a113e');

SELECT * FROM company;
email_id => result -> company_title, user_name, user_email_title, company_email_title

 select u.user_name, c.company_name ,e.title,em.title as company_emile_title from company c 
        join users u on c.created_by_user_id = u.id  
        join emails e on u.email_id = e.id  
        join emails em on c.email_id = em.id 
        where c.email_id = '31b3e614-4298-4fe2-b103-5029205e88f9';


---courses
DROP TABLE IF EXISTS courses;
CREATE TABLE courses(
           course_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           course_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           course_teacher VARCHAR ( 50 ) NOT NULL,
           
           created_by_user_id VARCHAR( 50 )  NOT NULL,
            CONSTRAINT course_created_by
            FOREIGN KEY(created_by_user_id) 
	        REFERENCES users(id)                  
);
 INSERT INTO courses( course_title,course_teacher,created_by_user_id)
VALUES('nodejs', 'jorabek','2f4fe68c-869c-40ca-bd67-143b76651946'),
('react', 'Alisherjon','2f4fe68c-869c-40ca-bd67-143b76651946');
SELECT * FROM courses;

 select u.user_name, c.course_teacher,e.title from courses c 
        join users u on c.created_by_user_id = u.id  
        join emails e on u.email_id = e.id  
        where course_id = '8233efe2-c436-42fe-9c8f-5ab64ebacf46';


---fruits
DROP TABLE IF EXISTS fruits;
CREATE TABLE fruits(
           fruit_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           fruit_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           ftuit_type VARCHAR ( 50 ) NOT NULL,
           fruit_price INTEGER,
           created_by_user_id VARCHAR( 50 )  NOT NULL,
           CONSTRAINT fruit_created_by
            FOREIGN KEY(created_by_user_id) 
	        REFERENCES users(id)                    
);
 INSERT INTO fruits(fruit_title,ftuit_type,fruit_price,created_by_user_id)
VALUES('apple', 'fruit', 10000,'2f4fe68c-869c-40ca-bd67-143b76651946'),
('apple2', 'fruit', 10000,'0330c03c-e4e4-45dc-b7e9-8e15b678a3b9');
SELECT * FROM fruits;

 select f.fruit_id, u.user_name, e.title from fruits f 
        join users u on f.created_by_user_id = u.id 
        join emails e on u.email_id = e.id
        where fruit_id = 'd931e7ed-b855-4657-8261-a5ec432ce5ae';



  ---animals      
DROP TABLE IF EXISTS animals;
CREATE TABLE animals(
           animal_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           animal_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           animal_type VARCHAR ( 50 ) NOT NULL,
           animal_color VARCHAR( 50 ) NOT NULL,
           created_by_user_id VARCHAR( 50 )  NOT NULL,
           CONSTRAINT animals_created_by
            FOREIGN KEY(created_by_user_id) 
	        REFERENCES users(id)            
);
 INSERT INTO animals(animal_title, animal_type, animal_color, created_by_user_id)
 VALUES('dog', 'domestic animals', 'black','0330c03c-e4e4-45dc-b7e9-8e15b678a3b9'),
 ('dog2', 'domestic animals', 'black','2f4fe68c-869c-40ca-bd67-143b76651946');
SELECT * FROM animals;



---cars
DROP TABLE IF EXISTS cars;
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
	        REFERENCES users(id),
           CONSTRAINT car_company_by
            FOREIGN KEY(company_id) 
	        REFERENCES company(company_id)
);
 INSERT INTO cars(car_title,car_price,cars_brand,car_color,created_by_user_id,company_id)
VALUES('malibu', 6, 'GM','black','2f4fe68c-869c-40ca-bd67-143b76651946','d9846b96-f4e8-4c6a-9720-0c393d5e769d'),
('malibu2', 6, 'GM2','black','0330c03c-e4e4-45dc-b7e9-8e15b678a3b9','870bb7ed-2f37-4754-b8fc-ab00f69b0c3d');
SELECT * FROM cars;

  select u.user_name, c.car_title,e.title ,em.title from cars c 
        join users u on c.created_by_user_id = u.id  
        join emails e on u.email_id = e.id  
        join emails em on c.company_id = em.id  
       where car_id = '2238f614-d167-4872-9c00-07a7072cc09e';
 


DROP TABLE IF EXISTS employes;
CREATE TABLE employes(
           employes_id VARCHAR(50) UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
           employes_name VARCHAR(50) NOT NULL,
           user_id VARCHAR( 50 )  NOT NULL,                    
           company_id VARCHAR( 50 )  NOT NULL,
           CONSTRAINT employes_created_by
            FOREIGN KEY(user_id) 
	        REFERENCES users(id),
           CONSTRAINT employes_company_by
            FOREIGN KEY(company_id) 
	        REFERENCES company(company_id)
);
 INSERT INTO employes(employes_name,user_id,company_id)
VALUES('apple','2f4fe68c-869c-40ca-bd67-143b76651946','d9846b96-f4e8-4c6a-9720-0c393d5e769d'),
('apple2','0330c03c-e4e4-45dc-b7e9-8e15b678a3b9','870bb7ed-2f37-4754-b8fc-ab00f69b0c3d');
SELECT * FROM employes;

 select u.user_name,e.title ,c.company_name,em.title as company_emile_title from employes ep 
        join users u on ep.user_id = u.id  
        join emails e on u.email_id = e.id    
        join company c on ep.company_id = c.company_id  
        join emails em on em.id = c.email_id  
       where employes_id = '04ba090a-0700-49a5-a6b1-d0b3c29097d5';
 

---coustumer
      
DROP TABLE IF EXISTS customers;
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
 INSERT INTO customers(customers_name,employ_id,car_id,company_id)
 VALUES('apple23',' 04ba090a-0700-49a5-a6b1-d0b3c29097d5','2238f614-d167-4872-9c00-07a7072cc09e','d9846b96-f4e8-4c6a-9720-0c393d5e769d');

SELECT * FROM customers;

company_title, company_email, car_title, employe_id -> tegishli -> user_email;

 select c.customers_name,c.company_name,e.title,cr.car_title,em.title as emply_user_emile_title from customers c 
        join cars cr on c.car_id = cr.car_id  
        join employes ep on c.employ_id = ep.employes_id    
        join users u on ep.user_id = u.id    
        join emiles em on u.email_id = em.id    
        join company cp on c.company_id = cp.company_id  
        join emails e on e.id = cp.email_id  
       where customers_id = 'a2ab6a090a-0700-49a5-a6b1-d0b3c2909b5';
 





\d+ users
\d+ company  
\d+ fruits
\d+ courses
\d+ customers
\d+ employes
\d+ cars
\d+ animals

        

