#------------- DockerFile Sring boot -------------

# Entorno maven
FROM maven:3.9.9-sapmachine-21 AS build

# Directorio de trabajo
WORKDIR /app

# Copia el archivo pom.xml y descargar las dependencias necesarias
COPY pom.xml .
RUN mvn dependency:go-offline

# 
COPY src ./src
RUN mvn clean package -DskipTests

#--------------------- Stage 2 ----------------------------

# Entorno eclipse-temurin
FROM eclipse-temurin:21-jdk-jammy

# Directorio de trabajo
WORKDIR /app

# Copia el JAR generado en la etapa de construcción
COPY --from=build /app/target/*.jar app.jar

# Expone el puerto en el que corre la aplicación
EXPOSE 8080

# Ejecuta la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
