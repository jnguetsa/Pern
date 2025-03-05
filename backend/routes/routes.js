import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controller/controller.js";
const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.get("/getProduct/:id", getProduct);
router.get("/getProduct", createProduct);
router.post("/createProduct", createProduct);
router.put("/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
