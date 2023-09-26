import express from "express";
import {
  getUserList,
  createUser,
  deleteUser,
  updateUser,
  register,
  login
} from "../controller/user.ctr.js";

const router = express.Router();
router.route("/register").post(register)
router.route("/login").post(login);
router.route("/user").get(getUserList).post(createUser)
router.route("/user/:id").delete(deleteUser).put(updateUser)
export default router;
