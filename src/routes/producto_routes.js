import { Router } from "express";

import {
  getProductos,
  postProducto,
  getProducto,
  deleteProducto
} from "../controllers/producto_controller.js";

const router = Router();

// GET /productos
router.get("/", getProductos);

// POST /productos
router.post("/", postProducto);

export default router;

// GET /productos/:id
router.get("/:id", getProducto);

// DELETE /productos/:id
router.delete("/:id", deleteProducto);