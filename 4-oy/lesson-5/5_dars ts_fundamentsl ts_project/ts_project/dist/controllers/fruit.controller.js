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
const getOne = (fruit_id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield database_1.default.query("SELECT * FROM fruits WHERE id = $1", [fruit_id]);
    return response.rows[0];
});
exports.getFruits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield verifyToken(req.headers.token);
        const response = yield database_1.default.query("SELECT * FROM fruits WHERE created_by_user_id = $1", [user.user_id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
});
exports.getFruitById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { fruit_id } = req.params;
        let user = yield verifyToken(req.headers.token);
        let response = yield database_1.default.query("SELECT * FROM fruits WHERE id = $1 and created_by_user_id = $2", [fruit_id, user.user_id]);
        console.log(response);
        if (response.rows.length == 0) {
            res.status(404).json("fruit not found");
        }
        return res.json(response.rows[0]);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createFruit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, price, color } = req.body;
        let user = yield verifyToken(req.headers.token);
        const response = yield database_1.default.query(`INSERT INTO 
         fruits (title,price,color,created_by_user_id) 
         VALUES ($1, $2, $3, $4)`, [title, price, color, user.user_id]);
        res.status(200).json({
            message: "Fruuits Added successfully",
        });
    }
    catch (error) {
        res.status(400).json({
            message: "fruit already exists",
        });
    }
});
exports.updateFruit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fruit_id = req.params.fruit_id;
        const { title, price, color } = req.body;
        let user = yield verifyToken(req.headers.token);
        let fruit = yield getOne(fruit_id);
        console.log(user.user_id);
        if (!fruit)
            return res.json({
                message: "Fruit not found!",
            });
        let { rowCount } = yield database_1.default.query(` update 
      fruits 
      set 
      title = COALESCE($1,title), 
      color = COALESCE($2,color), 
      price = COALESCE($3,price)
      WHERE created_by_user_id = $4 and id = $5 returning *
  `, [title, color, price, user.user_id, fruit_id]);
        if (rowCount == 0) {
            return res
                .status(200)
                .json({ message: "fruit note found with by user" });
        }
        return res.status(200).json({ message: "updated" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteFruit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fruit_id = req.params.fruit_id;
        let user = yield verifyToken(req.headers.token);
        let fruit = yield getOne(fruit_id);
        if (!fruit)
            return res.status(200).json({
                message: "Fruit not found!",
            });
        let { rowCount } = yield database_1.default.query(` 
    DELETE FROM fruits WHERE created_by_user_id = $1 and id = $2 returning *
   `, [user.user_id, fruit_id]);
        if (rowCount == 0) {
            return res.status(400).json({
                message: "by user_id fruit not found",
            });
        }
        return res.json({
            msg: "Deleted!",
        });
    }
    catch (error) {
        console.log(error);
    }
});
