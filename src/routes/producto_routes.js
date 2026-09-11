import { Router } from "express";

import {
  getProductos,
  postProducto,
  getProducto,
  deleteProducto,
  getProductosPorPrecio
} from "../controllers/producto_controller.js";

const router = Router();

// GET /productos
router.get("/", getProductos);

// POST /productos
router.post("/", postProducto);

// GET /productos/precio/:precio
router.get("/precio/:precio", getProductosPorPrecio);

// GET /productos/:id
router.get("/:id", getProducto);

// DELETE /productos/:id
router.delete("/:id", deleteProducto);

export default router;
