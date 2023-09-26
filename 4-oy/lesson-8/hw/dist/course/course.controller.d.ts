import { CourseService } from './course.service';
interface ICourse {
    title: string;
    price: string;
}
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    getCourses(user: any): Promise<any>;
    getCourse(course: any, user: any): Promise<any>;
    createCourse(course: ICourse, user: any): Promise<{
        msg: string;
    }>;
    deleteCourse(course: any, user: any): Promise<{
        msg: string;
    }>;
    updateCourse(course: any, updatedCourse: any, user: any): Promise<{
        msg: string;
    }>;
}
export {};
