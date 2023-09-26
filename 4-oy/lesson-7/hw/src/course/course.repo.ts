import { Inject } from '@nestjs/common';
import { KnexConfig } from '../KnexConfig/knexConfig';


const courses = []
export class CourseRepository {

   @Inject()
   private readonly knexConfig: KnexConfig;

    getCourses(){
         const knex = this.knexConfig.instance;
        return knex.select("*").from("courses")
    }

    createCourse(course){
        const knex = this.knexConfig.instance;
      const { title, price, descript } = course;

        return knex("courses")
               .insert({ title, price, descript, created_by: '2d96931d-05ff-4923-9f5b-03feaad81ac8'})
    }


    getOne(course){
        const knex = this.knexConfig.instance;

        const { id } = course;
        return knex.select("*").from("courses").where({ id })

    }

    deleteCourse(course){
        const knex = this.knexConfig.instance;
        const { id:course_id } = course;
        return knex('courses').returning('*')
         .where('id', course_id)
        // .where({ id: course_id })
        .del()

    }

    updateCourse(course, updateCourse){

        const knex = this.knexConfig.instance;

        return knex('courses').returning('*')
        .where({ id: course.id })
        .update(updateCourse)

    }

}
