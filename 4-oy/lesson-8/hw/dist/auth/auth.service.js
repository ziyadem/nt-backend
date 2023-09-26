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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_repo_1 = require("./auth.repo");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(authRepository, jwtService) {
        this.authRepository = authRepository;
        this.jwtService = jwtService;
    }
    async getUserByEmail(email) {
        return await this.authRepository.getUserByEmail(email);
    }
    async register(user) {
        try {
            let foundedUser = await this.authRepository.getUserByEmail(user.user_email);
            if (foundedUser[0]) {
                return new common_1.ConflictException('User already exists!');
            }
            user.user_password = await bcrypt.hash(user.user_password, 10);
            return await this.authRepository.register(user);
        }
        catch (err) {
            console.log(err);
            return new common_1.InternalServerErrorException();
        }
    }
    async login(user) {
        let result = await this.authRepository.login(user);
        if (result.length == 0) {
            return {
                msg: 'User not found!'
            };
        }
        result = result[0];
        console.log(result);
        console.log(user.user_password);
        let checkPsw = await bcrypt.compare(user.user_password, result.user_password);
        console.log(checkPsw);
        if (!checkPsw) {
            return {
                msg: 'Password invalid!'
            };
        }
        let token = await this.jwtService.sign({ user_id: result.id });
        return {
            msg: "OK",
            token
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repo_1.AuthRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map