"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const course_repo_1 = require("./course.repo");
let CourseService = class CourseService {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async getCourses(user) {
        const { user_id } = user;
        return this.courseRepository.getCourses(user_id);
    }
    async getCourse(course, { user_id }) {
        let res = await this.courseRepository.getOne(course, user_id);
        if (res.length == 0)
            return new common_1.NotFoundException(`Course ${course.id} not found!`);
        return res;
    }
    async createCourse(course, user) {
        const { user_id } = user;
        let newCourse = await this.courseRepository.createCourse(course, user_id);
        return {
            msg: 'Create course'
        };
    }
    async deleteCourse(course, { user_id }) {
        let res = await this.courseRepository.deleteCourse(course, user_id);
        if (res.length == 0) {
            return { msg: 'Course topilmadi' };
        }
        return {
            msg: 'Course deleted!'
        };
    }
    async updateCourse(course, updateCourse, { user_id }) {
        let result = await this.courseRepository.updateCourse(course, updateCourse, user_id);
        if (result.length == 0) {
            return {
                msg: 'Cours not found!'
            };
        }
        return {
            msg: 'Course updated!'
        };
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [course_repo_1.CourseRepository])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map