#------------- DockerFile Angular -------------

# Entorno Node-18
FROM node:18-alpine AS build

# Directorio de trabajo
WORKDIR /app

# Copiar los packages
COPY package*.json ./

# Instalar dependencias
RUN npm ci
RUN npm install -g nodemon
RUN npm install

# Copiar el resto del codigo de Angular
COPY ./ ./

# Compilar la aplicacion
RUN npm run build

#--------------------- Stage 2 ----------------------------

# Entorno NGINX
FROM nginx:alpine

#  Copiar los archivos compilados de Angular
COPY --from=build /app/dist/* /usr/share/nginx/html

# Copiar archivo de configuracion de NGINX
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto de escucha
EXPOSE 80 

# Ejecutar NGINX
CMD ["nginx", "-g", "deamon off;"]
