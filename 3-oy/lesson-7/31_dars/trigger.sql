
 DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    ID INT PRIMARY KEY     NOT NULL,
    USERNAME  VARCHAR    NOT NULL,
    AGE            INT     NOT NULL,
    EMAIL  VARCHAR NOT NULL
 );
 
 
 CREATE TABLE deletedUserLog(
    ID INT PRIMARY KEY     NOT NULL,
    USERNAME  VARCHAR    NOT NULL,
    AGE            INT     NOT NULL,
    EMAIL  VARCHAR NOT NULL
 );
 
 
 -- deleted users log 
 CREATE OR REPLACE FUNCTION deleteUserlogfunc() 
 RETURNS TRIGGER 
 AS $example_table$
    BEGIN
       INSERT INTO deletedUserLog(ID, USERNAME, AGE, EMAIL) VALUES (old.ID, old.USERNAME, old.AGE, old.EMAIL);
       RETURN old;
    END;
 $example_table$ LANGUAGE plpgsql;
 
 
    CREATE TRIGGER deleteUser_trigger AFTER DELETE ON users
    FOR EACH ROW EXECUTE PROCEDURE deleteUserlogfunc();
 
 INSERT INTO users (id, USERNAME,AGE,EMAIL)
 VALUES (1,'Paul', 32, 'California@gmail.com' );
 
 INSERT INTO users (id, USERNAME,AGE,EMAIL)
 VALUES (2,'John', 23, 'example@gmail.com' );
 
 delete from users where id = 1;
 
 
 
 
 
 
 -- created user log
 CREATE TABLE createdUserLog(
    ID INT PRIMARY KEY     NOT NULL,
    USERNAME  VARCHAR    NOT NULL,
    AGE            INT     NOT NULL,
    EMAIL  VARCHAR NOT NULL
 );
 
 CREATE OR REPLACE FUNCTION createdUserlogfunc() 
 RETURNS TRIGGER 
 AS $example_table$
    BEGIN
       INSERT INTO createdUserLog(ID, USERNAME, AGE, EMAIL) VALUES (new.ID, new.USERNAME, new.AGE, new.EMAIL);
       RETURN new;
    END;
 $example_table$ LANGUAGE plpgsql;
 
 
    CREATE TRIGGER insert_trigger AFTER INSERT ON users
    FOR EACH ROW EXECUTE PROCEDURE createdUserlogfunc();
 
 INSERT INTO users (id, USERNAME,AGE,EMAIL)
 VALUES (3,'Anvar', 32, 'anvar@gmail.com' );
 
 INSERT INTO users (id, USERNAME,AGE,EMAIL)
 VALUES (4,'John', 23, 'example@gmail.com' );
 
 
 
 
 -- updated user log
 CREATE TABLE updatedUserLog(
    ID INT PRIMARY KEY     NOT NULL,
    old_username  VARCHAR    NOT NULL,
    new_username  VARCHAR    NOT NULL,
    AGE            INT     NOT NULL,
    EMAIL  VARCHAR NOT NULL
 );
 
 CREATE OR REPLACE FUNCTION updatedUserlogfunc() 
 RETURNS TRIGGER 
 AS $update_user$
    BEGIN
       INSERT INTO updatedUserLog(ID, old_username, new_username, AGE, EMAIL) VALUES (old.ID, old.USERNAME, new.USERNAME, new.AGE, new.EMAIL);
       RETURN new;
    END;
 $update_user$ LANGUAGE plpgsql;
 
 
 CREATE TRIGGER updateD_trigger AFTER UPDATE ON users
 FOR EACH ROW EXECUTE PROCEDURE updatedUserlogfunc();
 
 INSERT INTO users (id, USERNAME,AGE,EMAIL)
 VALUES (5,'Anvar', 32, 'anvar@gmail.com' );
 
 INSERT INTO users (id, USERNAME,AGE,EMAIL)
 VALUES (6,'Sarvar', 21, 'example2@gmail.com' );
 
 
 UPDATE users
 SET USERNAME = 'Farrux' 
 WHERE id = 2;



 DELETE FROM users WHERE id = 1;


 drop trigger updateD_trigger on users;
 drop trigger update_trigger on users;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 SELECT tgname, relname FROM pg_trigger, 
    pg_class 
    WHERE tgrelid=pg_class.oid AND relname='COMPANY';
 
 
 DROP TRIGGER example_trigger;