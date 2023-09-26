import { Request, Response } from "express";
import { loginUser } from "../models/auth";
import { sign, verify } from "jsonwebtoken";

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    
    
    if (!username || !password) {
      return res.status(404).json({ message: "Invalid username or password" });
    }

    const user = await loginUser(username, password);

    if (user.length == 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json({ message: "logged successfully", token: sign(user[0], "JUDAYAM_SECERT_KEY") });
  } catch (err) {
    console.log(err);
  }
};


export { login };