import { Request, Response } from "express";
import { QueryResult } from "pg";
import pool from "../database";
import jwt from "jsonwebtoken";

const verifyToken = async (user_token: any) => {
  return await jwt.verify(user_token, "secret_key");
};

const getOne = async (course_id: string) => {
  let response: QueryResult = await pool.query(
    "SELECT * FROM course WHERE id = $1",
    [course_id]
  );
  return response.rows[0];
};

export const getCourses = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    let user: any = await verifyToken(req.headers.token);

    const response: QueryResult = await pool.query(
      "SELECT * FROM course WHERE created_by_user_id = $1",
      [user.user_id]
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    let { course_id } = req.params;
    let user: any = await verifyToken(req.headers.token);
    let response: QueryResult = await pool.query(
      "SELECT * FROM course WHERE id = $1 and created_by_user_id = $2",
      [course_id, user.user_id]
    );
    console.log(response);

    if (response.rows.length == 0) {
      res.status(404).json("course not found");
    }
    return res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const createCourse = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { title, price } = req.body;
    let user: any = await verifyToken(req.headers.token);
    const response: QueryResult = await pool.query(
      `INSERT INTO 
         course (title,price,created_by_user_id) 
         VALUES ($1, $2, $3)`,
      [title, price, user.user_id]
    );
    res.status(200).json({
      message: "course Added successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "course already exists",
    });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course_id: string = req.params.course_id;
    const { title, price } = req.body;
    let user: any = await verifyToken(req.headers.token);
    let course = await getOne(course_id);
    console.log(user.user_id);

    if (!course)
      return res.json({
        message: "course not found!",
      });
    let { rowCount } = await pool.query(
      ` update 
      course 
      set 
      title = COALESCE($1,title), 
      price = COALESCE($3,price)
      WHERE created_by_user_id = $4 and id = $5 returning *
  `,
      [title, price, user.user_id, course_id]
    );
    if (rowCount == 0) {
      return res.status(200).json({ message: "course note found with by user" });
    }
    return res.status(200).json({ message: "updated" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course_id: string = req.params.course_id;
    let user: any = await verifyToken(req.headers.token);

    let course = await getOne(course_id);

    if (!course)
      return res.status(200).json({
        message: "course not found!",
      });

    let { rowCount } = await pool.query(
      ` 
    DELETE FROM course WHERE created_by_user_id = $1 and id = $2 returning *
   `,
      [user.user_id, course_id]
    );
    if (rowCount == 0) {
      return res.status(400).json({
        message: "by course_id fruit not found",
      });
    }

    return res.json({
      msg: "Deleted!",
    });
  } catch (error) {
    console.log(error);
  }
};
