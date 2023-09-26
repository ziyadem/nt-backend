"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const postgres_1 = require("../utils/postgres");
const LOGIN = `SELECT * FROM ADMIN WHERE username = $1 AND password = $2`;
const loginUser = (...params) => (0, postgres_1.fetchData)(LOGIN, params);
exports.loginUser = loginUser;
