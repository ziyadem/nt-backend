-- JOIN TYPES
    --   https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/

-- POSTGRESQL FUNDAMENTALS
    --  https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/

-- PostgreSQL Aggregate Functions
--     https://www.postgresqltutorial.com/postgresql-aggregate-functions/



--  aggrigation functions
select 
    count(user_id),
    max(age),
    min(age),
    sum(age),
    avg(age),
    ARRAY_AGG (
        username || ' ' || email
        order by
         username
    ) user_info
  from users where age = 45;




  limit 10 ofset 0
  limit 10 ofset 10 * 1
  limit 10 ofset 10 * 2


  DROP TABLE IF EXISTS t1;
CREATE TABLE t1(
	title VARCHAR NOT NULL,
	release_year SMALLINT
);

INSERT INTO 
   t1(title,release_year)
VALUES
   ('The Shawshank Redemption',1994),
   ('The Godfather',1972),
   ('12 Angry Men',1957);


DROP TABLE IF EXISTS t2;
CREATE TABLE t2(
	title VARCHAR NOT NULL,
	release_year SMALLINT
);

INSERT INTO 
   t2(title,release_year)
VALUES
   ('An American Pickle',2020),
   ('The Godfather',1972),
   ('Greyhound',2020);


-- subquery
select user_id from users where username like 'user1%';

select * from users where user_id in(
    select user_id from users where username in(
        select username from users where age between 10 and 20
    )
);


-- exist
select * from users where exists (
    select * from users where user_id = 2300
);

select * from users where true;




-- SEQUENCE
CREATE SEQUENCE test2
INCREMENT 5
START 1;
SELECT nextval('test2');


-- o`rta arifmetik

1 ... 5 
 (1 + 2 + 3 + 4 + 5) / 5
 
 (1 * 2 * 3 * 4 * 5) / 5


