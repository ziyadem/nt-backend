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

    async createCourse(course){
        console.log(course, 'service...');
        
        let newCourse =  this.courseRepository.createCourse(course)

        return {
            msg: 'Create course'
        }
    }

    async deleteCourse(course_id){
       let foundedCourse = this.courseRepository.getOne(course_id)

       console.log(course_id);
       console.log(foundedCourse);
       
       

       if(!foundedCourse){
        return { msg: 'Course topilmadi' }
       }
        this.courseRepository.deleteCourse(course_id)
        return {
            msg: 'Course deleted!'
        }

    }

    async updateCourse(course, updateCourse){
        

       let foundedCourse = this.courseRepository.getOne(course.id)
       console.log(foundedCourse);
       
       if(!foundedCourse){
        return {
            msg: 'Course not found!'
        }
       }

      let res = this.courseRepository.updateCourse(course.id, updateCourse)

      return {
        msg: 'Course updated!'
      }

    }
}
