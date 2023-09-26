export declare class CourseRepository {
    private readonly knexConfig;
    getCourses(user_id: any): any;
    createCourse(course: any, user_id: any): any;
    getOne(course: any, user_id: any): any;
    deleteCourse(course: any, user_id: any): any;
    updateCourse(course: any, updateCourse: any, user_id: any): any;
}
