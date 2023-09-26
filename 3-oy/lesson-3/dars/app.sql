CREATE DATABASE PRODUCT_DB;
CREATE TABLE product(
           product_id SERIAL NOT NULL,
           product_title VARCHAR ( 50 ) UNIQUE NOT NULL,
           product_description TEXT NOT NULL,
           product_image TEXT DEFAULT NULL ,
           product_price INTEGER NOT NULL,
           product_by_user_id VARCHAR( 50 )  NOT NULL           
);
INSERT INTO product(product_title, product_description, product_price, product_by_user_id)
VALUES('ring3','diamond', 200, '1'),
('ring4','diamond', 200, '1');

SELECT * FROM product;