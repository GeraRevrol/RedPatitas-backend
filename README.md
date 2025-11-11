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
- `perdidasService.js` - Lógica de negocio mascotas perdidas

### **🛣️ Rutas (src/rutas/)**
- `public.js` - Endpoints públicos (GET)
- `admin.js` - Endpoints administrativos (POST, PUT, DELETE)
- `mascotasPerdidas.js` - Endpoints mascotas perdidas

## 🔌 Middlewares

- **CORS** - Comunicación con frontend Angular
- **Express.json()** - Parsing JSON requests
- **Mongoose** - ODM para MongoDB
- **Multer** - Manejo de archivos/imágenes

## 📡 Endpoints API

### **Públicos**
```
GET /api/publico/mascotas          # Listar mascotas adopción
GET /api/publico/mascotas/:id      # Ver mascota específica
GET /api/mascotas-perdidas         # Listar mascotas perdidas
GET /api/mascotas-perdidas/:id     # Ver mascota perdida específica
```

### **Administrativos**
```
POST /api/admin/mascotas           # Crear mascota adopción
PUT /api/admin/mascotas/:id        # Actualizar mascota adopción
DELETE /api/admin/mascotas/:id     # Eliminar mascota adopción

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
- **Multer** - Manejo de archivos

## ⚙️ Configuración

- **Puerto:** 3000
- **Base de datos:** MongoDB Atlas
- **CORS:** Habilitado para http://localhost:4200

## 🔗 Conexión Frontend
El backend está configurado para recibir requests del frontend Angular en puerto 4200.

## 🔗 Equipo de desarrollo MVPP (Muy viernes para programar)
Zacagnino Antonella - Reverol Gerarlis - Salva ivan - Singuri Roberto.

## 🔗 TP INTEGRADOR - MATERIA DESASRROLLO WEB (BACKEND - FRONTEND) IFTS11 2025
Zammataro Gustavo - Balbuena Federico
