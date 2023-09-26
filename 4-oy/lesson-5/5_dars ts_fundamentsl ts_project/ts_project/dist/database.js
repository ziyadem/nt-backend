"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.default = new pg_1.Pool({
    host: "localhost",
    user: "postgres",
    password: "1997",
    database: "ts_express",
    port: 5432,
});
