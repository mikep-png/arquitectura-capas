# API de Productos - Arquitectura por Capas

## Descripción

Este proyecto implementa una API sencilla de productos utilizando **Node.js** y **Express**.

El proyecto utiliza una arquitectura por capas para separar las responsabilidades del sistema en:

- Routes
- Controllers
- Services
- Repositories

El objetivo es mantener el código organizado, comprensible y fácil de modificar.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- Git
- GitHub

## Instalación

Para instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

También se puede ejecutar con:

```bash
npm start
```

El servidor estará disponible en:

```text
http://localhost:3000
```

## Estructura del proyecto

```text
arquitectura-capas/
├── src/
│   ├── routes/
│   │   └── producto_routes.js
│   ├── controllers/
│   │   └── producto_controller.js
│   ├── services/
│   │   └── producto_service.js
│   ├── repositories/
│   │   └── producto_repository.js
│   └── app.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Arquitectura por capas

### Routes

La capa **Routes** define los endpoints de la API y conecta cada petición con el controlador correspondiente.

Ejemplos:

- `GET /productos`
- `POST /productos`

### Controllers

La capa **Controllers** recibe las peticiones HTTP, utiliza los servicios correspondientes y construye las respuestas para el cliente.

Trabaja principalmente con:

```javascript
req
res
```

### Services

La capa **Services** contiene las reglas y la lógica de negocio.

En este proyecto se encarga de validar:

- Que el nombre del producto sea obligatorio.
- Que el precio sea mayor que cero.

### Repositories

La capa **Repositories** se encarga de trabajar con los datos.

En este ejercicio se utiliza un arreglo de JavaScript para simular una base de datos.

## Flujo de una petición

El recorrido de una petición dentro de la aplicación es:

```text
Cliente
   ↓
Routes
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Datos
```

La respuesta realiza el recorrido contrario hasta llegar nuevamente al cliente.

## Endpoints

### GET /productos

Permite obtener todos los productos registrados.

```text
GET http://localhost:3000/productos
```

Ejemplo de respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Camisa negra",
    "precio": 50000
  },
  {
    "id": 2,
    "nombre": "Pantalón azul",
    "precio": 80000
  }
]
```

### POST /productos

Permite registrar un nuevo producto.

```text
POST http://localhost:3000/productos
```

Ejemplo de solicitud:

```json
{
  "nombre": "Chaqueta negra",
  "precio": 150000
}
```

Ejemplo de respuesta:

```json
{
  "mensaje": "Producto creado correctamente",
  "producto": {
    "id": 123456789,
    "nombre": "Chaqueta negra",
    "precio": 150000
  }
}
```

El valor del `id` se genera automáticamente.

## Validaciones

El sistema realiza las siguientes validaciones:

### Nombre obligatorio

El producto debe tener un nombre.

Ejemplo incorrecto:

```json
{
  "precio": 50000
}
```

Respuesta:

```json
{
  "error": "El nombre del producto es obligatorio"
}
```

### Precio mayor que cero

El precio debe ser mayor que cero.

Ejemplo incorrecto:

```json
{
  "nombre": "Camisa",
  "precio": 0
}
```

Respuesta:

```json
{
  "error": "El precio debe ser mayor que cero"
}
```

También se rechazan valores negativos.

## Manejo de errores

Los errores de validación son manejados por el Controller y enviados al cliente mediante una respuesta HTTP `400`.

Ejemplo:

```json
{
  "error": "El precio debe ser mayor que cero"
}
```

## Git

Durante el desarrollo se utilizaron commits progresivos y descriptivos para registrar los cambios realizados.

Ejemplos:

```bash
git init

git add .

git commit -m "chore: crear proyecto inicial"

git commit -m "chore: crear estructura por capas"

git commit -m "feat: agregar repositorio de productos"

git commit -m "feat: agregar servicio y validaciones de productos"

git commit -m "feat: agregar controlador de productos"

git commit -m "feat: agregar rutas de productos"

git commit -m "feat: conectar API de productos"

git commit -m "docs: agregar README del proyecto"

git commit -m "Actualizar error de varios codigos"



git commit -m "test: comprobar endpoints de productos"

git commit -m "test: comprobar validaciones de productos"
```

Para consultar el historial:

```bash
git log --oneline
```

## .gitignore

El proyecto utiliza un archivo `.gitignore` para evitar subir archivos innecesarios o sensibles.

Contenido:

```text
node_modules/
.env
.env.*
*.log
```

## Pruebas realizadas

Se realizaron pruebas de:

- Consulta de todos los productos mediante `GET /productos`.
- Registro de productos mediante `POST /productos`.
- Validación de nombre obligatorio.
- Validación de precio mayor que cero.
- Manejo de errores.
- Ejecución del servidor.
- Revisión del historial de commits.

## Conclusión

La implementación de una arquitectura por capas permite separar las responsabilidades de la aplicación.

Cada capa cumple una función específica:

```text
Routes       → Define los endpoints
Controllers  → Maneja las peticiones y respuestas
Services     → Contiene la lógica de negocio
Repositories → Trabaja con los datos
```

Esta organización facilita el mantenimiento, la comprensión y la evolución del proyecto.