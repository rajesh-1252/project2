import express from "express";
const router = express.Router();

//TODO: import rateLimiter for production use;

import {
  register,
  login,
  updateUser,
  getCurrentUser,
  logout,
} from "../controller/authController.js";

import auth from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.get("/logout", logout);

router.route("/updateuser").patch(auth, updateUser);
router.route("/getuser").get(auth, getCurrentUser);

export default router;
