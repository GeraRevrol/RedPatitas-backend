# RedPatitas Backend 🐾

> API REST para sistema de adopción de mascotas

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Ejecutar en producción
npm start
```

## 📡 API Endpoints

### Públicos
- `GET /api/publico/mascotas` - Listar mascotas en adopción
- `GET /api/publico/mascotas/:id` - Obtener mascota por ID

### Administrativos
- `POST /api/admin/mascotas` - Crear mascota
- `PUT /api/admin/mascotas/:id` - Actualizar mascota
- `DELETE /api/admin/mascotas/:id` - Eliminar mascota

### Mascotas Perdidas
- `GET /api/mascotas-perdidas` - Listar mascotas perdidas
- `POST /api/mascotas-perdidas` - Reportar mascota perdida
- `PUT /api/mascotas-perdidas/:id` - Actualizar reporte
- `DELETE /api/mascotas-perdidas/:id` - Eliminar reporte

## 🛠️ Stack Tecnológico

- **Express.js** - Framework web
- **MongoDB + Mongoose** - Base de datos
- **CORS** - Configurado para frontend en puerto 4200

## 🔧 Configuración

- **Puerto:** 3000
- **Base de datos:** MongoDB Atlas
- **CORS:** Habilitado para `http://localhost:4200`