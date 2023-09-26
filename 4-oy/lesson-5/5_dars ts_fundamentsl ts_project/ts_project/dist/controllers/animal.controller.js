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
const getOne = (animal_id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield database_1.default.query("SELECT * FROM animals WHERE id = $1", [animal_id]);
    return response.rows[0];
});
exports.getAnimals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield verifyToken(req.headers.token);
        const response = yield database_1.default.query("SELECT * FROM animals WHERE created_by_user_id = $1", [user.user_id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
});
exports.getAnimalById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { animal_id } = req.params;
        let user = yield verifyToken(req.headers.token);
        let response = yield database_1.default.query("SELECT * FROM animals WHERE id = $1 and created_by_user_id = $2", [animal_id, user.user_id]);
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
exports.createAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, color } = req.body;
        let user = yield verifyToken(req.headers.token);
        const response = yield database_1.default.query(`INSERT INTO 
         animals (title,color,created_by_user_id) 
         VALUES ($1, $2, $3)`, [title, color, user.user_id]);
        res.status(200).json({
            message: "Animals Added successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "animals already exists",
        });
    }
});
exports.updateAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animal_id = req.params.animal_id;
        const { title, color } = req.body;
        let user = yield verifyToken(req.headers.token);
        let animal = yield getOne(animal_id);
        console.log(user.user_id);
        if (!animal)
            return res.json({
                message: "animal not found!",
            });
        let { rowCount } = yield database_1.default.query(` update 
      animals 
      set 
      title = COALESCE($1,title), 
      color = COALESCE($2,color)
      WHERE created_by_user_id = $3 and id = $4 returning *
  `, [title, color, user.user_id, animal_id]);
        if (rowCount == 0) {
            return res
                .status(200)
                .json({ message: "animal note found with by user" });
        }
        return res.status(200).json({ message: "updated" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animal_id = req.params.animal_id;
        let user = yield verifyToken(req.headers.token);
        let animal = yield getOne(animal_id);
        if (!animal)
            return res.status(200).json({
                message: "animal not found!",
            });
        let { rowCount } = yield database_1.default.query(` 
    DELETE FROM animals WHERE created_by_user_id = $1 and id = $2 returning *
   `, [user.user_id, animal_id]);
        if (rowCount == 0) {
            return res.status(400).json({
                message: "by user_id animal not found",
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
