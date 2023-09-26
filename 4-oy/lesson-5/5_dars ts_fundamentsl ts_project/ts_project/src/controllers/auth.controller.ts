import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool  from '../database'

export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, surname, age,  email, role, password } = req.body;
        console.log(name, surname, age, email, role, password);
    
        const hashPsw:string = await bcrypt.hash(password, 10)
        
        
        const response: QueryResult = await pool.query(
          `INSERT INTO users 
            (name, surname, age, email, role, password) 
            VALUES ($1, $2, $3, $4, $5, $6)`,
          [name, surname, age, email, role, hashPsw]
        );     
        res.json({
            message: 'User Registered!'
        })
        
    } catch (err) {
        res.status(400).json({
          message: "User already registered",
        });
          
    }
};


export const loginUser = async (req: Request, res: Response): Promise<any> => {      
    try {
         const { email, password } = req.body;

         const response: QueryResult = await pool.query(`SELECT * FROM users WHERE email = $1`,[email]);
             
        const foundedUser = response.rows[0];
        
         if (!foundedUser) {return res.status(400).json({ message: "User registratsiyadan otmagan" });};

        let comparePassword=await bcrypt.compare(password,foundedUser.password);

        if (!comparePassword) {
          return res.status(400).json({ message: "Password invalid" });
        }

        res.json({
          message: "Success!",
          token: await jwt.sign({ user_id: foundedUser.id }, "secret_key", {
            expiresIn: "1d",
          }),
        });
            
    } catch (error) {
        console.log(error);           
    }


   
};