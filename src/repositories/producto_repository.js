// Lista de productos que simula una base de datos
const productos = [
  {
    id: 1,
    nombre: "Camisa negra",
    precio: 50000
  },
  {
    id: 2,
    nombre: "Pantalón azul",
    precio: 80000
  }
];

// Obtener todos los productos
export const obtenerTodos = () => {
  return productos;
};

// Guardar un nuevo producto
export const guardar = (producto) => {
  productos.push(producto);
  return producto;
};

// Buscar un producto por su ID
export const obtenerPorId = (id) => {
  return productos.find(producto => producto.id === id);
};

// Eliminar un producto por su ID
export const eliminar = (id) => {

  const indice = productos.findIndex(producto => producto.id === id);

  if (indice === -1) {
    return null;
  }

  const productoEliminado = productos.splice(indice, 1);

  return productoEliminado[0];
};

// Buscar productos por precio
export const obtenerPorPrecio = (precio) => {
  return productos.filter(producto => producto.precio === precio);
};