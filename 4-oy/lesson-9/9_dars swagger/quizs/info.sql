https://docs.nestjs.com/exception-filters

CREATE EXTENSION pgcrypto;
SELECT gen_random_uuid();


DROP DATABASE IF EXISTS nestjs_n2;
CREATE DATABASE nestjs_n2;


DROP TABLE IF EXISTS users;
CREATE TABLE users(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     username VARCHAR(50) NOT NULL,
     user_email VARCHAR(50) UNIQUE NOT NULL,
     user_role VARCHAR(6) NOT NULL DEFAULT 'user',
     user_password VARCHAR NOT NULL
);

INSERT INTO users( username,  user_email, user_role, user_password) VALUES('ziyadem1', 'ziyadem1@gmail.com', 'admin', 'user1234');
INSERT INTO users( username,  user_email, user_role, user_password) VALUES('ziyadem2', 'ziyadem2@gmail.com', 'admin', 'user1234');


DROP TABLE IF EXISTS quizs;
CREATE TABLE quizs(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     question VARCHAR NOT NULL,
     var_one VARCHAR NOT NULL,
     var_two VARCHAR NOT NULL,
     var_three VARCHAR NOT NULL,
     var_four VARCHAR NOT NULL,
     answer VARCHAR NOT NULL,
     created_at DATE DEFAULT now(),
     created_by VARCHAR(50) NOT NULL,
     CONSTRAINT fk_created_by
       FOREIGN KEY(created_by) 
	  REFERENCES users(id)
);

DROP TABLE IF EXISTS test_result;
CREATE TABLE test_result(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     user_id VARCHAR(50) NOT NULL,
     quiz_id VARCHAR(50) NOT NULL,
     CONSTRAINT fk_quiz_id
       FOREIGN KEY(quiz_id) 
	  REFERENCES quizs(id),
     is_result BOOLEAN NOT NULL,
     created_at DATE DEFAULT now(),
     CONSTRAINT fk_user_id
       FOREIGN KEY(user_id) 
	  REFERENCES users(id)
);



DROP TABLE IF EXISTS user_session;
CREATE TABLE user_session(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     user_id VARCHAR(50) NOT NULL,
     start_at DATE DEFAULT now(),
     end_at DATE,
     CONSTRAINT fk_user_id
       FOREIGN KEY(user_id) 
	  REFERENCES users(id)
);
















-- class-validation
-- dto -> data transfer object

