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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//token mdw
exports.tokenMdw = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.headers.token;
    const JwtVerify = (token) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { user_id } = yield jsonwebtoken_1.default.verify(token, "secret_key");
            return next();
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                return res.status(400).json({
                    message: "Token xato iltimos qayta login qiling!",
                });
            }
            else
                return res.status(400).json({
                    message: "Token muddati tugagan iltimos qayda kiring!",
                });
        }
        return;
    });
    let data = yield JwtVerify(token);
});
