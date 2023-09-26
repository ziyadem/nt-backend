import { Request, Response } from 'express';
import {QueryResult } from 'pg';
import pool from '../database';
import jwt from 'jsonwebtoken';

const verifyToken = async (user_token: any) => {
  return await jwt.verify(user_token, "secret_key");
};


const getOne = async (fruit_id: string) => {
  let response: QueryResult = await pool.query(
    "SELECT * FROM fruits WHERE id = $1",
    [fruit_id]
  );
  return response.rows[0];
};

export const getFruits = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    let user: any = await verifyToken(req.headers.token);

    const response: QueryResult = await pool.query(
      "SELECT * FROM fruits WHERE created_by_user_id = $1",
      [user.user_id]
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getFruitById = async (
  req: Request,
  res: Response
)=> {
  try {
    let { fruit_id } = req.params;
    let user: any = await verifyToken(req.headers.token);
    let response: QueryResult = await pool.query(
      "SELECT * FROM fruits WHERE id = $1 and created_by_user_id = $2",
      [fruit_id, user.user_id]
    );
    console.log(response);
    
    if (response.rows.length == 0) {
      res.status(404).json("fruit not found");
    }
    return res.json(response.rows[0]);
    
  } catch (error) {
    console.log(error)    
  }
  
};

export const createFruit = async (
  req: Request,
  res: Response
): Promise<any> => {

  try {
    const { title,price,color } = req.body;
    let user: any = await verifyToken(req.headers.token); 
    const response: QueryResult = await pool.query(
      `INSERT INTO 
         fruits (title,price,color,created_by_user_id) 
         VALUES ($1, $2, $3, $4)`,
      [title, price, color, user.user_id]
    );
    res.status(200).json({
      message: "Fruuits Added successfully",
    });
    
  } catch (error) {
    res.status(400).json({
      message: "fruit already exists",
    });   
  }
};

export const updateFruit = async (req: Request, res: Response) => {

  try {
    const fruit_id: string = req.params.fruit_id;
    const { title, price, color } = req.body;
    let user: any = await verifyToken(req.headers.token);
    let fruit = await getOne(fruit_id);
    console.log(user.user_id);
    
    if (!fruit)
      return res.json({
        message: "Fruit not found!",
      });
    let {rowCount}=await pool.query(
      ` update 
      fruits 
      set 
      title = COALESCE($1,title), 
      color = COALESCE($2,color), 
      price = COALESCE($3,price)
      WHERE created_by_user_id = $4 and id = $5 returning *
  `,
      [title,color,price, user.user_id, fruit_id]
    );
    if(rowCount==0){
         return res
           .status(200)
           .json({ message: "fruit note found with by user" });
    }
    return res.status(200).json({message:"updated"});
  } catch (error) {
       console.log(error);
       
  }
};

export const deleteFruit = async (req: Request, res: Response) => {
try {
  const fruit_id: string = req.params.fruit_id;
  let user: any = await verifyToken(req.headers.token);
  
  let fruit = await getOne(fruit_id);
  
  if (!fruit)
    return res.status(200).json({
      message: "Fruit not found!",
    });
  
  let {rowCount}=await pool.query(
    ` 
    DELETE FROM fruits WHERE created_by_user_id = $1 and id = $2 returning *
   `,
    [user.user_id, fruit_id]
  );
  if(rowCount==0){
    return res.status(400).json({
      message: "by user_id fruit not found",
    });
  
  }
  
  return res.json({
    msg: "Deleted!",
  });
  
} catch (error) {
  console.log(error);  
}
};