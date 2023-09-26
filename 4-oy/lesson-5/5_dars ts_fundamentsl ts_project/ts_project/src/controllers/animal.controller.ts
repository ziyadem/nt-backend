import { Request, Response } from "express";
import { QueryResult } from "pg";
import pool from "../database";
import jwt from "jsonwebtoken";

const verifyToken = async (user_token: any) => {
  return await jwt.verify(user_token, "secret_key");
};

const getOne = async (animal_id: string) => {
  let response: QueryResult = await pool.query(
    "SELECT * FROM animals WHERE id = $1",
    [animal_id]
  );
  return response.rows[0];
};

export const getAnimals = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    let user: any = await verifyToken(req.headers.token);

    const response: QueryResult = await pool.query(
      "SELECT * FROM animals WHERE created_by_user_id = $1",
      [user.user_id]
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getAnimalById = async (req: Request, res: Response) => {
  try {
    let { animal_id } = req.params;
    let user: any = await verifyToken(req.headers.token);
    let response: QueryResult = await pool.query(
      "SELECT * FROM animals WHERE id = $1 and created_by_user_id = $2",
      [animal_id, user.user_id]
    );
    console.log(response);

    if (response.rows.length == 0) {
      res.status(404).json("fruit not found");
    }
    return res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const createAnimal = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { title, color } = req.body;
    let user: any = await verifyToken(req.headers.token);
    const response: QueryResult = await pool.query(
      `INSERT INTO 
         animals (title,color,created_by_user_id) 
         VALUES ($1, $2, $3)`,
      [title, color, user.user_id]
    );
    res.status(200).json({
      message: "Animals Added successfully",
    });
  } catch (error) {
    console.log(error);
    
    res.status(400).json({
      message: "animals already exists",
    });
  }
};

export const updateAnimal = async (req: Request, res: Response) => {
  try {
    const animal_id: string = req.params.animal_id;
    const { title, color } = req.body;
    let user: any = await verifyToken(req.headers.token);
    let animal = await getOne(animal_id);
    console.log(user.user_id);

    if (!animal)
      return res.json({
        message: "animal not found!",
      });
    let { rowCount } = await pool.query(
      ` update 
      animals 
      set 
      title = COALESCE($1,title), 
      color = COALESCE($2,color)
      WHERE created_by_user_id = $3 and id = $4 returning *
  `,
      [title, color, user.user_id, animal_id]
    );
    if (rowCount == 0) {
      return res
        .status(200)
        .json({ message: "animal note found with by user" });
    }
    return res.status(200).json({ message: "updated" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnimal = async (req: Request, res: Response) => {
  try {
    const animal_id: string = req.params.animal_id;
    let user: any = await verifyToken(req.headers.token);

    let animal = await getOne(animal_id);

    if (!animal)
      return res.status(200).json({
        message: "animal not found!",
      });

    let { rowCount } = await pool.query(
      ` 
    DELETE FROM animals WHERE created_by_user_id = $1 and id = $2 returning *
   `,
      [user.user_id, animal_id]
    );
    if (rowCount == 0) {
      return res.status(400).json({
        message: "by user_id animal not found",
      });
    }

    return res.json({
      msg: "Deleted!",
    });
  } catch (error) {
    console.log(error);
  }
};
