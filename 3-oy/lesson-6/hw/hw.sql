CREATE DATABASE hwsix_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id VARCHAR UNIQUE NOT NULL default uuid_generate_v4(),
	username VARCHAR ( 50 ) NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	age INT NOT NULL
);


INSERT INTO users (username, password, email, age) VALUES('user', 'user', 'user@gmail.com', 56);
INSERT INTO users (username, password, email, age) VALUES('user', 'user2', 'user2@gmail.com', 32);
INSERT INTO users (username, password, email, age) VALUES('user', 'user3', 'user3@gmail.com', 32);
INSERT INTO users (username, password, email, age) VALUES('user', 'user4', 'user4@gmail.com', 32);
INSERT INTO users (username, password, email, age) VALUES('user', 'user5', 'user5@gmail.com', 33);
INSERT INTO users (username, password, email, age) VALUES('user6', 'user6', 'user6@gmail.com', 29);
INSERT INTO users (username, password, email, age) VALUES('user7', 'user7', 'user7@gmail.com', 27);
INSERT INTO users (username, password, email, age) VALUES('user8', 'user8', 'user8@gmail.com', 19);
INSERT INTO users (username, password, email, age) VALUES('user9', 'user9', 'user9@gmail.com', 45);
INSERT INTO users (username, password, email, age) VALUES('user10', 'user10', 'user10@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user11', 'user11', 'user11@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user12', 'user12', 'user12@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user13', 'user13', 'user13@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user14', 'user14', 'user14@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user15', 'user15', 'user15@gmail.com', 22);
INSERT INTO users (username, password, email, age) VALUES('user16', 'user16', 'user16@gmail.com', 22);
INSERT INTO users (username, password, email, age) VALUES('user17', 'user17', 'user17@gmail.com', 22);
INSERT INTO users (username, password, email, age) VALUES('user18', 'user18', 'user18@gmail.com', 22);
INSERT INTO users (username, password, email, age) VALUES('user19', 'user19', 'user19@gmail.com', 22);
INSERT INTO users (username, password, email, age) VALUES('user20', 'user20', 'user20@gmail.com', 22);
INSERT INTO users (username, password, email, age) VALUES('user21', 'user21', 'user21@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user22', 'user22', 'user22@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user23', 'user23', 'user23@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user24', 'user24', 'user24@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user25', 'user25', 'user25@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user26', 'user26', 'user26@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user27', 'user27', 'user27@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user28', 'user28', 'user28@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user29', 'user29', 'user29@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user30', 'user30', 'user30@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user31', 'user31', 'user31@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user32', 'user32', 'user32@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user33', 'user33', 'user33@gmail.com', 21);
INSERT INTO users (username, password, email, age) VALUES('user34', 'user34', 'user34@gmail.com', 21);
INSERT INTO users (username, password, email, age) VALUES('user35', 'user35', 'user35@gmail.com', 21);
INSERT INTO users (username, password, email, age) VALUES('user36', 'user36', 'user36@gmail.com', 21);
INSERT INTO users (username, password, email, age) VALUES('user37', 'user37', 'user37@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user38', 'user38', 'user38@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user39', 'user39', 'user39@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user40', 'user40', 'user40@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user41', 'user41', 'user41@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user42', 'user42', 'user42@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user43', 'user43', 'user43@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user44', 'user44', 'user44@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user45', 'user45', 'user45@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user46', 'user46', 'user46@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user47', 'user47', 'user47@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user48', 'user48', 'user48@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user49', 'user49', 'user49@gmail.com', 27);
INSERT INTO users (username, password, email, age) VALUES('user50', 'user50', 'user50@gmail.com', 27);
INSERT INTO users (username, password, email, age) VALUES('user51', 'user51', 'user51@gmail.com', 27);
INSERT INTO users (username, password, email, age) VALUES('user52', 'user52', 'user52@gmail.com', 27);
INSERT INTO users (username, password, email, age) VALUES('user53', 'user53', 'user53@gmail.com', 27);
INSERT INTO users (username, password, email, age) VALUES('user54', 'user54', 'user54@gmail.com', 27);
INSERT INTO users (username, password, email, age) VALUES('user55', 'user55', 'user55@gmail.com', 27);
INSERT INTO users (username, password, email, age) VALUES('user56', 'user56', 'user56@gmail.com', 27);
INSERT INTO users (username, password, email, age) VALUES('user57', 'user57', 'user57@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user58', 'user58', 'user58@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user59', 'user59', 'user59@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user60', 'user60', 'user60@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user61', 'user61', 'user61@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user62', 'user62', 'user62@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user63', 'user63', 'user63@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user64', 'user64', 'user64@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user65', 'user65', 'user65@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user66', 'user66', 'user66@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user67', 'user67', 'user67@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user68', 'user68', 'user68@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user69', 'user69', 'user69@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user70', 'user70', 'user70@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user71', 'user71', 'user71@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user72', 'user72', 'user72@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user73', 'user73', 'user73@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user74', 'user74', 'user74@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user75', 'user75', 'user75@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user76', 'user76', 'user76@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user77', 'user77', 'user77@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user78', 'user78', 'user78@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user79', 'user79', 'user79@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user80', 'user80', 'user80@gmail.com', 20);
INSERT INTO users (username, password, email, age) VALUES('user81', 'user81', 'user81@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user82', 'user82', 'user82@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user83', 'user83', 'user83@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user84', 'user84', 'user84@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user85', 'user85', 'user85@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user86', 'user86', 'user86@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user87', 'user87', 'user87@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user88', 'user88', 'user88@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user89', 'user89', 'user89@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user90', 'user90', 'user90@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user91', 'user91', 'user91@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user92', 'user92', 'user92@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user93', 'user93', 'user93@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user94', 'user94', 'user94@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user95', 'user95', 'user95@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user96', 'user96', 'user96@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user97', 'user97', 'user97@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user98', 'user98', 'user98@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user99', 'user99', 'user99@gmail.com', 23);
INSERT INTO users (username, password, email, age) VALUES('user100', 'user100', 'user100@gmail.com', 26);
INSERT INTO users (username, password, email, age) VALUES('user100d', 'user10d0', 'user1030@gmail.com', 59);


select email from users where age between 20 and 30;
select sum(age) from users where age between 20 and 30;
select sum(age),min(age),max(age),count(age) from users where age between 0 and 40;
select username from users where username ilike 'u%';
select age from users where exists (
    select username from users where username ilike 'u%' AND age>50
);
select username,email,age from users where age>20;

select course_id, course_title, course_id, course_title,u.user_name from courses c
  join users u on c.created_by_user_id = u.id 
where course_title='react';

select course_id, course_title, course_id, course_title,u.user_name from courses c
  join users u on c.created_by_user_id = u.id 
where course_title='nodejs';

select * from users u
  join courses c  on u.id = c.course_id 
where id='2f4fe68c-869c-40ca-bd67-143b76651946';