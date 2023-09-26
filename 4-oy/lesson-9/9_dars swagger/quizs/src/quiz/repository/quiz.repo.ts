import { Inject, Injectable } from '@nestjs/common';
import { KnexConfig } from 'src/knex-config/knexConfig';
import { CreateOrUpdateQuizDto, CurrentUserDto } from '../dto/quiz.dto';


@Injectable()
export class QuizRepository {
    @Inject()
    private readonly knexConfig: KnexConfig;


    createQuiz(quiz: CreateOrUpdateQuizDto, user: CurrentUserDto) {
        const knex = this.knexConfig.instance;
        const { question, var_one, var_two, var_three, var_four, answer } = quiz
        return knex('quizs').insert({ question, var_one, var_two, var_three, var_four, answer, created_by: user?.id })
    }


    getQuizs(user: CurrentUserDto) {
        const knex = this.knexConfig.instance;
        const quizList = knex.select().from('quizs').where({ created_by: user.id });
        return quizList
    }

    getQuiz(quiz) {
        const { id } = quiz;
        const knex = this.knexConfig.instance;
        const getQuiz = knex.select().from('quizs').where({ id });
        return getQuiz;
    }

    deleteQuiz(quiz) {
        const { id } = quiz;
        const knex = this.knexConfig.instance;
       return knex('quizs').where({ id }).del()
    }

    updateQuiz(quiz, updatedQuiz, user) {

        const { id } = quiz;


        const knex = this.knexConfig.instance;
        return knex('quizs')
            .where({ id })
            .update(updatedQuiz)
    }

}