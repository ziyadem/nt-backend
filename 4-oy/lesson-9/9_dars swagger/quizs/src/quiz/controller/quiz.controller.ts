import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { QuizService } from '../service/quiz.service';
import { AuthorizationGuard } from 'src/auth/guard/auth.guard';
import { CurrentUser } from 'src/auth/getUserDecorator';
import { CreateOrUpdateQuizDto, CurrentUserDto, QuizIdDto } from '../dto/quiz.dto';
import { ApiBasicAuth, ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('quizs')
@Controller('quizs')
@UseGuards(AuthorizationGuard)
export class QuizController {
    constructor(
        private quizService: QuizService
    ){}

    @Get("/list")
    async getQuizs(
        @CurrentUser() user: CurrentUserDto
    ){
        
      let quizs = await this.quizService.getQuizs(user)
      return quizs        
    }

    @Post("/create")
    async createQuiz(@Body() quiz:CreateOrUpdateQuizDto, @CurrentUser() user: CurrentUserDto ){
        return await this.quizService.createQuiz(quiz, user);
    }


    @Get("/:id")
    async getQuiz(
        @Param() quiz:QuizIdDto
    ){
        return await this.quizService.getQuiz(quiz);
    }

    @Put("/update/:id")
    async updateQuiz(
        @Param() quiz:QuizIdDto,
        @Body() updatedQuiz: CreateOrUpdateQuizDto,
        @CurrentUser() user: CurrentUserDto
    ){        
        return await this.quizService.updateQuiz(quiz, updatedQuiz, user)
    }

    @Delete("/delete/:id")
    async deleteQuiz(
        @Param() quiz: QuizIdDto,
        @CurrentUser() user: CurrentUserDto
    ){
      return await  this.quizService.deleteQuiz(quiz, user)
    }
}


