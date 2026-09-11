import { Router } from "express";

import {
  getProductos,
  postProducto
} from "../controllers/producto.controller.js";

const router = Router();

// GET /productos
router.get("/", getProductos);

// POST /productos
router.post("/", postProducto);

export default router;