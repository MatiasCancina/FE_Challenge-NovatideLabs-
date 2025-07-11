"use client";

import type { Todo } from "../../types/types";
import { TaskItem } from "../molecules/TaskItem";
import { FiCheckCircle } from "react-icons/fi";

type Props = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const TaskList = ({ todos, toggleTodo, removeTodo }: Props) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
          <FiCheckCircle className="w-8 h-8 text-indigo-500" />
        </div>
        <p className="text-gray-500 text-lg font-medium mb-2">All caught up!</p>
        <p className="text-gray-400 text-sm">Add a task to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Tasks ({todos.length})
        </h2>
        <div className="text-sm text-gray-500">
          {todos.filter((t) => t.completed).length} completed
        </div>
      </div>

      <ul className="max-h-[35vh] overflow-y-auto overflow-x-hidden space-y-3">
        {todos.map((todo) => (
          <TaskItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};
