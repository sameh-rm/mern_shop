import express from "express";
import {
  getProducts,
  getProductById,
} from "../contollers/productConrtroller.js";
const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
