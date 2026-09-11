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