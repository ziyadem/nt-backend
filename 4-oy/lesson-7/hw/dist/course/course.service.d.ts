import { CourseRepository } from './course.repo';
export declare class CourseService {
    private courseRepository;
    constructor(courseRepository: CourseRepository);
    getCourses(): Promise<any>;
    getCourse(course: any): Promise<any>;
    createCourse(course: any): Promise<{
        msg: string;
    }>;
    deleteCourse(course: any): Promise<{
        msg: string;
    }>;
    updateCourse(course: any, updateCourse: any): Promise<{
        msg: string;
    }>;
}
