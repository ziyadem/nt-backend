import { CourseRepository } from './course.repo';
export declare class CourseService {
    private courseRepository;
    constructor(courseRepository: CourseRepository);
    getCourses(user: any): Promise<any>;
    getCourse(course: any, { user_id }: {
        user_id: any;
    }): Promise<any>;
    createCourse(course: any, user: any): Promise<{
        msg: string;
    }>;
    deleteCourse(course: any, { user_id }: {
        user_id: any;
    }): Promise<{
        msg: string;
    }>;
    updateCourse(course: any, updateCourse: any, { user_id }: {
        user_id: any;
    }): Promise<{
        msg: string;
    }>;
}
