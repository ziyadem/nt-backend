import { Injectable } from '@nestjs/common';
import { CourseRepository } from './course.repo';

@Injectable()
export class CourseService {
    constructor(
        private courseRepository: CourseRepository
    ){}


    async getCourses(){
       return this.courseRepository.getCourses()
    }

    async getCourse(course){
        return this.courseRepository.getOne(course)
     }

    async createCourse(course){
        let newCourse =  await this.courseRepository.createCourse(course)
        return {
            msg: 'Create course'
        }
    }

    async deleteCourse(course){
        let res = await this.courseRepository.deleteCourse(course)
            if(res.length == 0){
                 return { msg: 'Course topilmadi' }
             }
        
        return {
            msg: 'Course deleted!'
        }

    }

    async updateCourse(course, updateCourse){
       let result = await this.courseRepository.updateCourse(course, updateCourse)
       
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
