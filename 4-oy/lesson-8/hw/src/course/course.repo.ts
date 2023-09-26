import { Inject } from '@nestjs/common';
import { KnexConfig } from '../KnexConfig/knexConfig';


const courses = []
export class CourseRepository {

   @Inject()
   private readonly knexConfig: KnexConfig;

   getCourses(user_id){
         const knex = this.knexConfig.instance;
        return knex.select("*").from("courses").where({ created_by: user_id })
    }

    createCourse(course, user_id){
        const knex = this.knexConfig.instance;
      const { title, price, descript } = course;

        return knex("courses")
               .insert({ title, price, descript, created_by: user_id})
    }


    getOne(course, user_id){
        const knex = this.knexConfig.instance;

        const { id } = course;
        return knex.select("*").from("courses").where({  created_by: user_id,  id })

    }


    deleteCourse(course, user_id){
        const knex = this.knexConfig.instance;
        const { id:course_id } = course;
        return knex('courses').returning('*')
        //  .where('id', course_id)
        .where({ created_by: user_id,  id: course_id })
        .del()

    }

    updateCourse(course, updateCourse, user_id){

        const knex = this.knexConfig.instance;

        return knex('courses').returning('*')
        .where({ created_by: user_id,  id: course.id })
        .update(updateCourse)

    }

}
