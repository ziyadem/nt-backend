import jwt from "jsonwebtoken";
import { Request, Response,NextFunction } from "express";

//token mdw
export const tokenMdw = async (req:Request, res:Response, next:NextFunction) => {
  let token:any = req.headers.token;
  const JwtVerify = async (token:string) => {
    try {
      let { user_id }:any = await jwt.verify(token, "secret_key");
      return next();
     
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(400).json({
          message: "Token xato iltimos qayta login qiling!",
        });
      } else
        return res.status(400).json({
          message: "Token muddati tugagan iltimos qayda kiring!",
        });
    }
    return;
  };
  let data = await JwtVerify(token);
};

