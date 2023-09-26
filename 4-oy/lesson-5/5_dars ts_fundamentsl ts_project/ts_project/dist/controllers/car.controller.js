"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (user_token) => __awaiter(void 0, void 0, void 0, function* () {
    return yield jsonwebtoken_1.default.verify(user_token, "secret_key");
});
const getOne = (car_id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield database_1.default.query("SELECT * FROM cars WHERE id = $1", [car_id]);
    return response.rows[0];
});
exports.getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield verifyToken(req.headers.token);
        const response = yield database_1.default.query("SELECT * FROM cars WHERE created_by_user_id = $1", [user.user_id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
});
exports.getCarById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { car_id } = req.params;
        let user = yield verifyToken(req.headers.token);
        let response = yield database_1.default.query("SELECT * FROM cars WHERE id = $1 and created_by_user_id = $2", [car_id, user.user_id]);
        if (response.rows.length == 0) {
            res.status(404).json("cars not found");
        }
        return res.json(response.rows[0]);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, price, color } = req.body;
        let user = yield verifyToken(req.headers.token);
        const response = yield database_1.default.query(`INSERT INTO 
         cars (title,price,color,created_by_user_id) 
         VALUES ($1, $2, $3, $4)`, [title, price, color, user.user_id]);
        res.status(200).json({
            message: "cars Added successfully",
        });
    }
    catch (error) {
        res.status(400).json({
            message: "cars already exists",
        });
    }
});
exports.updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car_id = req.params.car_id;
        const { title, price, color } = req.body;
        let user = yield verifyToken(req.headers.token);
        let car = yield getOne(car_id);
        console.log(user.user_id);
        if (!car)
            return res.json({
                message: "cars not found!",
            });
        let { rowCount } = yield database_1.default.query(` update 
      cars 
      set 
      title = COALESCE($1,title), 
      color = COALESCE($2,color), 
      price = COALESCE($3,price)
      WHERE created_by_user_id = $4 and id = $5 returning *
  `, [title, color, price, user.user_id, car_id]);
        if (rowCount == 0) {
            return res.status(200).json({ message: "car note found with by user" });
        }
        return res.status(200).json({ message: "updated" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car_id = req.params.car_id;
        let user = yield verifyToken(req.headers.token);
        let fruit = yield getOne(car_id);
        if (!fruit)
            return res.status(200).json({
                message: "car not found!",
            });
        let { rowCount } = yield database_1.default.query(` 
    DELETE FROM cars WHERE created_by_user_id = $1 and id = $2 returning *
   `, [user.user_id, car_id]);
        if (rowCount == 0) {
            return res.status(400).json({
                message: "by user_id car not found",
            });
        }
        return res.json({
            message: "Deleted!",
        });
    }
    catch (error) {
        console.log(error);
    }
});
