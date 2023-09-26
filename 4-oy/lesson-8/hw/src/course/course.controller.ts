import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CurrentUser } from 'src/auth/userInfo/getUserDecorator';


interface ICourse{
    title: string;
    price: string
}
@Controller('course')
@UseGuards(AuthGuard)
export class CourseController {
    constructor(private courseService: CourseService){}

    @Get()
    async getCourses(
      @CurrentUser() user
    ){
      return await this.courseService.getCourses(user)
    }

    @Get("/:id")
    async getCourse(
        @Param() course,
        @CurrentUser() user

    ){
      return await this.courseService.getCourse(course, user)
    }


    @Post("/create")
    async createCourse(
        @Body() course:ICourse,
        @CurrentUser() user
    ){   
        
      return await this.courseService.createCourse(course, user)
    }

    @Delete("/:id")
    async deleteCourse(
        @Param() course,
        @CurrentUser() user
    ){
       return await this.courseService.deleteCourse(course, user)       
    }


    @Put("/:id")
    async updateCourse(
        @Param() course,
        @Body() updatedCourse,
        @CurrentUser() user

    ){
      return await  this.courseService.updateCourse(course, updatedCourse, user)   
    }
}
