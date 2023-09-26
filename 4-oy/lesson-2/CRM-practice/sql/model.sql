CREATE DATABASE IF NOT EXISTS `CRM`
\c CRM


CREATE TABLE "davomat"(
    "id" SERIAL NOT NULL PRIMARY KEY ,
    "student_id" INT NOT NULL,
    "group_id" INT NOT NULL,
    "date" TIMESTAMP  DEFAULT CURRENT_DATE,
    "davomat" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "admin"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);


CREATE TABLE "grupa"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "group_title" VARCHAR(64) NOT NULL,
    "day_lesson" VARCHAR(32) NOT NULL,
    "time_lesson" VARCHAR(32) NOT NULL,
    "teacher_id" INT ,
    CONSTRAINT group_teacher
    FOREIGN KEY(teacher_id) 
	REFERENCES teachers(id),
    "course_id" INT,
    CONSTRAINT group_course
    FOREIGN KEY(course_id) 
	REFERENCES course(id)
);

CREATE TABLE "student"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "student_name" VARCHAR(32) NOT NULL,
    "parents_name" VARCHAR(32) NOT NULL,
    "yonalish" VARCHAR(32) NOT NULL,
    "student_tel_nomer" VARCHAR(32) NOT NULL,
    "parents_tel_name" VARCHAR(32) NOT NULL,
    "student_img" VARCHAR(255) NOT NULL,
    "student_surname" VARCHAR(255) NOT NULL,
    "group_id" INT FOREIGN KEY("group_id") REFERENCES "grupa"("id")
);

DROP TABLE if EXISTS course;
CREATE TABLE "course"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "course_title" VARCHAR(50) UNIQUE NOT NULL,
    "time" TIMESTAMP  DEFAULT CURRENT_DATE
);


CREATE TABLE "delete_student"(
    "id" SERIAL NOT NULL PRIMARY KEY, 
    "student_name" VARCHAR(32) NOT NULL,
    "yonalish" VARCHAR(32) NOT NULL,
    "student_tel_nomer"  VARCHAR(32) NOT NULL,
    "parents_tel_nomer"  VARCHAR(32) NOT NULL,
    "date" TIMESTAMP  DEFAULT CURRENT_DATE
);

CREATE TABLE "teachers"(
    "id" SERIAL NOT NULL PRIMARY KEY, 
    "teacher_name" VARCHAR(32) NOT NULL,
    "teacher_surname" VARCHAR(32) NOT NULL,
    "teacher_tell" VARCHAR(32) NOT NULL,
    "teacher_img" VARCHAR(32) NOT NULL
);

CREATE TABLE "to'lov"(
    "id" SERIAL NOT NULL PRIMARY KEY, 
    "student_id" VARCHAR(32) NOT NULL,
    "to'lov" BOOLEAN DEFAULT FALSE,
    "date" TIMESTAMP  DEFAULT CURRENT_DATE
);
