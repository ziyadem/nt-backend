import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from './course.repo';

@Injectable()
export class CourseService {
    constructor(
        private courseRepository: CourseRepository
    ){}


    async getCourses(user){
        const { user_id } = user;
       return this.courseRepository.getCourses(user_id)
    }

    async getCourse(course, { user_id }){
        let res = await this.courseRepository.getOne(course, user_id)
        if(res.length == 0) return new NotFoundException(`Course ${course.id} not found!`)

        return res
     }

    async createCourse(course, user){

        const { user_id } = user;
        let newCourse =  await this.courseRepository.createCourse(course, user_id)
        return {
            msg: 'Create course'
        }
    }

    async deleteCourse(course, { user_id }){
        let res = await this.courseRepository.deleteCourse(course, user_id)
            if(res.length == 0){
                 return { msg: 'Course topilmadi' }
             }
        
        return {
            msg: 'Course deleted!'
        }

    }

    async updateCourse(course, updateCourse, { user_id }){
       let result = await this.courseRepository.updateCourse(course, updateCourse, user_id)
       
       if(result.length == 0){
        return {
            msg: 'Cours not found!'
        }
       }


      return {
        msg: 'Course updated!'
      }

    }
}
