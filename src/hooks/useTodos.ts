import { useEffect, useState } from "react";
import type { Todo, Filter } from "../types/types";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todos";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setTodos(JSON.parse(stored));
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, initialized]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: uuidv4(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return {
    todos,
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    removeTodo,
    toggleTodo,
  };
}
