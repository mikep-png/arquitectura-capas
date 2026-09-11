import {
  obtenerTodos,
  guardar,
  obtenerPorId
} from "../repositories/producto_repository.js";

// Obtener todos los productos
export const listarProductos = () => {
  return obtenerTodos();
};

// Crear un producto
export const crearProducto = (datos) => {

  // Validar que el nombre exista
  if (!datos.nombre || datos.nombre.trim() === "") {
    throw new Error("El nombre del producto es obligatorio");
  }

  // Validar que el precio sea mayor que cero
  if (!datos.precio || datos.precio <= 0) {
    throw new Error("El precio debe ser mayor que cero");
  }

  // Crear el nuevo producto
  const nuevoProducto = {
    id: Date.now(),
    nombre: datos.nombre,
    precio: datos.precio
  };

  // Guardar el producto utilizando el Repository
  return guardar(nuevoProducto);
};

// Buscar un producto por su ID
export const buscarProducto = (id) => {

  const producto = obtenerPorId(id);

  if (!producto) {
    throw new Error("Producto no encontrado");
  }

  return producto;
};