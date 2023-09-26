import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';


interface ICourse{
    title: string;
    price: string
}
@Controller('course')
export class CourseController {
    constructor(
        private courseService: CourseService
    ){}

    @Get()
    async getCourses(){
      return await this.courseService.getCourses()
    }

    @Post("/create")
    async createCourse(
        @Body() course:ICourse
    ){
        
      return await this.courseService.createCourse(course)
    }

    @Delete("/:id")
    async deleteCourse(
        @Param() course
    ){
       return await this.courseService.deleteCourse(course.id)       
    }


    @Put("/:id")
    async updateCourse(
        @Param() course_id,
        @Body() updatedCourse
    ){
      return await  this.courseService.updateCourse(course_id, updatedCourse)   
    }

}
