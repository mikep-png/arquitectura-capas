import express from "express";

import productoRoutes from "./routes/producto.routes.js";

const app = express();

// Permite recibir información JSON
app.use(express.json());

// Registrar las rutas de productos
app.use("/productos", productoRoutes);

// Ruta principal de prueba
app.get("/", (req, res) => {
  res.json({
    mensaje: "API de arquitectura por capas funcionando"
  });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});