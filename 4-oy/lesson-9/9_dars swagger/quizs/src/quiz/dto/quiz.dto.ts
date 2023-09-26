import { IsNumber, IsString } from "class-validator";
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger";
import { IQuiz } from "../interface/quiz.interface";


export class CurrentUserDto{
    @ApiProperty({
        type: String
    })
    @IsString()
    id: string;
}

 export class QuizDto implements IQuiz {
    @ApiProperty({
        type: String,
        default: '3edeb21b-f505-4b8e-95b9-ae6c4cdb70fb'
    })
    id: string;
    @ApiProperty({
        type: String,
        default: 'O`zbekiston poytaxti qayer?'
    })
    question: string;
    @ApiProperty({
        type: String,
        default: 'Qarshi'
    })
    var_one: string;
    @ApiProperty({
        type: String,
        default: 'Toshkent'
    })
    var_two: string;
    @ApiProperty({
        type: String,
        default: 'Navoiy'
    })
    var_three: string;
    @ApiProperty({
        type: String,
        default: 'Andijon'
    })
    var_four: string;
    @ApiProperty({
        type: String,
        default: 'Toshkent',
        required: true
    })
    @IsString()
    answer: string;
  
     
}

export class CreateOrUpdateQuizDto extends OmitType(QuizDto, ['id']){}
export class QuizIdDto extends PickType(QuizDto, ['id']){}