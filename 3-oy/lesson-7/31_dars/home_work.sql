 ---cars----
 
 DROP TABLE IF EXISTS cars;
 CREATE TABLE cars(
    ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL,
    price  INT    NOT NULL,
    action_type varchar not null      
 );
 --delete
 CREATE TABLE deleteCars(
    ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL,
    price   INT    NOT NULL,
    action_type varchar not null  
 );
 
create or replace function deleteCarsFunc()
returns trigger
as $example_table$
   BEGIN
      INSERT into deleteCars(ID, title,color,price,action_type) values (old.ID, old.title,old.color,old.price,old.action_type);
      return old;
   END
$example_table$ LANGUAGE plpgsql;

create trigger deletecarsTriger after delete on cars
for each row execute procedure deleteCarsFunc();

insert into cars(ID,title,color,price, action_type)
values (1,'malibu','black',200,'a_c'),
 (2,'malibu2','black',220,'a_c2');

 delete from cars where id=1;

 --create
  CREATE TABLE createCars(
    ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL,
    price   INT    NOT NULL,
    action_type varchar not null  
 );

 create or replace function createCarsFunc()
returns TRIGGER
as $example_table$
    BEGIN
      INSERT into createCars(ID, title,color,price,action_type) values (new.ID, new.title,new.color,new.price,new.action_type);
      return new;
   END
$example_table$ LANGUAGE plpgsql;

create TRIGGER insert_trigger AFTER insert on cars for each row execute procedure createCarsFunc();
 
insert into cars(ID,title,color,price, action_type)
values (3,'malibu3','black',230,'a_c3');

--update

create table updateCars(
   ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL,
    price   INT    NOT NULL,
    action_type varchar not null 
);

create or replace function updateCarsfunc()
returns TRIGGER
as $update_cars$
   BEGIN
   insert into updateCars(
      ID,title,color,price, action_type
   ) VALUES (old.id,new.title,new.color,new.price,new.action_type);
   return new;
end;
$update_cars$ LANGUAGE plpgsql;

 create TRIGGER update_trigger after update on cars 
 for each row execute procedure updateCarsfunc();

 UPDATE cars
 SET price = 333
 WHERE id = 2;




 ---course----
 
 DROP TABLE IF EXISTS course;
 CREATE TABLE course(
    ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    teacher  VARCHAR    NOT NULL,
    price  INT    NOT NULL      
 );
 --delete
 CREATE TABLE deleteCourse(
    ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    teacher  VARCHAR    NOT NULL,
    price  INT    NOT NULL      
 );
 
create or replace function deleteCourseFunc()
returns trigger
as $example_table$
   BEGIN
      INSERT into deleteCourse(ID, title,teacher,price) values (old.ID, old.title, old.teacher,old.price);
      return old;
   END
$example_table$ LANGUAGE plpgsql;

create trigger deleteCourseTriger after delete on course
for each row execute procedure deleteCourseFunc();

insert into course(ID, title,teacher,price)
values (1,'node.js','jorabek',800);

 delete from course where ID=1;

 --create
  CREATE TABLE createCourse(
   ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    teacher  VARCHAR    NOT NULL,
    price  INT    NOT NULL 
 );

 create or replace function createCourseFunc()
returns TRIGGER
as $example_table$
    BEGIN
      INSERT into createCourse(ID, title,teacher,price) values (new.ID, new.title,new.teacher,new.price);
      return new;
   END
$example_table$ LANGUAGE plpgsql;

create TRIGGER insert_trigger AFTER insert on course for each row execute procedure createCourseFunc();

insert into course(ID, title,teacher,price)
values (4,'react.js','alishserjon',900);
 


--update

create table updateCourse(
    ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    teacher  VARCHAR    NOT NULL,
    price  INT    NOT NULL 
);

create or replace function updateCoursefunc()
returns TRIGGER
as $update_cars$
   BEGIN
   insert into updateCourse(
      ID,title,teacher,price
   ) VALUES (old.id,new.title,new.teacher,new.price);
   return new;
end;
$update_cars$ LANGUAGE plpgsql;

 create TRIGGER update_trigger after update on course 
 for each row execute procedure updateCoursefunc();

 UPDATE course
 SET price = 333
 WHERE id = 4;



 ---animals----
 
 DROP TABLE IF EXISTS animals;
 CREATE TABLE animals(
    ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL      
 );
 --delete
 CREATE TABLE deleteAnimals(
     ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL       
 );
 
create or replace function deleteAnimalsFunc()
returns trigger
as $example_table$
   BEGIN
      INSERT into deleteAnimals(ID, title,color) values (old.ID, old.title, old.color);
      return old;
   END
$example_table$ LANGUAGE plpgsql;

create trigger deleteCourseTriger after delete on animals
for each row execute procedure deleteAnimalsFunc();

insert into animals(ID, title,color)
values (1,'sheep','black');
insert into animals(ID, title,color)
values (2,'sheep2','black');

 delete from animals where ID=1;

 --create
  CREATE TABLE createAnimals(
   ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL
 );

 create or replace function createAnimalsFunc()
returns TRIGGER
as $example_table$
    BEGIN
      INSERT into createAnimals(ID, title,color) values (new.ID, new.title,new.color);
      return new;
   END
$example_table$ LANGUAGE plpgsql;

create TRIGGER insert_trigger AFTER insert on animals for each row execute procedure createAnimalsFunc();

insert into animals(ID, title,color)
values (1,'cat','black');
 


--update

create table updateAnimals(
    ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL 
);

create or replace function updateAnimalsfunc()
returns TRIGGER
as $update_cars$
   BEGIN
   insert into updateAnimals(
      ID,title,color
   ) VALUES (old.id,new.title,new.color);
   return new;
end;
$update_cars$ LANGUAGE plpgsql;

 create TRIGGER update_trigger after update on animals 
 for each row execute procedure updateAnimalsfunc();

 UPDATE animals
 SET price = 335
 WHERE id = 2;


 ---fruit----
 
C

 --create
  CREATE TABLE createAnimals(
   ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL
 );

 create or replace function createAnimalsFunc()
returns TRIGGER
as $example_table$
    BEGIN
      INSERT into createAnimals(ID, title,color) values (new.ID, new.title,new.color);
      return new;
   END
$example_table$ LANGUAGE plpgsql;

create TRIGGER insert_trigger AFTER insert on animals for each row execute procedure createAnimalsFunc();

insert into animals(ID, title,color)
values (id=12,'cat','black');
 


--update

create table updateFruit(
    ID INT PRIMARY KEY     NOT NULL,
    title  VARCHAR    NOT NULL,
    color  VARCHAR    NOT NULL 
);

create or replace function updateFruitfunc()
returns TRIGGER
as $update_cars$
   BEGIN
   insert into updateFruit(
      ID,title,color
   ) VALUES (old.id,new.title,new.color);
   return new;
end;
$update_cars$ LANGUAGE plpgsql;

 create TRIGGER update_trigger after update on fruit 
 for each row execute procedure updateFruitfunc();

 UPDATE fruit
 SET price = 335
 WHERE id = 1;




course   
cars 
animals
fruits
        

        copy_info table -> CRUD trigger pocedura

