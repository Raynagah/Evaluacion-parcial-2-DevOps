# Evaluación: DevOps y CI/CD con Node.js y Docker

Este proyecto configura un entorno de desarrollo completo y un flujo de integración continua (CI) para una aplicación Node.js.

¿Qué hace el Workflow de GitHub Actions?

El archivo .github/workflows/ci.yml define un flujo de trabajo que se ejecuta automáticamente cada vez que se hace un push a la rama main. Sus tareas principales son:

Instalar Dependencias: Instala los paquetes de Node.js necesarios con npm ci.

Ejecutar Tests: Verifica que la funcionalidad principal de la aplicación no tenga errores con npm test.

Revisar Estilo de Código (Linting): Usa ESLint para asegurar que el código sigue las guías de estilo.

Análisis de Vulnerabilidades: Escanea las dependencias con Snyk para detectar problemas de seguridad.

Análisis Estático de Código: Utiliza SonarCloud para identificar "code smells", bugs y vulnerabilidades en el código fuente.

Construir y Subir Imagen Docker: Si todos los pasos anteriores son exitosos, construye una imagen Docker de la aplicación y la sube a Docker Hub para su posterior uso.

¿Cómo levantar los contenedores localmente?

El archivo docker-compose.yml orquesta los servicios necesarios para ejecutar la aplicación en un entorno local aislado.

Prerrequisitos

Tener Docker y Docker Compose instalados.

Pasos para levantar el entorno

Clona el repositorio (si aún no lo has hecho):

git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
cd tu-repositorio

Inicia los contenedores: Ejecuta el siguiente comando en la raíz del proyecto.

docker-compose up -d

El flag -d ejecuta los contenedores en segundo plano (detached mode).

Verificar el estado: Para confirmar que todos los contenedores están activos, ejecuta:

docker ps -a

Deberías ver tres contenedores (app, db y phpmyadmin) con el estado Up.

Acceder a los servicios:

Aplicación Node.js: <http://localhost:3000>

phpMyAdmin: <http://localhost:8080>

Servidor: db

Usuario: root

Contraseña: root_password

Detener los contenedores

Para detener y eliminar los contenedores, ejecuta:

docker-compose down

Nota Importante: Siguiendo los requisitos de la evaluación, este docker-compose.yml no utiliza volúmenes. Esto significa que cualquier dato guardado en la base de datos se perderá cuando los contenedores se detengan.
