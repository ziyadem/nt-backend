import { Gender } from "../enums"

export declare interface UserCreateRequest{
    username: string
    password: string
    gender:Gender
    email: string
}

