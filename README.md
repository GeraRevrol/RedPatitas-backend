# RedPatitas Backend 🐾

> API REST para sistema de adopción de mascotas - Arquitectura MVC

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npx nodemon index_server.js
```

## 🏗️ Arquitectura en Capas

### **🚀 Servidor Principal**
- `index_server.js` - Punto de entrada del servidor Express

### **🔄 Flujo de Datos**
```
HTTP Request → Router → Controller → Service → Repository → MongoDB
     ↓           ↓         ↓          ↓          ↓         ↓
HTTP Response ← Router ← Controller ← Service ← Repository ← MongoDB
```

### **📁 Modelos (Repositories/models/)**
- `Adopcion.js` - Esquema Mongoose para mascotas en adopción
- `Perdida.js` - Esquema Mongoose para mascotas perdidas

### **🎮 Controladores (Controllers/)**
- `adopcionController.js` - Gateway HTTP para mascotas adopción
- `perdidasController.js` - Gateway HTTP para mascotas perdidas

### **🔧 Servicios (Services/)**
- `adopcionService.js` - Lógica de negocio mascotas adopción
- `perdidasService.js` - Lógica de negocio mascotas perdidas

### **🗂️ Repositorios (Repositories/)**
- `adopcionRepository.js` - Acceso a datos mascotas adopción
- `perdidasRepository.js` - Acceso a datos mascotas perdidas

### **🛣️ Rutas (Routers/)**
- `adopcionRouter.js` - Endpoints REST mascotas adopción
- `perdidasRouter.js` - Endpoints REST mascotas perdidas

### **⚙️ Configuración (database/)**
- `config.js` - Variables de entorno MongoDB
- `conexion.js` - Gestión de conexiones MongoDB Atlas

## 🔌 Middlewares

- **CORS** - Comunicación con frontend Angular (puerto 4200)
- **Express.json()** - Parsing de requests JSON
- **dotenv** - Carga de variables de entorno

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

## 🎨 Patrones de Diseño

- **Layered Architecture** - Separación clara de responsabilidades
- **Repository Pattern** - Abstracción del acceso a datos
- **Singleton Pattern** - Instancia única de Controllers y Services
- **Factory Pattern** - Gestión de conexiones MongoDB
- **MVC + Services** - Arquitectura híbrida con capa de servicios

## 🔗 Conexión Frontend
El backend está configurado para recibir requests del frontend Angular en puerto 4200.

## 🔗 Equipo de desarrollo MVPP (Muy viernes para programar)
Zacagnino Antonella - Reverol Gerarlis - Salva ivan - Singuri Roberto.

## 🔗 TP INTEGRADOR - MATERIA DESARROLLO WEB (BACKEND - FRONTEND) IFTS11 2025
Zammataro Gustavo - Balbuena Federico
