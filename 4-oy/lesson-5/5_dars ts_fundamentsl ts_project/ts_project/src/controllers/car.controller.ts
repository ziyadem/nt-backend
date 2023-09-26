import { Request, Response } from "express";
import { QueryResult } from "pg";
import pool from "../database";
import jwt from "jsonwebtoken";

const verifyToken = async (user_token: any) => {
  return await jwt.verify(user_token, "secret_key");
};

const getOne = async (car_id: string) => {
  let response: QueryResult = await pool.query(
    "SELECT * FROM cars WHERE id = $1",
    [car_id]
  );
  return response.rows[0];
};

export const getCars = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    let user: any = await verifyToken(req.headers.token);

    const response: QueryResult = await pool.query(
      "SELECT * FROM cars WHERE created_by_user_id = $1",
      [user.user_id]
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getCarById = async (req: Request, res: Response) => {
  try {
    let { car_id } = req.params;
    let user: any = await verifyToken(req.headers.token);
    let response: QueryResult = await pool.query(
      "SELECT * FROM cars WHERE id = $1 and created_by_user_id = $2",
      [car_id, user.user_id]
    );
    if (response.rows.length == 0) {
      res.status(404).json("cars not found");
    }
    return res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const createCar = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { title, price, color } = req.body;
    let user: any = await verifyToken(req.headers.token);
    const response: QueryResult = await pool.query(
      `INSERT INTO 
         cars (title,price,color,created_by_user_id) 
         VALUES ($1, $2, $3, $4)`,
      [title, price, color, user.user_id]
    );
    res.status(200).json({
      message: "cars Added successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "cars already exists",
    });
  }
};

export const updateCar = async (req: Request, res: Response) => {
  try {
    const car_id: string = req.params.car_id;
    const { title, price, color } = req.body;
    let user: any = await verifyToken(req.headers.token);
    let car = await getOne(car_id);
    console.log(user.user_id);

    if (!car)
      return res.json({
        message: "cars not found!",
      });
    let { rowCount } = await pool.query(
      ` update 
      cars 
      set 
      title = COALESCE($1,title), 
      color = COALESCE($2,color), 
      price = COALESCE($3,price)
      WHERE created_by_user_id = $4 and id = $5 returning *
  `,
      [title, color, price, user.user_id, car_id]
    );
    if (rowCount == 0) {
      return res.status(200).json({ message: "car note found with by user" });
    }
    return res.status(200).json({ message: "updated" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const car_id: string = req.params.car_id;
    let user: any = await verifyToken(req.headers.token);

    let fruit = await getOne(car_id);

    if (!fruit)
      return res.status(200).json({
        message: "car not found!",
      });

    let { rowCount } = await pool.query(
      ` 
    DELETE FROM cars WHERE created_by_user_id = $1 and id = $2 returning *
   `,
      [user.user_id, car_id]
    );
    if (rowCount == 0) {
      return res.status(400).json({
        message: "by user_id car not found",
      });
    }

    return res.json({
      message: "Deleted!",
    });
  } catch (error) {
    console.log(error);
  }
};
