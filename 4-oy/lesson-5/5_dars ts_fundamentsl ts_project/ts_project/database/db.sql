CREATE DATABASE ts_learn;

\l

\c ts_learn;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('Anvar', 'anvar@ibm.com'),
    ('Sarvar', 'sarvar@faztweb.com');

select * from users;