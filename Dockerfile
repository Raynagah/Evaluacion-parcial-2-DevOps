# --- Etapa 1: Construir la aplicación de React ---
FROM node:18-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json y instalar todas las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Ejecutar el script de build de React. Esto crea una carpeta 'build'
# con todos los archivos estáticos optimizados.
RUN npm run build

# --- Etapa 2: Servir la aplicación en producción ---
FROM node:18-alpine

WORKDIR /app

# Copiar solo las dependencias de producción
COPY package*.json ./
RUN npm ci --only=production

# Copiar los archivos construidos de la etapa anterior
COPY --from=build /app/build ./build

# Exponer el puerto en el que 'serve' correrá la aplicación
EXPOSE 3000

# El comando final para iniciar el servidor.
# Le dice al paquete 'serve' que sirva el contenido de la carpeta 'build'.
CMD [ "npx", "serve", "-s", "build", "-l", "3000" ]