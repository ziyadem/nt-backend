import { Injectable } from '@nestjs/common';
import { QuizRepository } from '../repository/quiz.repo';
import { IUser } from 'src/auth/interface/auth.interface';
import { CreateOrUpdateQuizDto, CurrentUserDto } from '../dto/quiz.dto';

@Injectable()
export class QuizService {
    constructor(
        private quizRepository: QuizRepository
    ){

    }
    async getQuizs(user: CurrentUserDto){
       return await this.quizRepository.getQuizs(user)
    }

    async createQuiz(quiz: CreateOrUpdateQuizDto, user: CurrentUserDto){
        await this.quizRepository.createQuiz(quiz, user);
        return {
            msg: 'Create quiz!'
        }
    }

    async getQuiz(quiz){
       return await this.quizRepository.getQuiz(quiz);
    }

    async deleteQuiz(quiz, user){
        let getOne = await this.quizRepository.getQuiz(quiz);
        if(!getOne[0]){
         return {
             msg: 'Quiz not found!'
         }
        }
         await this.quizRepository.deleteQuiz(quiz);

         return {
            msg: 'Quiz deleted!'
         }
    }

    async updateQuiz(quiz, updatedQuiz, user){
       let getOne = await this.quizRepository.getQuiz(quiz);
       if(!getOne[0]){
        return {
            msg: 'Quiz not found!'
        }
       }

        await this.quizRepository.updateQuiz(quiz, updatedQuiz, user)
        return {
            msg: 'Quiz updated!'
        }
    }
}
