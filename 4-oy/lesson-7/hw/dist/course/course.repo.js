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
exports.CourseRepository = void 0;
const common_1 = require("@nestjs/common");
const knexConfig_1 = require("../KnexConfig/knexConfig");
const courses = [];
class CourseRepository {
    getCourses() {
        const knex = this.knexConfig.instance;
        return knex.select("*").from("courses");
    }
    createCourse(course) {
        const knex = this.knexConfig.instance;
        const { title, price, descript } = course;
        return knex("courses")
            .insert({ title, price, descript, created_by: '2d96931d-05ff-4923-9f5b-03feaad81ac8' });
    }
    getOne(course) {
        const knex = this.knexConfig.instance;
        const { id } = course;
        return knex.select("*").from("courses").where({ id });
    }
    deleteCourse(course) {
        const knex = this.knexConfig.instance;
        const { id: course_id } = course;
        return knex('courses').returning('*')
            .where('id', course_id)
            .del();
    }
    updateCourse(course, updateCourse) {
        const knex = this.knexConfig.instance;
        return knex('courses').returning('*')
            .where({ id: course.id })
            .update(updateCourse);
    }
}
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", knexConfig_1.KnexConfig)
], CourseRepository.prototype, "knexConfig", void 0);
exports.CourseRepository = CourseRepository;
//# sourceMappingURL=course.repo.js.map