import { useTodos } from "./hooks/useTodos";
import { MainLayout } from "./components/templates/MainLayout";
import { TaskForm } from "./components/organisms/TaskForm";
import { TaskList } from "./components/organisms/TaskList";
import { FilterButtons } from "./components/molecules/FilterButtons";

function App() {
  const todoHook = useTodos();

  return (
    <MainLayout>
      <TaskForm addTodo={todoHook.addTodo} />
      <FilterButtons filter={todoHook.filter} setFilter={todoHook.setFilter} />
      <TaskList
        todos={todoHook.filteredTodos}
        toggleTodo={todoHook.toggleTodo}
        removeTodo={todoHook.removeTodo}
      />
    </MainLayout>
  );
}

export default App;
