
# Todo App Novatide Challenge

## Descripción
Esta aplicación es una lista de tareas (Todo App) desarrollada como parte del challenge técnico de Novatide Labs. Permite agregar, marcar como completadas, filtrar y eliminar tareas de manera sencilla y rápida. El objetivo principal es demostrar buenas prácticas de desarrollo frontend, diseño de componentes reutilizables y manejo de estado en React.

## Tecnologías utilizadas
- **React** (con TypeScript): Framework principal para la construcción de la interfaz y la lógica de la aplicación.
- **Vite**: Herramienta de desarrollo y build para proyectos modernos de frontend.
- **Tailwind CSS**: Utilizado para el diseño y estilizado de los componentes con clases utilitarias.
- **ESLint**: Para mantener la calidad y consistencia del código.

## Estructura del proyecto
```
eslint.config.js
index.html
package.json
README.md
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
  logo.svg
  vite.svg
src/
  App.css
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
  assets/
    react.svg
  components/
    atoms/
      Button.tsx
      Input.tsx
    molecules/
      FilterButtons.tsx
      TaskItem.tsx
    organisms/
      TaskForm.tsx
      TaskList.tsx
    templates/
      MainLayout.tsx
  hooks/
    useTodos.ts
  types/
    types.ts
```

## ¿Cómo levantar el proyecto?

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/MatiasCancina/FE_Challenge-NovatideLabs-
   cd todo-app-novatide-challenge
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   El proyecto estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

## Notas
- El proyecto está preparado para ser evaluado y modificado fácilmente.
- El código está organizado por componentes y siguiendo una arquitectura limpia.

¡Gracias por evaluar este challenge!