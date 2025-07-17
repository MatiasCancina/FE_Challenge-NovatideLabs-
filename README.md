# Todo App Novatide Challenge

## Description
This application is a Todo List (Todo App) developed as part of the technical challenge from Novatide Labs. It allows users to add, mark as completed, filter, and delete tasks easily and quickly. The main goal is to demonstrate good practices in frontend development, design of reusable components, and state management in React.

## Technologies Used
- **React** (with TypeScript): The main framework for building the interface and application logic.
- **Vite**: A development and build tool for modern frontend projects.
- **Tailwind CSS**: Used for designing and styling components with utility classes.
- **ESLint**: To maintain code quality and consistency.

## Project Structure
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

## How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/MatiasCancina/FE_Challenge-NovatideLabs-
   cd todo-app-novatide-challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The project will be available at `http://localhost:5173` (or the port indicated by Vite).

## Notes
- The project is prepared to be evaluated and modified easily.
- The code is organized by components and follows a clean architecture.

Thank you for evaluating this challenge!
