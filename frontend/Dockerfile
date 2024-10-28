#------------- DockerFile Angular -------------

# Etapa de compilación en Node-18
FROM node:18-alpine AS build

# Directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código fuente de Angular
COPY ./ ./

# Compilar la aplicación Angular (se asume que 'prime-checker' es la app principal)
RUN npm run build -- --output-path=dist/prime-checker

#--------------------- Stage 2 ----------------------------

# Entorno NGINX
FROM nginx:alpine

# Copiar los archivos compilados de Angular al directorio predeterminado de NGINX
COPY --from=build /app/dist/prime-checker/browser /usr/share/nginx/html

# Exponer el puerto de escucha de NGINX
EXPOSE 80

# Ejecutar NGINX
CMD ["nginx", "-g", "daemon off;"]
