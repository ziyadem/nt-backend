import express from "express";
import {
  getUserList,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/user.ctr.js";

const router = express.Router();
router.route("/user").get(getUserList).post(createUser)
router.route("/user/:id").delete(deleteUser).put(updateUser)
export default router;
