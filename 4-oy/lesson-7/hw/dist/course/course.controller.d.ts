import { CourseService } from './course.service';
interface ICourse {
    title: string;
    price: string;
}
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    getCourses(): Promise<any>;
    getCourse(course: any): Promise<any>;
    createCourse(course: ICourse): Promise<{
        msg: string;
    }>;
    deleteCourse(course: any): Promise<{
        msg: string;
    }>;
    updateCourse(course: any, updatedCourse: any): Promise<{
        msg: string;
    }>;
}
export {};
