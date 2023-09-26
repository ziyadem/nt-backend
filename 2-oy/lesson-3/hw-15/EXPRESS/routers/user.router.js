import express from "express";
import {
  getUserList,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/user.ctr.js";

const router = express.Router();

router.get("/user/list", getUserList);
router.post("/user/create", createUser);
router.delete("/user/delete/:id", deleteUser);
router.put("/user/update/:course_id", updateUser);

export default router;
