import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../contollers/userController.js";
import { loginRequired } from "../middlewares/authMiddlewares.js";
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(loginRequired, getUserProfile)
  .put(loginRequired, updateUserProfile);

export default router;
