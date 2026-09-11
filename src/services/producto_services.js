import {
  obtenerTodos,
  guardar,
  obtenerPorId,
  eliminar
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

  // Validar que el precio sea correcto
  if (typeof datos.precio !== "number" || datos.precio <= 0) {
    throw new Error("El precio debe ser un número mayor que cero");
  }

  // Calcular el descuento
  const precioFinal = calcularDescuento(datos.precio);

  // Crear el nuevo producto
  const nuevoProducto = {
    id: productos.length + 1,
    nombre: datos.nombre,
    precio: datos.precio,
    precioFinal: precioFinal
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

// Eliminar un producto
export const eliminarProducto = (id) => {

  const producto = eliminar(id);

  if (!producto) {
    throw new Error("Producto no encontrado");
  }

  return producto;
};

// Calcular descuento de un producto
export const calcularDescuento = (precio) => {

  // Si el precio supera los $100.000,
  // se aplica un descuento del 10%
  if (precio > 100000) {
    return precio * 0.90;
  }

  // Si no supera los $100.000,
  // mantiene el precio original
  return precio;
};