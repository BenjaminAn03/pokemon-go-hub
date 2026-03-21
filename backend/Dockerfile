# Lightweight runtime image
FROM eclipse-temurin:21-jdk-jammy

WORKDIR /app

# Copy ONLY the built jar
COPY target/*.jar app.jar

# Run the app
CMD ["java", "-jar", "app.jar"]
