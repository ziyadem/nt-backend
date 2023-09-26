"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("./router/auth");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(auth_1.router);
app.listen(9000, () => console.log(9000));
