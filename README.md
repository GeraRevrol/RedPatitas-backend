# RedPatitas Backend 🐾

> API REST para sistema de adopción de mascotas - Arquitectura MVC

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npx nodemon src/server.js
```

## 🏗️ Arquitectura MVC

### **📁 Modelos (src/modelos/)**
- `Adopcion.js` - Esquema MongoDB para mascotas en adopción
- `Perdida.js` - Esquema MongoDB para mascotas perdidas

### **🎮 Controladores (src/controladores/)**
- `adopcionController.js` - Lógica CRUD mascotas adopción
- `perdidasController.js` - Lógica CRUD mascotas perdidas

### **🔧 Servicios (src/servicios/)**
- `adopcionService.js` - Lógica de negocio mascotas adopción
- `perdidasService.js` - Lógica de negocio mascotas perdidas

### **🛣️ Rutas (src/rutas/)**
- `adopcionMascotas.js` - CRUD completo mascotas adopción
- `mascotasPerdidas.js` - CRUD completo mascotas perdidas

### **⚙️ Configuración (src/config/)**
- `database.js` - Configuración de conexión MongoDB
- `conexion.js` - Conexión avanzada con variables de entorno

## 🔌 Middlewares

- **CORS** - Comunicación con frontend Angular
- **Express.json()** - Parsing JSON requests

## 📡 Endpoints API

### **Públicos**
```
GET /api/adopcion-mascotas         # Listar mascotas adopción
GET /api/adopcion-mascotas/:id     # Ver mascota específica
GET /api/mascotas-perdidas         # Listar mascotas perdidas
GET /api/mascotas-perdidas/:id     # Ver mascota perdida específica
```

### **Administrativos**
```
POST /api/adopcion-mascotas        # Crear mascota adopción
PUT /api/adopcion-mascotas/:id     # Actualizar mascota adopción
DELETE /api/adopcion-mascotas/:id  # Eliminar mascota adopción

POST /api/mascotas-perdidas        # Reportar mascota perdida
PUT /api/mascotas-perdidas/:id     # Actualizar reporte perdida
DELETE /api/mascotas-perdidas/:id  # Eliminar reporte perdida
```

## 🛠️ Stack Tecnológico

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Variables de entorno

## ⚙️ Configuración

- **Puerto:** 3000
- **Base de datos:** MongoDB Atlas
- **CORS:** Habilitado para http://localhost:4200

## 🔗 Conexión Frontend
El backend está configurado para recibir requests del frontend Angular en puerto 4200.

## 🔗 Equipo de desarrollo MVPP (Muy viernes para programar)
Zacagnino Antonella - Reverol Gerarlis - Salva ivan - Singuri Roberto.

## 🔗 TP INTEGRADOR - MATERIA DESARROLLO WEB (BACKEND - FRONTEND) IFTS11 2025
Zammataro Gustavo - Balbuena Federico
