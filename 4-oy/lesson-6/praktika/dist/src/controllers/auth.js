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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_1 = require("../models/auth");
const jsonwebtoken_1 = require("jsonwebtoken");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(404).json({ message: "Invalid username or password" });
        }
        const user = yield (0, auth_1.loginUser)(username, password);
        if (user.length == 0) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json({ message: "logged successfully", token: (0, jsonwebtoken_1.sign)(user[0], "JUDAYAM_SECERT_KEY") });
    }
    catch (err) {
        console.log(err);
    }
});
exports.login = login;
