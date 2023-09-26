"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_1 = __importDefault(require("./routes/auth.router"));
const teacher_router_1 = __importDefault(require("./routes/teacher.router"));
const fruit_router_1 = __importDefault(require("./routes/fruit.router"));
const animal_router_1 = __importDefault(require("./routes/animal.router"));
const car_router_1 = __importDefault(require("./routes/car.router"));
const course_router_1 = __importDefault(require("./routes/course.router"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use("/auth", auth_router_1.default);
app.use("/teacher", teacher_router_1.default);
app.use("/fruit", fruit_router_1.default);
app.use("/animal", animal_router_1.default);
app.use("/car", car_router_1.default);
app.use("/course", course_router_1.default);
app.listen(3000);
console.log('Server on port', 3000);
