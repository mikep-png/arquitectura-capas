import {
  listarProductos,
  crearProducto,
  buscarProducto,
  eliminarProducto,
  buscarPorPrecio
} from "../services/producto_services.js";

// Controlador para listar productos
export const getProductos = (req, res) => {

  const productos = listarProductos();

  res.status(200).json(productos);
};

// Controlador para crear productos
export const postProducto = (req, res) => {

  try {

    const producto = crearProducto(req.body);

    res.status(201).json({
      mensaje: "Producto creado correctamente",
      producto: producto
    });

  } catch (error) {

    res.status(400).json({
      error: error.message
    });

  }
};

// Controlador para buscar un producto por ID
export const getProducto = (req, res) => {

  try {

    const id = Number(req.params.id);

    const producto = buscarProducto(id);

    res.status(200).json(producto);

  } catch (error) {

    res.status(404).json({
      error: error.message
    });

  }
};

// Controlador para eliminar un producto
export const deleteProducto = (req, res) => {

  try {

    const id = Number(req.params.id);

    const producto = eliminarProducto(id);

    res.status(200).json({
      mensaje: "Producto eliminado correctamente",
      producto: producto
    });

  } catch (error) {

    res.status(404).json({
      error: error.message
    });

  }
};

// Controlador para buscar productos por precio
export const getProductosPorPrecio = (req, res) => {

  try {

    const precio = Number(req.params.precio);

    if (isNaN(precio)) {
      return res.status(400).json({
        error: "El precio debe ser un número"
      });
    }

    const productos = buscarPorPrecio(precio);

    res.status(200).json(productos);

  } catch (error) {

    res.status(404).json({
      error: error.message
    });

  }
};