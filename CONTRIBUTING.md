# Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Para mantener la calidad y consistencia del código, por favor sigue estas guías.

Flujo de Trabajo con Ramas (GitFlow Simplificado)

Utilizamos un modelo de ramas simple pero efectivo para gestionar el desarrollo.

main: Esta es la rama principal. Contiene el código de producción, estable y probado. No se debe hacer push directamente a esta rama. Todo el código debe pasar por una Pull Request.

develop: Es la rama de integración. Las nuevas funcionalidades se fusionan aquí antes de pasar a main.

Ramas de funcionalidad (feature/*): Para cualquier nueva funcionalidad, crea una rama a partir de develop.

Nomenclatura: feature/nombre-corto-de-la-funcionalidad (ej: feature/user-authentication).

Una vez que termines, abre una Pull Request para fusionar tu rama de feature en develop.

Pasos para contribuir

Crea una nueva rama:

git checkout develop
git pull origin develop
git checkout -b feature/mi-nueva-funcionalidad

Desarrolla tu funcionalidad: Escribe tu código y asegúrate de que los tests pasen localmente.

npm test

Haz commit de tus cambios: Usa mensajes de commit claros y descriptivos.

git add .
git commit -m "feat: Agrega autenticación de usuarios"

Sube tus cambios:

git push origin feature/mi-nueva-funcionalidad

Abre una Pull Request: Ve a GitHub y abre una PR de tu rama feature hacia develop.

Guía de Estilo de Código

Lenguaje: Todo el código, comentarios y documentación deben estar en español o inglés, de manera consistente.

Formato: Usamos ESLint para mantener un estilo de código uniforme. Antes de hacer commit, asegúrate de que no haya errores de linting.

npm run lint

Principios:

DRY (Don't Repeat Yourself): Evita duplicar código.

KISS (Keep It Simple, Stupid): Prefiere soluciones simples y claras sobre las complejas.

Nombres Descriptivos: Usa nombres de variables y funciones que expliquen su propósito.
